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
const store = createStore(
	reducers,
	{
		date: new Date(),
		events: events
	},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const prevStoreSnapshot = {
	date: 0,
	showModal: false
}

store.subscribe(() => {
	const newState = store.getState();
	if (newState.date.getTime() === prevStoreSnapshot.date && prevStoreSnapshot.showModal === newState.modal.show) {
		localStorage.setItem("events", JSON.stringify(newState.events))
	} else {
		prevStoreSnapshot.date = newState.date.getTime()
		prevStoreSnapshot.showModal = newState.modal.show
	}
})

ReactDOM.render(
  <Provider store={store}>
    <InternationalizationProvider defaultLanguage="ua" languages={languages}>
      <App />
    </InternationalizationProvider>
	</Provider>
, document.getElementById('root'))
