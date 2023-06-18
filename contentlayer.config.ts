import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    fields: {
      title: { type: 'string', required: true },
      description: { type: 'string', required: true },
      category:{type:'string', required:true},
      date: { type: 'date', required: true },
      image_link : {type:'string', required:true},

      tech_stack : {type: 'list', of: { type: 'string' }, required:false},
      demo_link : {type: 'string', required:false}
    },
    computedFields: {
      url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
    },
  }))
  

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })