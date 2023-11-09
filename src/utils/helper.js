export function answerMatcher(expectedAnswers, actualAnswers) {
  let result = [];
  expectedAnswers.forEach((item) => {
    const matchedItem = actualAnswers.find((subItem) => subItem === item);
    result.push(matchedItem);
  });
  return result.every((item) => item);
}
