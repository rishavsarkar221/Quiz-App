import React, { useState } from 'react'

const Questions = (props) => {
    const onClickHandler = (event) => {
        let correctOrNot = "correct"

        if (event.target.innerHTML === props.correct) {
            new Audio("Correct-answer/Correct-answer.mp3").play()
            props.addPoints(props.points)
            correctOrNot = "Correct"
        }
        else {
            new Audio("Incorrect-sound-effect/Incorrect-sound-effect.mp3").play()
            correctOrNot = "Not Correct"
        }

        const dashboardResult = {
            question: props.question,
            options: props.options,
            correct: props.correct,
            yourAnswer: event.target.innerHTML,
            result: correctOrNot,
        }

        props.addDashboard(dashboardResult)
        props.nextQuestion()
    }

    return (
        <div class="card" style={{width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">Q{props.id + 1}) {props.question}</h5>
                <br />
                Points: {props.pointsLel}
                <br/><br/>
                {props.options.map((val, id) => (
                    <div>
                        <span style={{fontSize: '19px'}}>{id+1})</span>
                        <span style={{marginLeft: '5%'}}></span>
                        <button
                            className="btn btn-outline-dark"
                            onClick={onClickHandler}
                            key={val}
                        >{val}
                        </button>
                        <br/><br/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Questions
