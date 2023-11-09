import './App.css';
import Quiz from './components/Quiz';
import data from './data/quizData.json';

function App() {
  const quizData = data.questions;
  return <Quiz quizData={quizData} />;
}

export default App;
