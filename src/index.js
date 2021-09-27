import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './assets/style.css'

class QuizBee extends Component{
    render(){
        return(
            <div className="container">
                <div className="title">QuizBee</div>
            </div>
        )
    }
}
ReactDom.render(<QuizBee/>, document.getElementById("root"));