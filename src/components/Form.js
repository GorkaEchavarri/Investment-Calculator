import React, {useState} from 'react';
import './Form.css';

const initialUserInput = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  duration: 10
}

function Form(props) {

  const [userInput, setUserInput] = useState(initialUserInput);

  function submitHandler(event) {
    event.preventDefault()
    props.onCalculate(userInput)
  };

  function resetHandler(event) {
    setUserInput(initialUserInput)
  };

  function imputChangeHandler(input, value ) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value
      };
    });
  };

return <form onSubmit={submitHandler} className="form">
<div className="input-group">
  <p>
    <label htmlFor="current-savings">Current Savings ($)</label>
    <input
    value={userInput['current-savings']}
    onChange={(event) => imputChangeHandler('current-savings', event.target.value)}
    type="number" id="current-savings" />
  </p>
  <p>
    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
    <input
    value={userInput['yearly-contribution']}
    onChange={(event) => imputChangeHandler('yearly-contribution', event.target.value)}
    type="number" id="yearly-contribution" />
  </p>
</div>
<div className="input-group">
  <p>
    <label htmlFor="expected-return">
      Expected Interest (%, per year)
    </label>
    <input
    value={userInput['expected-return']}
    onChange={(event) => imputChangeHandler('expected-return', event.target.value)}
    type="number" id="expected-return" />
  </p>
  <p>
    <label htmlFor="duration">Investment Duration (years)</label>
    <input
    value={userInput['duration']}
    onChange={(event) => imputChangeHandler('duration', event.target.value)}
    type="number" id="duration" />
  </p>
</div>
<p className="actions">
  <button onClick={resetHandler} type="reset" className="buttonAlt">
    Reset
  </button>
  <button type="submit" className="button">
    Calculate
  </button>
</p>
</form>
}

export default Form;
