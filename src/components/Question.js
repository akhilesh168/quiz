import React, { memo, useCallback } from 'react';
import { answerMatcher } from '../utils/helper';
import Answers from './Answers';
import './Question.css';

const Question = ({ question }) => {
  const initialState = useCallback(() => {
    return question.matching_interaction.left.map((item) => {
      return { id: item.id, answer: '' };
    });
  }, [question]);

  const handleSubmit = (answers) => {
    const modifiedResult = answers.map((item) => {
      return item.id + item.answer;
    });
    const result = answerMatcher(question.answers, modifiedResult);

    if (result) {
      alert('Passed');
    } else {
      alert('Try again');
    }
  };
  return (
    <>
      <h2 className="prompt-text">{question.prompt}</h2>
      <div className="row">
        <div className="column">
          {question.matching_interaction.left.map((item) => (
            <div key={item.id} className="card">
              <p>{item.content}</p>
            </div>
          ))}
        </div>
        <div className="column">
          <Answers initialState={initialState} onSubmit={handleSubmit} />
        </div>
        <div className="column">
          {question.matching_interaction.right.map((item) => (
            <div key={item.id} className="card">
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default memo(Question);
