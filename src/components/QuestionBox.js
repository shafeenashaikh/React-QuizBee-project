import React from "react";

const QuestionBox = ({question, questions}) => {
    return(
        <div className="questionBox">
            <div className="question">{question}</div>
        </div>
    )
} 
export default QuestionBox