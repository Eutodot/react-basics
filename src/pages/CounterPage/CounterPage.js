import { useState } from "react"

const CounterPage = () => {
  const INITIAL_VALUE = 5
  const [num, setNum] = useState(INITIAL_VALUE)
  const [grades, setGrades] = useState([])

  // const plus1Handler = () => setNum(num + 1)
  // const plus2Handler = () => setNum(num + 2)
  // const plus5Handler = () => setNum(num + 5)
  // const minus1Handler = () => setNum(num - 1)
  // const minus2Handler = () => setNum(num - 2)
  // const minus5Handler = () => setNum(num - 5)

  const numHandler = add => setNum(prevState => prevState + add)
  const numChange = newNum => setNum(newNum)
  const addGradeHandler = () => setGrades(prevState => [num, ...prevState])
  const deleteAllGradesHandler = () => setGrades([])
  const deleteSingleGradeHandler = index => setGrades(prevState => prevState.filter((_, i) => i !== index))

  const getColor = (grade) => grade >= 5 ? 'green' : 'red'

  return (
    <div>
        <h3 style={{color: getColor(num)}}>{num}</h3>
        <button onClick={() => setNum(num + 1)} disabled={num > 9}>+1</button>
        <button onClick={() => numHandler(2)} disabled={num > 8}>+2</button>
        <button onClick={() => numHandler(5)} disabled={num > 5}>+5</button>
        <button onClick={() => numHandler(-1)} disabled={num < 2}>-1</button>
        <button onClick={() => numHandler(-2)} disabled={num < 3}>-2</button>
        <button onClick={() => numHandler(-5)} disabled={num < 6}>-5</button>
        <input type='number' value={num} onChange={e => numChange(Number(e.target.value))} min='1' max='10'/>
        <button onClick={() => setNum(INITIAL_VALUE)}>Reset</button>
        <button onClick={addGradeHandler}>Add grade</button>
        <button onClick={deleteAllGradesHandler}>Delete grades</button>
        <h4>{grades.length > 0 ? 'Grades list' : 'No grades saved'}</h4>
        {grades.length > 0 && (
          <ul>
            {grades.map((grade, index) => (
              <li key={index} style={{color: getColor(grade)}}>
                {grade}
                <button onClick={() => deleteSingleGradeHandler(index)}>X</button>
              </li>
            ))}
          </ul>
        )}
        
    </div>

  )
}

export default CounterPage