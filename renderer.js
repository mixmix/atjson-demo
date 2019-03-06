const Renderer = require('@atjson/renderer-hir').default

module.exports = class HTMLRenderer extends Renderer {
  // * root () {
  //   let text = yield
  //   return text.join('')
  // }

  * renderAnnotation (annotation) {
    let element = document.createElement(annotation.type)
    Object.assign(element, annotation.attributes)
    let children = yield
    for (let child in children) {
      element.appendChild(child)
    }
    return element
  }

  // was expecting this to be called?
  * Heading () {
    let text = yield
    debugger
    return `_${text.join('')}_`
  }
}
