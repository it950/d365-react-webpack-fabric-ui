import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'
import App from 'components/App'

window.addEventListener('load', function onLoad() {
  ReactDOM.render(<App />, document.getElementById('root'))
})
