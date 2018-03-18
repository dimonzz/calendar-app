import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import App from './App';

let events = JSON.parse(localStorage.getItem("events"));
events = events ? events : {};
let store = createStore(reducers, {
	date: new Date(),
	events: events
});

const prevStoreSnapshot = {
	date: 0,
	showModal: false
}
store.subscribe(() => {
	const newState = store.getState();
	if (newState.date.getTime() === prevStoreSnapshot.date && prevStoreSnapshot.showModal === newState.modal.show) {
		localStorage.setItem("events", JSON.stringify(newState.events));
	}else{
		prevStoreSnapshot.date = newState.date.getTime();
		prevStoreSnapshot.showModal = newState.modal.show;
	}
})

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'));
