import React from "react";
import { Button } from "../../Components/Button/Button";
import { questions } from "../../data.json";
import {
  Content,
  Container,
  ContentContainer,
  ButtonContiner,
  Header,
} from "./Questionnaire.styles";
import { BackIcon, CheckIcon, NextIcon } from "../../Components/Icons/Icon";
import { ProgressBar } from "../../Components/ProgressBar/ProgressBar";
import useQuestions from "./useQuestionnaire";
import { AnswerOptions } from "./Answers";
import { Question } from "./Questions";
import { Outcome } from "./Outcome";

export function Questionaire() {
  const {
    handleSelectOption,
    handleNextQuestion,
    handlePreviousQuestion,
    handleRestart,
    progress,
    currentQuestion,
    currentIndex,
    selectedOption,
    index,
    outcome,
    questionID,
    outcomeID,
  } = useQuestions();
  return (
    <React.Fragment>
      <Container>
        <Header>
          <Button
            style={{
              marginRight: 10,
              padding: 10,
              display: "flex",
              position: "absolute",
              left: 0,
            }}
            transparent
            id="back-button"
            onClick={handlePreviousQuestion}
          >
            <BackIcon />
          </Button>
          <h1>Car Maintainance Questionnaire</h1>
        </Header>
        <div style={{ marginTop: 20 }}>
          <ProgressBar width={progress} />
        </div>

        {index.length <= questions.length ? (
          <ContentContainer>
            <Content>
              <Question id={questionID} label={currentQuestion} />
              <div style={{ display: "flex" }}>
                {questions[currentIndex].answers.map((option) => (
                  <AnswerOptions
                    key={option.id}
                    active={selectedOption === option.id}
                    id={option.id}
                    icon={
                      selectedOption === option.id ? (
                        <CheckIcon style={{ width: 20, height: 20 }} />
                      ) : undefined
                    }
                    score={option.score}
                    onClick={() => {
                      handleSelectOption(option.id, option.score);
                    }}
                    label={option.label}
                  />
                ))}
              </div>
            </Content>
            <ButtonContiner>
              <Button
                id="next-button"
                icon={<NextIcon style={{ width: 20, height: 20 }} />}
                iconPosition="right"
                disabled={selectedOption === undefined}
                onClick={handleNextQuestion}
                style={{ width: "100%" }}
              >
                Next
              </Button>
            </ButtonContiner>
          </ContentContainer>
        ) : (
          <ContentContainer>
            <Content>
              <Outcome id={outcomeID} label={outcome} />
            </Content>
            <ButtonContiner>
              <div>
                <Button
                  onClick={handleRestart}
                  transparent
                  id="start-again"
                  style={{ width: "100%" }}
                >
                  Go Back to Start
                </Button>
              </div>
            </ButtonContiner>
          </ContentContainer>
        )}
      </Container>
    </React.Fragment>
  );
}
