import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./style.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Snackbar from "@mui/material/Snackbar";
// import Toaster from "../../../components/Toaster";

// import SyntaxHighlighter from "react-syntax-highlighter";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
// import atelierDuneLight from "react-syntax-highlighter/dist/esm/styles/hljs/atelierDuneLight";
import { atelierCaveLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";
// atelierDuneLight;

// import sass from "react-syntax-highlighter/dist/esm/languages/prism/sass";
import cpp from "react-syntax-highlighter/dist/esm/languages/prism/cpp";
import { Link } from "react-router-dom";

const Stack = () => {
  const [list, setList] = useState([1, 2, 3, 4, 5]);
  const [number, setNumber] = useState(null);
  const [poppedValue, setPoppedValue] = useState(20);
  const [pushing, setPushing] = useState(false);
  const [show, setShow] = useState(false);
  const [popping, setPopping] = useState(false);
  const [popShow, setPopShow] = useState(false);
  const [popMessage, setMessage] = useState("");
  const codeString = `#include<stdio.h>
#include<stdlib.h>
#define Size 4 

int Top=-1, inp_array[Size];
void Push();
void Pop();
void show();
 
int main()
{
	int choice;
	
	while(1)	
	{
		printf("\\nOperations performed by Stack");
		printf("\\n1.Push the element\\n2.Pop the element\\n3.Show\\n4.End");
		printf("\\n\\nEnter the choice:");
		scanf("%d",&choice);
		
		switch(choice)
		{
			case 1: Push();
					break;
			case 2: Pop();
					break;
			case 3: show();
					break;
			case 4: exit(0);
			
			default: printf("\\nInvalid choice!!");
		}
	}
}
 
void Push()
{
	int x;
	
	if(Top==Size-1)
	{
		printf("\\nOverflow!!");
	}
	else
	{
		printf("\\nEnter element to be inserted to the stack:");
		scanf("%d",&x);
		Top=Top+1;
		inp_array[Top]=x;
	}
}
 
void Pop()
{
	if(Top==-1)
	{
		printf("\\nUnderflow!!");
	}
	else
	{
		printf("\\nPopped element:  %d",inp_array[Top]);
		Top=Top-1;
	}
}
 
void show()
{
	
	
	if(Top==-1)
	{
		printf("\\nUnderflow!!");
	}
	else
	{
		printf("\\nElements present in the stack: \\n");
		for(int i=Top;i>=0;--i)
			printf("%d\\n",inp_array[i]);
	}
}`;
  // Toast message
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
    message: "",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    console.log("Hi");

    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const cardStyle = {
    opacity: show ? 1 : 0,
    transition: "all 0s ease-in",
    animationName: show && "example",
    position: "relative",
    padding: "5px 10px",
    border: "1px solid black",
    textAlign: "center",
  };
  return (
    <div style={{ padding: 20 }}>
      <Typography
        variant="body1"
        style={{
          fontSize: 30,
          fontWeight: 700,
          textAlign: "center",
          fontFamily: "Open Sans",
        }}
      >
        Stack
      </Typography>

      <Typography
        variant="body1"
        style={{ fontSize: 18, fontFamily: "Open Sans", fontWeight: 500 }}
      >
        Stack is a linear data structure which follows a particular order in
        which the operations are performed. The order may be LIFO(Last In First
        Out) or FILO(First In Last Out). <br />
        There are many real-life examples of a stack. Consider an example of
        plates stacked over one another in the canteen. The plate which is at
        the top is the first one to be removed, i.e. the plate which has been
        placed at the bottommost position remains in the stack for the longest
        period of time. So, it can be simply seen to follow LIFO(Last In First
        Out)/FILO(First In Last Out) order.
      </Typography>
      <Grid container xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid
          xl={6.5}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          style={{ marginTop: 10 }}
        >
          <Grid
            style={{
              marginBottom: 5,
              display: "flex",
              justifyContent: "center",
              margin: 0,
              padding: 0,
              position: "relative",
              // width: 400,

              // alignItems: "center",
            }}
          >
            <Button
              style={{
                textTransform: "none",
                margin: 5,
                color: "white",
                width: 120,
                height: 40,
              }}
              variant="contained"
              disabled={popping || show}
              onClick={() => setList([])}
            >
              Clear Stack
            </Button>
            <Button
              style={{
                textTransform: "none",
                margin: 5,
                color: "white",
                width: 60,
                height: 40,
              }}
              variant="contained"
              disabled={popping || show}
              onClick={
                list.length === 0
                  ? handleClick({
                      vertical: "top",
                      horizontal: "center",
                      message: "Stack is empty",
                    })
                  : () => {
                      let num = [...list];
                      setPoppedValue(num.pop());
                      setPopShow(!popShow);
                      setPopping(true);
                      setTimeout(() => {
                        setPopping(false);
                        setList(num);
                      }, 1000);
                    }
              }
            >
              Pop
            </Button>
            <Button
              style={{
                textTransform: "none",
                margin: 5,
                color: "white",
                width: 60,
                height: 40,
              }}
              variant="contained"
              disabled={popping || show}
              onClick={
                number === null
                  ? handleClick({
                      vertical: "top",
                      horizontal: "center",
                      message: "Please enter a number",
                    })
                  : () => {
                      let num = [...list];
                      num.push(number);
                      setPushing(!pushing);
                      setShow(true);
                      setTimeout(() => {
                        setNumber(null);
                        setList(num);
                        setShow(false);
                      }, 1000);
                    }
              }
            >
              Push
            </Button>
            {show ? (
              <TransitionGroup>
                <CSSTransition key={pushing === true} timeout={1000}>
                  <Typography className="number" style={cardStyle}>
                    {number}
                  </Typography>
                </CSSTransition>
              </TransitionGroup>
            ) : (
              <TextField
                value={number}
                size="small"
                style={{
                  margin: 5,
                  width: 130,
                  // height: 20,
                  borderRadius: 0,
                }}
                type="number"
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
            )}
            <Typography
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              Popped Value:
              <Typography
                style={{
                  padding: "5px 10px",
                  marginLeft: 5,
                  width: "100px",
                  border: "1px solid black",
                  textAlign: "center",
                  transition: "all 0s ease-in",
                  opacity: popping ? 0 : 1,
                }}
              >
                {poppedValue}
              </Typography>
            </Typography>
          </Grid>

          <div
            style={{
              display: "flex",
              margin: 0,
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Box
              style={{
                marginTop: 50,
                animationName: show ? "stack" : popping ? "popping" : "",

                width: "150px",
                // animationDuration: "5s",
                transition: "all 5s ease-in",
                position: "relative",
              }}
              className="stack"
            >
              {list
                .slice(0)
                .reverse()
                .map(
                  (item, index) =>
                    // <div style={{ position: "relative" }}>
                    popping && index === 0 ? (
                      <TransitionGroup>
                        <CSSTransition key={popShow === true} timeout={1000}>
                          <Typography
                            className="number"
                            style={{
                              opacity: popping ? 1 : 0,
                              transition: "all 0s ease-in",
                              animationName: popping && "pop",
                              position: "relative",
                              padding: "5px 10px",
                              border: "1px solid black",
                              textAlign: "center",
                            }}
                          >
                            {poppedValue}
                          </Typography>
                        </CSSTransition>
                      </TransitionGroup>
                    ) : (
                      <Typography
                        style={{
                          padding: "5px 10px",
                          border: "1px solid black",
                          borderTop: `${
                            index === 0 || (popping && index === 1)
                              ? "1px"
                              : "0px"
                          } solid black`,
                          maxWidth: "100px",
                          textAlign: "center",
                          position: "relative",
                        }}
                      >
                        {item}
                      </Typography>
                    )
                  // </div>
                )}
            </Box>

            {/* {list.length > 0 && ( */}
            <Typography
              style={{
                marginTop: 55,
              }}
            >
              Top --{">"} {list.length - 1}
            </Typography>
            {/* )} */}
          </div>
        </Grid>
        <Grid
          xl={5.5}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          style={{
            maxHeight: 700,
            // overflow: "auto",
            marginTop: 10,
            // borderRadius: 10,
            backgroundColor: "#f5f2f0",
            // padding: 10,
          }}
        >
          <div style={{ overflow: "auto", width: "100%", height: "100%" }}>
            <SyntaxHighlighter
              language="cpp"
              style={prism}
              showLineNumbers={true}
              showInlineLineNumbers={false}
              lineProps={{ style: { flexWrap: "wrap" } }}
              customStyle={{
                // lineHeight: "0.75",
                // fontSize: "1em",
                overflow: "auto",
                width: "100%",
                height: "auto",
                overflow: "hidden",
                // borderRadius: 10,
                padding: 20,
                // margin: 10
                paddingTop: 25,
              }}
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        </Grid>
      </Grid>
      <Typography style={{ marginTop: 100, fontSize: 20, fontWeight: 600 }}>
        Applications of Stack Data Structure
      </Typography>
      <Typography style={{ fontSize: 18 }}>
        Following is the various Applications of Stack in Data Structure:
      </Typography>
      <ul>
        <li>
          <Typography style={{ fontSize: 18 }}>
            Evaluation of Arithmetic Expressions
          </Typography>
        </li>
        <li>
          <Typography style={{ fontSize: 18 }}>Backtracking</Typography>
        </li>
        <li>
          <Typography style={{ fontSize: 18 }}>Delimiter Checking</Typography>
        </li>
        <li>
          <Typography style={{ fontSize: 18 }}>Reverse a Data</Typography>
        </li>
        <li>
          <Typography style={{ fontSize: 18 }}>
            Processing Function Calls
          </Typography>
        </li>
      </ul>

      <Link to={"/quiz"}>
        <Typography>Give a Test</Typography>
      </Link>

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={state.message}
        key={vertical + horizontal}
      />
    </div>
  );
};

export default Stack;