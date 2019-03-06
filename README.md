# atjson-demo

the goal is to take atjson for a test run to see if it's suitable as a message format for scuttlebutt

## Progress

```bash
$ npm install
$ npm start
```
I've focused on trying to take an example text+annotation and render it to a page.
Running the above spins up the code so far using electro (a more unixy electron).
You need to open the dev console to see output.

## Todo

There's still work to do figure out how to:
- get annotations in the correct form
  - which notation?
  - using `#defineConverterTo` ? [link](https://github.com/CondeNast-Copilot/atjson/blob/latest/packages/%40atjson/document/src/index.ts#L37)
- get renderer producing html
  - understand these [annotation types](https://github.com/CondeNast-Copilot/atjson/tree/latest/packages/%40atjson/offset-annotations/src/annotations) ? 
  - add rules / generators for different annotation types like Heading, Bold etc? (see [renderer-hir docs](https://github.com/CondeNast-Copilot/atjson/tree/latest/packages/%40atjson/renderer-hir))
    - I don't understand how these connect in yet

## Failures

I've tried and failed at:
- getting electro to work with import / es modules
  - error: complains about import not being recognised
  - solution: use require
- getting browserify to build a working `bundle.js`
  - problem: configuring babelify, @babel/preset-env and a bunch of stuff to stop genertor errors
  - error: still getting "constructors have to be called with |new|" sorta error

I spent an embarassing amount of time trying to get that config sorted...

## Questions 

- Maybe I should just jump straight to trying to use [@atjson/editor](https://github.com/CondeNast-Copilot/atjson/tree/latest/packages/%40atjson/editor)
- I think in a lot of places the docs are slightly out of sync with the code ?

