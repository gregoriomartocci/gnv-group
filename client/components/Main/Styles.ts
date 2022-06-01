import styled, { css } from "styled-components";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;

export const MainSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

export const MainContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const MainSlide = styled.div``;

export const MainSlider = styled.div``;

export const MainImage = styled.div``;

export const Arrow = styled(ArrowCircleRightIcon)

export const MainContent = styled.div``;

const arrowButtons = css`
  width: 50px;
  height: 50px;

  &:hover {
    background-color: #cd853f;
    transform: scale(1.05);
  }
`;

export const PrevArrow = styled(ArrowCircleLeftIcon)`
  ${arrowButtons}
`;

export const NextArrow = styled(ArrowCircleRightIcon)`
  ${arrowButtons}
`;
