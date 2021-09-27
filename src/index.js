import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './assets/style.css'
import QuestionBox from './components/QuestionBox';
import quizService from './quizService'

class QuizBee extends Component{

    state = {
        questionBank: []
    };
    getQuestions = () => {
        quizService().then(question => {
            this.setState({
                questionBank: question
            });
        });
    };
    componentDidMount(){
        this.getQuestions();
    }
    render(){
        return(
            <div className="container">
                <div className="title">QuizBee</div>
                {this.state.questionBank.length > 0 &&
                    this.state.questionBank.map(
                        ({question, answers, correct, questionId}) =>(
                            <QuestionBox 
                                question={question}
                                options={answers}
                                key={questionId}
                            />
                        )
                    )}

            </div>
        )
    }
}
ReactDom.render(<QuizBee/>, document.getElementById("root"));