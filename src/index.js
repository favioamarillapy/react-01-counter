import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import './index.css';


const root = document.getElementById('root')


ReactDOM.render(<Counter value= { 0 } />, root);
