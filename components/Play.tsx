"use client"

import { useEffect, useState } from "react"

const handAvailable = ['✌️', '✊', '🖐️'];

const isUserScored = (userHand: string, enemyHand: string) => {
    if (userHand == '✌️' && enemyHand == '✌️') {
        return 'draw'
    } else if (userHand == '✊' && enemyHand == '✊') {
        return 'draw'
    } else if (userHand == '🖐️' && enemyHand == '🖐️') {
        return 'draw'
    } else if (userHand == '🖐️' && enemyHand == '✊') {
        return true
    } else if (userHand == '🖐️' && enemyHand == '✌️') {
        return false
    } else if (userHand == '✊' && enemyHand == '✌️') {
        return true
    } else if (userHand == '✊' && enemyHand == '🖐️') {
        return false
    } else if (userHand == '✌️' && enemyHand == '✊') {
        return false
    } else if (userHand == '✌️' && enemyHand == '🖐️') {
        return true
    } else {
        return 'not recognize input'
    }
}

function delay(delay: number) {
    return new Promise(res => setTimeout(res, delay));
}

export default function Play() {
    const [userScore, setUserScore] = useState(0)
    const [enemyScore, setEnemyScore] = useState(0)

    const [isUserSelected, setIsUserSelected] = useState(false)
    const [userSelected, setUserSelected] = useState('')

    const [isEnemySelected, setIsEnemySelected] = useState(false)
    const [enemySelected, setEnemySelected] = useState('')

    const [isLoading, setIsLoading] = useState(false)

    const [ShowAlert, setShowAlert] = useState(false)
    const [alert, setAlert] = useState('')
    const setHandUser = async (hand: string) => {
        setShowAlert(true)
        setIsLoading(true)
        setIsUserSelected(true)
        setUserSelected(hand)

        setIsEnemySelected(true)
        let randomSelected = handAvailable[Math.floor(Math.random() * handAvailable.length)]
        setEnemySelected(randomSelected)

        if (userScore >= 5 || enemyScore >= 5) {
            if (userScore >= 5) {
                setAlert('You win. Well you beat me this time')
            } else if (enemyScore >= 5) {
                setAlert('Fkry wins, Better Luck Next Time')
            }
            await delay(4000)
            setShowAlert(false)
            setEnemyScore(0)
            setUserScore(0)
        } else {
            if (isUserScored(hand, randomSelected) == true) {
                setUserScore(userScore + 1)
                setAlert('You Scored!')
            } else if (isUserScored(hand, randomSelected) == false) {
                setEnemyScore(enemyScore + 1)
                setAlert('Fkry Scored!')
            } else {
                setAlert(`It's Draw`)
            }
            await delay(2000)
        }



        setIsLoading(false)
        setIsEnemySelected(false)
        setIsUserSelected(false)



    }
    return (
        <>
            <h1 className="font-semibold">
                <p className="text-transparent text-gradient-primary lg:text-4xl text-3xl mt-1">Play with Me</p>
                <p className="text-pink-500">Let see how lucky you are</p>
            </h1>
            <div className="lg:w-[70%] w-[90%] mx-auto mt-[20px] mb-[50px] p-[20px] border-[2px] border-gray-400 rounded-lg border-dashed">
                <div className="text-center font-semibold">
                    <div className="text-lg">
                        The first one to score 5 wins.
                    </div>
                    {ShowAlert ? (<>
                        <p className="text-gray-500">
                            {alert}
                        </p>
                    </>) : null}
                </div>
                <div className="flex justify-between items-center text-xl font-bold">
                    <div>
                        <span className="text-sm">You</span> {userScore}
                    </div>
                    <div>
                        <span className="text-sm">Fkry</span> {enemyScore}
                    </div>
                </div>
                <div className="text-center mt-5">
                    <p className="font-bold mb-2 text-gray-600">Fkry</p>
                    <p className="text-5xl">
                        {
                            isEnemySelected ? <>
                                {enemySelected}
                            </> : <RandomHand />
                        }

                    </p>
                </div>
                <div className="font-bold text-center my-10">
                    VS
                </div>
                <div className="text-center mt-5">
                    <p className="text-5xl">
                        {isUserSelected ? <>
                            {userSelected}
                        </> : <RandomHand />}

                    </p>
                    <p className="font-bold mt-2 text-gray-600">You</p>
                    <div className="flex gap-7 items-center justify-center mt-3">
                        <button className={`btn text-2xl ${isLoading ? 'opacity-40' : ''}`} onClick={e => { setHandUser('✌️') }} disabled={isLoading}>
                            ✌️
                        </button>
                        <button className={`btn text-2xl ${isLoading ? 'opacity-40' : ''}`} onClick={e => { setHandUser('✊') }} disabled={isLoading}>
                            ✊
                        </button>
                        <button className={`btn text-2xl ${isLoading ? 'opacity-40' : ''}`} onClick={e => { setHandUser('🖐️') }} disabled={isLoading}>
                            🖐️
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}


function RandomHand() {
    const [index, setIndex] = useState(0)

    let i = 0
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(i)
            i++
            if (i > 2) {
                i = 0
            }
        }, 500)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return <>
        {handAvailable[index]}
    </>

}