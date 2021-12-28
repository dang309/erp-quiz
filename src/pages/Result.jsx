import React, { useEffect } from "react";
import PropTypes from "prop-types";

import {
  Container,
  Stack,
  Typography,
  Paper,
  ButtonGroup,
  Button,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import FactCheckIcon from "@mui/icons-material/FactCheck";

import { useSelector } from "react-redux";

import { Link as RouterLink } from "react-router-dom";

function Result(props) {
  const questions = useSelector((state) => state.question.questions);

  const getCorrectAnswers = () => {
    let corrects =
      questions &&
      questions.length &&
      questions.filter((question) => question.chosenOption === question.answer);

    return corrects.length;
  };

  const scrollToTop = () => {
    document.getElementById("scroll-to-top-result").scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <Container sx={{ mt: 16 }} maxWidth="xs">
      <div id="scroll-to-top-result" />
      <Paper elevation={4} sx={{ p: 2 }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Typography variant="h5">Kết quả:</Typography>
            <Typography variant="h6">
              {getCorrectAnswers()} / {questions.length}
            </Typography>
          </Stack>
          <ButtonGroup>
            <Button startIcon={<HomeIcon />} component={RouterLink} to="/">
              Trang chủ
            </Button>
            <Button
              endIcon={<FactCheckIcon />}
              component={RouterLink}
              to="/review"
            >
              Review
            </Button>
          </ButtonGroup>
        </Stack>
      </Paper>
    </Container>
  );
}

Result.propTypes = {};

export default Result;
