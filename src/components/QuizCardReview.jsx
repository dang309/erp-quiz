import React from "react";
import PropTypes from "prop-types";

import {
  List,
  ListItemButton,
  FormControlLabel,
  Radio,
  RadioGroup,
  ListItemIcon,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { green, red } from "@mui/material/colors";

function QuizCardReview(props) {
  const { question } = props;

  const getColorResult = (question, option) => {
    let color = "inherit";
    if (question.answer === option) {
      return green[50];
    }
    if (question.chosenOption === option) {
      if (question.answer === option) {
        color = green[50];
      } else {
        color = red[50];
      }
    }
    return color;
  };

  return (
    <RadioGroup value={question.chosenOption}>
      <List component="nav">
        <ListItemButton
          sx={{
            border: "1px solid rgba(0,0,0,.1)",
            borderRadius: 2,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            mb: 0.5,
            backgroundColor: getColorResult(question, "a"),
            pointerEvents: "none",
          }}
        >
          {question.answer === "a" && (
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: green[500] }} />
            </ListItemIcon>
          )}
          <FormControlLabel
            value="a"
            control={<Radio />}
            label={
              <div dangerouslySetInnerHTML={{ __html: question.options.a }} />
            }
            sx={{ width: "100%", height: "100%" }}
          />
        </ListItemButton>
        <ListItemButton
          sx={{
            border: "1px solid rgba(0,0,0,.1)",
            borderRadius: 2,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            mb: 0.5,
            backgroundColor: getColorResult(question, "b"),
            pointerEvents: "none",
          }}
        >
          {question.answer === "b" && (
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: green[500] }} />
            </ListItemIcon>
          )}

          <FormControlLabel
            value="b"
            control={<Radio />}
            label={
              <div dangerouslySetInnerHTML={{ __html: question.options.b }} />
            }
            sx={{ width: "100%", height: "100%" }}
          />
        </ListItemButton>
        <ListItemButton
          sx={{
            border: "1px solid rgba(0,0,0,.1)",
            borderRadius: 2,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            mb: 0.5,
            backgroundColor: getColorResult(question, "c"),
            pointerEvents: "none",
          }}
        >
          {question.answer === "c" && (
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: green[500] }} />
            </ListItemIcon>
          )}
          <FormControlLabel
            value="c"
            control={<Radio />}
            label={
              <div dangerouslySetInnerHTML={{ __html: question.options.c }} />
            }
            sx={{ width: "100%", height: "100%" }}
          />
        </ListItemButton>
        <ListItemButton
          sx={{
            border: "1px solid rgba(0,0,0,.1)",
            borderRadius: 2,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            mb: 0.5,
            backgroundColor: getColorResult(question, "d"),
            pointerEvents: "none",
          }}
        >
          {question.answer === "d" && (
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: green[500] }} />
            </ListItemIcon>
          )}
          <FormControlLabel
            value="d"
            control={<Radio />}
            label={
              <div dangerouslySetInnerHTML={{ __html: question.options.d }} />
            }
            sx={{ width: "100%", height: "100%" }}
          />
        </ListItemButton>
      </List>
    </RadioGroup>
  );
}

QuizCardReview.propTypes = {
  question: PropTypes.object,
};

export default QuizCardReview;
