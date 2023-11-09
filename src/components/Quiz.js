import React, { memo } from 'react';

import Question from './Question';

const Quiz = ({ quizData }) => {
  return (
    <>
      {quizData.map((question) => (
        <Question key={question.title} question={question} />
      ))}
    </>
  );
};

export default memo(Quiz);
