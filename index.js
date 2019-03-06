require('@babel/polyfill') // needed for generators see https://babeljs.io/docs/en/babel-polyfill

const Document = require('@atjson/document').default
const HTMLRenderer = require('./renderer.js')

const content = require('./sample/content')
const annotations = require('./sample/annotations')

const doc = new Document({ content, annotations })

console.log(doc)
// NOTE - Document does some parsing of the annotations, and since it doesn't know how to handle them
// it returns a doc with annotations of type 'undefined'.
//
// See https://github.com/CondeNast-Copilot/atjson/blob/latest/packages/%40atjson/document/src/index.ts#L59

const html = HTMLRenderer.render(doc)
console.log(html)

// TODO - append to the DOM?
