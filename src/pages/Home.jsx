import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import {
  Stack,
  Box,
  Typography,
  IconButton,
  LinearProgress,
  Button,
  Container,
  Dialog,
} from "@mui/material";

import ArrowCircleLeftSharpIcon from "@mui/icons-material/ArrowCircleLeftSharp";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import QuizCard from "../components/QuizCard";

import { useSelector, useDispatch } from "react-redux";
import { UPDATE_QUESTION_BY_ID } from "../reducers/questions";

import { Link as RouterLink } from "react-router-dom";

function HomePage(props) {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.question.questions);

  const [chosenOption, setChosenOption] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [openZoomImg, setOpenZoomImg] = useState("");

  const scrollToTop = () => {
    document.getElementById("scroll-to-top-home").scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const handleChoseOption = (e, id) => {
    dispatch(
      UPDATE_QUESTION_BY_ID({
        id,
        option: e.target.value,
      })
    );
  };

  const handleNextQuestion = () => {
    if (questionIndex === questions.length - 1) {
      return;
    }
    setQuestionIndex((prev) => prev + 1);
    setChosenOption("");
    scrollToTop();
  };

  const handleBackQuestion = () => {
    if (questionIndex === 0) {
      return;
    }
    setQuestionIndex((prev) => prev - 1);
    setChosenOption("");
    scrollToTop();
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Container maxWidth="sm" sx={{ my: 4 }}>
      <div id="scroll-to-top-home" />
      {questions && questions.length !== 0 && (
        <Stack direction="column" alignItems="center" sx={{ width: "100%" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%", mb: 1 }}
          >
            <IconButton component={RouterLink} to="/">
              <ArrowBackIcon />
            </IconButton>
            <Button
              variant="outlined"
              color="secondary"
              component={RouterLink}
              to="/result"
            >
              Nộp bài
            </Button>
          </Stack>
          {/* Progress */}
          <Box sx={{ width: "100%", mb: 1 }}>
            <LinearProgress
              sx={{
                height: "12px",
                borderRadius: "16px",
              }}
              variant="determinate"
              {...props}
              value={Math.round(((questionIndex + 1) / questions.length) * 100)}
            />
          </Box>
          {/* Progress */}
          <Box sx={{ width: "100%" }}>
            <Stack
              direction="column"
              alignItems="center"
              spacing={1}
              sx={{ mb: 1 }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  textAlign: "center",
                  textDecoration: "underline",
                }}
                noWrap
              >
                {"Câu " + (questionIndex + 1) + ": "}
              </Typography>
              <Typography sx={{ textAlign: "center", lineHeight: "1.5" }}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: questions[questionIndex].question.name,
                  }}
                />

                <Stack
                  direction="column"
                  alignItems="center"
                  spacing={1}
                  sx={{ mt: 1 }}
                >
                  {questions[questionIndex].question.images.length !== 0 &&
                    questions[questionIndex].question.images.map(
                      (item, index) => {
                        return (
                          <Box key={index}>
                            <Box
                              component="img"
                              src={item}
                              alt=""
                              sx={{ cursor: "zoom-in", width: "256px" }}
                              onClick={() => setOpenZoomImg(index)}
                            />
                            <Dialog
                              open={openZoomImg === index}
                              onClose={() => setOpenZoomImg("")}
                            >
                              <Box sx={{ width: "512px" }}>
                                <Box
                                  component="img"
                                  src={item}
                                  alt=""
                                  sx={{ width: "100%" }}
                                />
                              </Box>
                            </Dialog>
                          </Box>
                        );
                      }
                    )}
                </Stack>
              </Typography>
            </Stack>
          </Box>

          <Stack direction="column" alignItems="center">
            <Stack sx={{}}>
              <QuizCard
                question={questions[questionIndex]}
                chosenOption={chosenOption}
                handleChoseOption={(e) =>
                  handleChoseOption(e, questions[questionIndex].id)
                }
              />
            </Stack>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
            <IconButton color="secondary" onClick={handleBackQuestion}>
              <ArrowCircleLeftSharpIcon />
            </IconButton>

            {questionIndex === questions.length - 1 ? (
              <Button
                variant="contained"
                color="secondary"
                component={RouterLink}
                to="/result"
              >
                Nộp bài
              </Button>
            ) : (
              <IconButton color="secondary" onClick={handleNextQuestion}>
                <ArrowCircleRightSharpIcon />
              </IconButton>
            )}
          </Stack>
        </Stack>
      )}
    </Container>
  );
}

HomePage.propTypes = {};

export default HomePage;
