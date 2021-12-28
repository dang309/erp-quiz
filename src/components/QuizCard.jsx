import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  List,
  ListItemButton,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

function QuizCard(props) {
  const { chosenOption, handleChoseOption, question } = props;

  return (
    <RadioGroup value={question.chosenOption} onChange={handleChoseOption}>
      <List component="nav">
        <ListItemButton
          sx={{
            border: "1px solid rgba(0,0,0,.1)",
            borderRadius: 2,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            mb: 0.5,
          }}
          selected={chosenOption === "a"}
        >
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
          }}
          selected={chosenOption === "b"}
        >
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
          }}
          selected={chosenOption === "c"}
        >
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
          }}
          selected={chosenOption === "d"}
        >
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

QuizCard.propTypes = {
  question: PropTypes.object,
};

export default QuizCard;
