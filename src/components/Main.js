import React from 'react'
import Questions from './Play'

const Main = (props) => {
    return (
        <div>
            <strong>Points: {props.points}/{props.sum}</strong>
            <br/><br/>
            {console.log(props.dashboard)}
            <Questions
                id={props.id}
                pointsLel={props.pointsLel}
                question={props.val.question}
                options={props.val.options}
                correct={props.val.correct}
                points={props.val.points}
                addPoints={props.addPoints}
                nextQuestion={props.nextQuestion}
                addDashboard={props.addDashboard}
            />
        </div>
    )
}

export default Main