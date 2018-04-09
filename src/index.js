import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

import { InternationalizationProvider } from 'react-internationalization'
import * as languages from './translations'

import App from './App'

const events = JSON.parse(localStorage.getItem("events")) || {}
const store = createStore( reducers, { events }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

let prevEvents = events;

store.subscribe(() => {
	const newState = store.getState()
	if (newState.events !== prevEvents) {
		prevEvents = newState.events
		localStorage.setItem("events", JSON.stringify(newState.events))
	}
})

ReactDOM.render(
  <Provider store={store}>
    <InternationalizationProvider
			defaultLanguage="ua"
			languages={languages}
		>
      <App />
    </InternationalizationProvider>
	</Provider>
, document.getElementById('root'))
