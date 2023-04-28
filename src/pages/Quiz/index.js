import React, { useEffect } from "react";
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
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import APIRequest from "../../utils/APIRequest";
import ConfigAPIURL from "../../config/ConfigAPIURL";
import isEmpty from "../../utils/isEmpty";

// const questions = [
//   {
//     content: "Process of inserting an element in stack is called ____________",
//     answers: ["Create", "Push", "Evaluation", "Pop"],
//     correctAnswer: "Push",
//   },
//   {
//     content: " Process of removing an element from stack is called __________",
//     answers: ["Create", "Push", "Evaluation", "Pop"],
//     correctAnswer: "Pop",
//   },
//   {
//     content:
//       "In a stack, if a user tries to remove an element from an empty stack it is called _________",
//     answers: [
//       "Underflow",
//       "Empty collection",
//       "Overflow",
//       "Garbage Collection",
//     ],
//     correctAnswer: "Underflow",
//   },
//   {
//     content:
//       "Pushing an element into stack already having five elements and stack size of 5, then stack becomes ___________",
//     answers: ["Overflow", "Crash", "Underflow", "User flow"],
//     correctAnswer: "Overflow",
//   },
//   {
//     content:
//       "Entries in a stack are “ordered”. What is the meaning of this statement?",
//     answers: [
//       "A collection of stacks is sortable",
//       "Stack entries may be compared with the ‘<‘ operation",
//       "The entries are stored in a linked list",
//       "There is a Sequential entry that is one by one",
//     ],
//     correctAnswer: "There is a Sequential entry that is one by one",
//   },
//   {
//     content:
//       "Consider the usual algorithm for determining whether a sequence of parentheses is balanced. The maximum number of parentheses that appear on the stack AT ANY ONE TIME when the algorithm analyzes: (()(())(()))?",
//     answers: ["1", "2", "3", "4 or more"],
//     correctAnswer: "3",
//   },
//   {
//     content:
//       "Which one of the following is an application of Stack Data Structure?",
//     answers: [
//       "Managing function calls",
//       "The stock span problem",
//       "Arithmetic expression evaluation",
//       "All of the above",
//     ],
//     correctAnswer: "All of the above",
//   },
//   {
//     content: "What is output for input 'geeksquiz'?",
//     answers: [
//       "geeksquizgeeksquiz",
//       "ziuqskeeg",
//       "geeksquiz",
//       "ziuqskeegziuqskeeg",
//     ],
//     correctAnswer: "ziuqskeeg",
//   },
//   {
//     content:
//       "The data structure required to check whether an expression contains balanced parenthesis is?",
//     answers: ["Stack", "Queue", "Array", "Tree"],
//     correctAnswer: "Stack",
//   },
//   {
//     content:
//       "The process of accessing data stored in a serial access memory is similar to manipulating data on a ------?",
//     answers: ["Heap", "Binary Tree", "Array", "Stack"],
//     correctAnswer: "Stack",
//   },
// ];

const Quiz = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let location = useLocation();

  const user = useSelector((store) => store.user);

  const { type } = location.state;
  console.log("Type: ", type);
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("");
  const [questions, setQuestions] = React.useState([]);
  const [answers, setAnswers] = React.useState(
    Array.apply(null, Array(questions.length)).map(function () {})
  );
  const [mark, setMark] = React.useState(null);
  const [showMark, setShowMark] = React.useState(false);
  useEffect(() => {
    getQuiz();
  }, []);

  const getQuiz = () => {
    APIRequest.request(
      "POST",
      ConfigAPIURL.getQuizBasedOnTopic,
      JSON.stringify({
        category: type,
        NoOfQuestion: 10,
      })
    ).then((res) => {
      if (!isEmpty(res)) {
        if (res.code === 100) {
          if (res.data.responseCode === 109) {
            setQuestions(res.data.rows);
          }
        }
      }
    });
  };

  const SubmitQuiz = (marksObtained) => {
    console.log("Mark: ", marksObtained);
    APIRequest.request(
      "POST",
      ConfigAPIURL.createTest,
      JSON.stringify({
        category: type,
        marksObtained: marksObtained,
        totalMark: questions.length,
      })
    ).then((res) => {
      if (!isEmpty(res)) {
        if (res.code === 100) {
          if (res.data.responseCode === 109) {
            navigate("/my-tests");
          }
        }
      }
    });
  };

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  // console.log("Answers: ", answers);

  if (isEmpty(user)) {
    return <Navigate to="/login" state={"quiz"} />;
    // return <></>;
  }
  console.log(answers);

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
              error={error && !answers[index] && answers[index] !== 0}
              variant="standard"
            >
              <FormLabel id="demo-error-radios">
                <span
                  style={{
                    // padding: "2px 7px",
                    // background: "#0039C6",
                    // borderRadius: "50%",
                    marginRight: 5,
                    color: "#0039C6",
                  }}
                >
                  {index + 1}.
                </span>
                {item.question}
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                // value={value}
                onChange={(event) => {
                  let arr = [...answers];
                  arr[index] = parseInt(event.target.value);
                  setAnswers(arr);
                }}
              >
                {item.options.map((answer, index) => (
                  <FormControlLabel
                    disabled={showMark}
                    value={index}
                    control={<Radio />}
                    label={answer}
                  />
                  // <div>{answer}</div>
                ))}
              </RadioGroup>
              {error && !answers[index] && answers[index] !== 0 && (
                <FormHelperText>Please select an option.</FormHelperText>
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
                if (!answers[i] && answers[i] !== 0) {
                  a = true;
                  setError(true);
                  break;
                }
              }

              if (!a) {
                let totalMark = 0;
                questions.map((item, index) => {
                  if (item.answer[0] === answers[index]) {
                    totalMark += 1;
                  }
                });
                console.log("Total Mark: ", totalMark);
                setMark(totalMark);
                setShowMark(true);
                SubmitQuiz(totalMark);
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

export default connect()(Quiz);
