import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

const HelloWorld = () => <h1>Hello World!</h1>

window.addEventListener('load', function onLoad() {
  ReactDOM.render(<HelloWorld />, document.getElementById('root'))
})
