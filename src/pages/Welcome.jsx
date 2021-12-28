import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  Typography,
  Stack,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { SET_QUESTIONS } from "../reducers/questions";

import ERP_QUIZ from "../constant/erp";

import _shuffle from "lodash/shuffle";

function Welcome(props) {
  const dispatch = useDispatch();
  const naviagate = useNavigate();

  const [numOfQuestions, setNumOfQuestions] = useState(10);

  const handleStartExam = () => {
    let temp = _shuffle(ERP_QUIZ).slice(0, parseInt(numOfQuestions));
    temp = temp.map((item) => ({ ...item, chosenOption: "" }));
    dispatch(SET_QUESTIONS(temp));
    naviagate("/home", { replace: true });
  };

  return (
    <Container sx={{ mt: 8 }}>
      <Stack spacing={2} direction="column" alignItems="center">
        <Typography variant="h4">300 câu hỏi trắc nghiệm môn ERP</Typography>
        <Typography variant="caption">
          Nguồn:
          <em>
            https://drive.google.com/drive/folders/1rKt5S-uceqxDyfFTFKTThHzzm46uJ8bF
          </em>
        </Typography>
        <Typography variant="body1">
          Chương trình sẽ tự động chọn ra {numOfQuestions} câu ngẫu nhiên trong
          300 câu
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            name="controlled-radio-buttons-group"
            value={numOfQuestions}
            onChange={(e) => setNumOfQuestions(e.target.value)}
          >
            <FormControlLabel value="10" control={<Radio />} label="10 câu" />
            <FormControlLabel value="20" control={<Radio />} label="20 câu" />
            <FormControlLabel value="40" control={<Radio />} label="40 câu" />
          </RadioGroup>
        </FormControl>
        <Stack direction="row" justifyContent="center" spacing={1}>
          <Button variant="contained" onClick={handleStartExam}>
            Bắt đầu làm bài
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

Welcome.propTypes = {};

export default Welcome;
