import { useState } from 'react';

const initUserInput = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  duration: 10,
};

export default function UserInput(props) {
  const [userInput, setUseInput] = useState(initUserInput);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submit');
    props.onCalculate(userInput);
  };

  const resetHandler = (e) => {
    // e.preventDefault();
    console.log('reset');
    setUseInput(initUserInput);
  };

  const inputChangerHandler = (input, value) => {
    // e.preventDefault();
    console.log(input, value);
    setUseInput((prev) => {
      return { ...prev, [input]: value };
    });
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onClick={(event) =>
              inputChangerHandler('current-savings', event.target.value)
            }
            value={userInput['current-savings']}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onClick={(event) =>
              inputChangerHandler('yearly-contribution', event.target.value)
            }
            value={userInput['yearly-contribution']}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onClick={(event) =>
              inputChangerHandler('expected-return', event.target.value)
            }
            value={userInput['expected-return']}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onClick={(event) =>
              inputChangerHandler('duration', event.target.value)
            }
            value={userInput['duration']}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
