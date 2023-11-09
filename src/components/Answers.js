import React, { memo, useState } from 'react';

const Answers = ({ initialState, onSubmit }) => {
  const [answers, setAnswers] = useState(initialState);

  const handleChange = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;
    const clonedAnswer = [...answers];
    const targetIndex = clonedAnswer.findIndex(
      (item) => item.id === targetName
    );
    clonedAnswer[targetIndex].answer = targetValue;
    setAnswers(clonedAnswer);
  };

  return (
    <>
      {answers.map((item) => (
        <div className="card" key={item.id}>
          <input
            type="text"
            name={item.id}
            value={item.answer}
            placeholder="Please provide your input"
            onChange={handleChange}
          />
        </div>
      ))}
      <div className="container">
        <button type="submit" onClick={() => onSubmit(answers)}>
          Submit
        </button>
      </div>
    </>
  );
};

export default memo(Answers);
