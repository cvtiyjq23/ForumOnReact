import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import Store from "./Redux/State";
import Store from "./Redux/redux_store";
import App from "./App";
import store from "./Redux/redux_store";


const root = ReactDOM.createRoot(document.getElementById('root'));

let Rerender_Entire_Tree = (State) => {
    root.render(
        <React.StrictMode>
            <App store = {store} />
        </React.StrictMode>
    );
}
Rerender_Entire_Tree (store.getState());

store.subscribe(
    () => {
        let state = store.getState()
        Rerender_Entire_Tree(state);
    }
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

