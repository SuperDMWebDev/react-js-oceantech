import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Car from './Lop'
import {A,A1} from './ClassComponent'
class Lop extends React.Component{
  render(){
    return <p>Xin chào ReactJS, hiển thị HTML sử dụng Class Component</p>
  }
}

function Ham(props)
{
  return (
  <>
  <Lop />
   <p >Xin chào ReactJS, hiển thị HTML sử dụng Function Component</p>;
  </>
  )}
ReactDOM.render(
  <A1 show1="getDerivedStateFromProps"/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
