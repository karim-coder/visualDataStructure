import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

const questions = [
  {
    content: "Process of inserting an element in stack is called ____________",
    answers: ["Create", "Push", "Evaluation", "Pop"],
  },
  {
    content: " Process of removing an element from stack is called __________",
    answers: ["Create", "Push", "Evaluation", "Pop"],
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
  },
  {
    content:
      "Pushing an element into stack already having five elements and stack size of 5, then stack becomes ___________",
    answers: ["Overflow", "Crash", "Underflow", "User flow"],
  },
];

const Quiz = () => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");
  const [answers, setAnswers] = React.useState(
    Array.apply(null, Array(questions.length)).map(function () {})
  );

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

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
  console.log("Answers: ", answers);

  return (
    <Container maxWidth="xl" style={{ marginTop: 20 }}>
      <form onSubmit={handleSubmit}>
        {questions.map((item, index) => (
          <Grid xl={12}>
            <FormControl sx={{ m: 3 }} error={error} variant="standard">
              <FormLabel id="demo-error-radios">{item.content}</FormLabel>
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
                    value={answer}
                    control={<Radio />}
                    label={answer}
                  />
                  // <div>{answer}</div>
                ))}
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
              {/* <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                Check Answer
              </Button> */}
            </FormControl>
          </Grid>
        ))}
      </form>
    </Container>
  );
};

export default Quiz;
