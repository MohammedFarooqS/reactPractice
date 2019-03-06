import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import { Provider } from 'react-redux';
//import store from './store';
class Index extends React.Component {
    render() {
        return (
            <div> 
                {/* <Provider store={store}>
                <App/>
                </Provider> */}
                <App/>
            </div>
        )
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
