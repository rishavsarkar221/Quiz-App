import React, { useState } from 'react'
import styled from 'styled-components'

const Div = styled.div`
    background-color: ${(props) => props.result === 'Not Correct' ? "red" : "lime"};
    width: 20%;
`

const Dashboard = (props) => {
    const yourAnswer = props.yourAnswer

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="questionDashboard">{props.question}</h5>
                
                {props.options.map(val => (
                    <div>
                        <input type="radio" disabled value={val} checked={val === yourAnswer} key={val} /> {val}
                    </div>
                ))}
                <br/>
                <b>Your Answer</b>: {props.yourAnswer}<br/>
                <b>Correct Answer</b>: {props.correct}
                <br/><br/><br/>
                <Div result={props.result}>
                    <h4>{props.result}</h4>
                </Div>
            </div>
        </div>
    )
}

export default Dashboard