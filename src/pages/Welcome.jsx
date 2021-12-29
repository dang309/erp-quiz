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
  FormLabel,
} from "@mui/material";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";

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
          Tác giả: Nguyễn Hải Đăng (19521315@gm.uit.edu.vn)
        </Typography>
        <Typography variant="caption">
          Nguồn câu hỏi:{" "}
          <a
            href="https://drive.google.com/drive/folders/1rKt5S-uceqxDyfFTFKTThHzzm46uJ8bF"
            target="_blank"
            rel="noreferrer"
          >
            https://drive.google.com/drive/folders/1rKt5S-uceqxDyfFTFKTThHzzm46uJ8bF
          </a>{" "}
          (GV. Huỳnh Đức Huy)
        </Typography>
        <Typography variant="caption">
          Mọi phản hồi xin gửi về email <strong>19521315@gm.uit.edu.vn</strong>
        </Typography>
        <Typography variant="body1">
          Chương trình sẽ tự động chọn ra ngẫu nhiên trong 300 câu
        </Typography>
        <Typography variant="caption">
          <strong>Lưu ý:</strong> Quá trình làm bài sẽ bị mất nếu refresh lại
          trang
        </Typography>
        <FormControl component="fieldset">
          <FormLabel component="legend">Chọn số câu hỏi:</FormLabel>
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
          <Button
            variant="contained"
            onClick={handleStartExam}
            startIcon={<PlayArrowIcon />}
          >
            Bắt đầu làm bài
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

Welcome.propTypes = {};

export default Welcome;
