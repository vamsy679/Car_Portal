import { useEffect, useState } from "react";
import { questions, outcomes } from "../../data.json";
import { Next } from "../../types";

export default function () {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [score, setScore] = useState(0);
  const [newScore, setNewScore] = useState([0]);
  const [progress, setProgress] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<string>();
  const [questionID, setquestionID] = useState<string>();
  const [outcome, setOutcome] = useState<string>();
  const [outcomeID, setOutcomeID] = useState<string>();

  const [index, setIndex] = useState([0]);
  const [selectedOption, setSelectedOption] = useState<string>();

  const handleSelectOption = (id: string, score: number) => {
    setCurrentScore(score);
    setSelectedOption(id);

    questions[currentIndex].next.forEach((next: Next) => {
      if (next.answered && id === next.answered) {
        setquestionID(next.next_question);
      } else if (!next.answered) {
        setquestionID(next.next_question);
      }
    });
  };
  useEffect(() => {
    if (currentQuestion === undefined)
      return setCurrentQuestion(questions[0].question_text);
  }, [currentQuestion]);

  const handlePreviousQuestion = () => {
    if (index.length > 1) {
      index.pop();
    }
    const lastElement = index[index.length - 1];
    if (lastElement > 0) {
      handleQuestion(lastElement);
      setProgress(progress - 10);
    } else if (lastElement === 0) {
      setCurrentIndex(0);
      setCurrentQuestion(questions[0].question_text);
      setProgress(0);
    }
  };

  const showOutcome = (value: string | undefined) => {
    if (value) {
      outcomes.forEach(function (item) {
        if (item.id === value) {
          setOutcomeID(item.id);
          setOutcome(item.text);
        }
      });
    }
  };

  const handleOutcome = () => {
    const totalScore = score + currentScore;
    const maxScore = questions[currentIndex].next
      .map((next: Next) => {
        return next.max_score ? next.max_score : 0;
      })
      .filter((item) => item !== 0);

    const Outcome = (value: number) => {
      const nextOutcome = questions[currentIndex].next.map((item: Next) => {
        return item;
      });

      for (let i = 0; i <= nextOutcome.length; i++) {
        if (value === nextOutcome[i].max_score) {
          setOutcomeID(nextOutcome[i].outcome);
          return showOutcome(nextOutcome[i].outcome);
        } else if (
          value !== nextOutcome[i].max_score &&
          nextOutcome[i].max_score === undefined
        ) {
          setOutcomeID(nextOutcome[i].outcome);
          return showOutcome(nextOutcome[i].outcome);
        }
      }
    };

    const closest = maxScore.reduce((first, second) => {
      if (first >= totalScore) {
        return first;
      } else if (first < totalScore && second > totalScore) {
        return second;
      } else return totalScore;
    });

    return Outcome(closest);
  };

  const handleQuestion = (value: number) => {
    if (value) {
      questions.forEach(function (item, indexValue) {
        if (indexValue !== 0 && indexValue === value) {
          setCurrentIndex(indexValue);
          setCurrentQuestion(item.question_text);
        }
      });
    }
  };

  const handleNextQuestion = () => {
    const value = questionID;
    const indexVal = questions.findIndex((item) => item.id === value);
    handleQuestion(indexVal);
    if (currentScore !== 0) {
      newScore.push(currentScore);
      const sum = (previousValue: number, currentValue: number) =>
        previousValue + currentValue;
      setScore(newScore.reduce(sum));
    }

    if (currentIndex > 0 && questionID === undefined) {
      setProgress(100);
      index.push(score, progress);
      handleOutcome();
    } else {
      index.push(indexVal);
      setProgress(progress + 10);
    }
    setSelectedOption(undefined);
  };

  const handleRestart = () => {
    setIndex([0]);
    setProgress(0);
    setCurrentIndex(0);
    setScore(0);
    setOutcome(undefined);
    setOutcomeID(undefined);
    setCurrentQuestion(undefined);
    setNewScore([0]);
  };

  return {
    handleSelectOption,
    handleOutcome,
    handleNextQuestion,
    handlePreviousQuestion,
    handleQuestion,
    handleRestart,
    progress,
    currentQuestion,
    currentIndex,
    selectedOption,
    index,
    outcome,
    questionID,
    outcomeID,
  };
}
