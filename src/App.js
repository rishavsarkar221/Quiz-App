import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from './components/Main'
import Dashboard from './components/Dashboard'
import questions from './components/AllQuestions'

const App = () => {

	const [points, setPoints] = useState(0)
	const [whichIndex, setWhichIndex] = useState(0)
	const [dashboard, setDashboard] = useState([])
	const [hasEnded, setHasEnded] = useState(false)

	const addDashboard = (res) => {
		setDashboard(oldDashboard => [...oldDashboard, res])
	}

	let sum = 0

	questions.forEach(e => sum += e.points)

	const val = questions[whichIndex]

	const nextQuestion = () => {
		if (questions[questions.length - 1] === questions[whichIndex]) {
			setHasEnded(true)
		}
		else {
			setWhichIndex(whichIndex + 1)
		}
	}

	const addPoints = (noOfPoints) => {
		setPoints(points + noOfPoints)
	}

	return (
		<div>
			<Switch>
				<Route exact path="/">
					{!hasEnded ? (
						<Main
							id={whichIndex}
							points={points}
							sum={sum}
							dashboard={dashboard}
							val={val}
							addPoints={addPoints}
							nextQuestion={nextQuestion}
							addDashboard={addDashboard}
							pointsLel={questions[whichIndex].points}
						/>
					)
						: (
							<div>
								<h2>Your Performance overall in the Quiz</h2>
								<br /><br /><br />

								{dashboard.map(val => (
									<Dashboard
										question={val.question}
										options={val.options}
										yourAnswer={val.yourAnswer}
										correct={val.correct}
										result={val.result}
										key={val}
									/>
								))}
								<br /><br />
								You got: {points}/{sum} ({Math.floor(points/sum*100)}%)
								<br /><br />
								<button className="btn btn-outline-success" onClick={() => window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>Next!</button>
								<br /><br /><br />
							</div>
						)}
				</Route>

				<Route>
					<h1>Slow DOWN THERE BUCKAROO!!!<br />WHERE DO U THINK UR GOING!<br />CHUP CHAP KE QUIZ DE</h1>
				</Route>
			</Switch>
		</div>
	)
}

export default App