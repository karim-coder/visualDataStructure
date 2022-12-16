import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";
const questions = [
  {
    content: "Process of inserting an element in stack is called ____________",
    answers: ["Create", "Push", "Evaluation", "Pop"],
    correctAnswer: "Push",
  },
  {
    content: " Process of removing an element from stack is called __________",
    answers: ["Create", "Push", "Evaluation", "Pop"],
    correctAnswer: "Pop",
  },
  {
    content:
      "In a stack, if a user tries to remove an element from an empty stack it is called _________",
    answers: [
      "Underflow",
      "Empty collection",
      "Overflow",
      "Garbage Collection",
    ],
    correctAnswer: "Underflow",
  },
  {
    content:
      "Pushing an element into stack already having five elements and stack size of 5, then stack becomes ___________",
    answers: ["Overflow", "Crash", "Underflow", "User flow"],
    correctAnswer: "Overflow",
  },
  {
    content:
      "Entries in a stack are “ordered”. What is the meaning of this statement?",
    answers: [
      "A collection of stacks is sortable",
      "Stack entries may be compared with the ‘<‘ operation",
      "The entries are stored in a linked list",
      "There is a Sequential entry that is one by one",
    ],
    correctAnswer: "There is a Sequential entry that is one by one",
  },
  {
    content:
      "Consider the usual algorithm for determining whether a sequence of parentheses is balanced. The maximum number of parentheses that appear on the stack AT ANY ONE TIME when the algorithm analyzes: (()(())(()))?",
    answers: ["1", "2", "3", "4 or more"],
    correctAnswer: "3",
  },
  {
    content:
      "Which one of the following is an application of Stack Data Structure?",
    answers: [
      "Managing function calls",
      "The stock span problem",
      "Arithmetic expression evaluation",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    content: "What is output for input 'geeksquiz'?",
    answers: [
      "geeksquizgeeksquiz",
      "ziuqskeeg",
      "geeksquiz",
      "ziuqskeegziuqskeeg",
    ],
    correctAnswer: "ziuqskeeg",
  },
];

const Quiz = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { data } = location.state;
  console.log("Type: ", data);
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("");
  const [answers, setAnswers] = React.useState(
    Array.apply(null, Array(questions.length)).map(function () {})
  );
  const [mark, setMark] = React.useState(null);
  const [showMark, setShowMark] = React.useState(false);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Value: ", event);
    // if (value === "best") {
    //   setHelperText("You got it!");
    //   setError(false);
    // } else if (value === "worst") {
    //   setHelperText("Sorry, wrong answer!");
    //   setError(true);
    // } else {
    //   setHelperText("Please select an option.");
    //   setError(true);
    // }
  };
  // console.log("Answers: ", answers);

  return (
    <Container maxWidth="lg" style={{ marginTop: 20, paddingBottom: 20 }}>
      {showMark && (
        <Typography>
          You got {mark}/{questions.length}
        </Typography>
      )}
      <form>
        {questions.map((item, index) => (
          <Grid
            xl={12}
            style={{
              margin: 10,
              marginBottom: 20,
              boxShadow:
                "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              borderRadius: 10,
            }}
          >
            <FormControl
              sx={{ m: 3 }}
              error={error && !answers[index]}
              variant="standard"
            >
              <FormLabel id="demo-error-radios">
                <span
                  style={{
                    padding: "2px 7px",
                    background: "#0039C6",
                    borderRadius: "50%",
                    marginRight: 10,
                    color: "white",
                  }}
                >
                  {index + 1}
                </span>
                {item.content}
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                // value={value}
                onChange={(event) => {
                  let arr = [...answers];
                  arr[index] = event.target.value;
                  setAnswers(arr);
                }}
              >
                {item.answers.map((answer) => (
                  <FormControlLabel
                    disabled={showMark}
                    value={answer}
                    control={<Radio />}
                    label={answer}
                  />
                  // <div>{answer}</div>
                ))}
              </RadioGroup>
              {error && !answers[index] && (
                <FormHelperText>
                  {!answers[index] && "Please select an option."}
                </FormHelperText>
              )}
              {/* <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                Check Answer
              </Button> */}
            </FormControl>
          </Grid>
        ))}
        <Box style={{ textAlign: "center" }}>
          <Button
            sx={{ margin: 2 }}
            variant="outlined"
            onClick={() => {
              let a = false;
              for (let i = 0; i < answers.length; i++) {
                if (!answers[i]) {
                  a = true;
                  setError(true);
                  break;
                }
              }
              console.log("Hi", a);
              if (!a) {
                let totalMark = 0;
                questions.map((item, index) => {
                  if (item.correctAnswer === answers[index]) {
                    totalMark += 1;
                  }
                });
                console.log("Total Mark: ", totalMark);
                setMark(totalMark);
                setShowMark(true);
              } else {
                setError(true);
              }
            }}
          >
            Submit
          </Button>
          <Button
            sx={{ margin: 2 }}
            variant="outlined"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Quiz;
// box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

// box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;

{
  /*

  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
   */
}
