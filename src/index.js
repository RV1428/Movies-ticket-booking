import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css'
const header=<h1>This is react app</h1>
//ReactDOM.render(header,document.getElementById('root'))
//console.log(header)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App></App>)
//const div=document.getElementById('root')
//div.append(App())