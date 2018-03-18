import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import App from './App';

import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducers, {
	date: new Date(),
	events: {
		2018: {
			3: {
				18: [
						{
							id: 1,
							dateString: '18/3/2018',
							title: 'Event 1'
						},
						{
							id: 2,
							dateString: '18/3/2018',
							title: 'Event 2'
						}
					]
				}
			}
		}
});
console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();
