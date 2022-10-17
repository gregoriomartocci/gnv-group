import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import useWindowDimensions from "../../../../hooks/ScreenSize";
import { SxProps, Theme } from "@mui/material";
import dynamic from "next/dynamic";

const DynamicCounter = dynamic(
  () => import("../../../../components/Counters/Dynamic-Counter"),
  {
    ssr: false,
  }
);

type TUseCarousel = {
  items: any[];
  slideTime?: number;
  typographyText?: string;
  ref?: any;
};

const Slider = ({ items }: TUseCarousel) => {
  const [page, setPage] = useState(0);
  const { height, width } = useWindowDimensions();
  const total = items?.length - 1;

  const onRight = () => {
    if (page < total && page + 1 !== undefined) {
      setPage(page + 1);
    } else {
      setPage(0);
    }
  };

  const onLeft = () => {
    if (page > 0 && page - 1 !== undefined) {
      setPage(page - 1);
    } else {
      setPage(total);
    }
  };

  return (
    <Fragment>
      {items?.length ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            width: "100%",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              zIndex: 20,
              padding: "0% 10%",
            }}
          >
            {/* ARROW LEFT */}
            <Box
              sx={{
                position: "absolute",
                left: { xs: "25px", md: "50px" },
                cursor: "pointer",
              }}
              component="span"
              onClick={() => onLeft()}
            >
              <ArrowBackIosIcon sx={{ color: "#bdbdbd", fontSize: "16px" }} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "250px",
                fontFamily: "'Poppins', sans-serif",
                justifyContent: "flex-start",
                alignItems: "center",
                textAlign: "center",
                padding: "20px 45px",
              }}
              key={page}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: { xs: "22px", md: "16px" },
                    width: "max-content",
                  }}
                >
                  <DynamicCounter
                    from={0}
                    to={items[page]?.number}
                    duration={5}
                    counterFontSize={{ xs: "20px", md: "25px" }}
                  />
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: { xs: "15px", md: "16px" },
                    margin: "0 0 0 5px",
                  }}
                >
                  {items[page]?.unity}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: { xs: "14px", md: "18px" },
                  minWidth: "200px",
                }}
              >
                {items[page]?.description}
              </Typography>
            </Box>

            {/* ARROW RIGHT */}
            <Box
              sx={{
                position: "absolute",
                right: { xs: "25px", md: "50px" },
                cursor: "pointer",
              }}
              component="span"
              onClick={() => onRight()}
            >
              <ArrowForwardIosIcon
                sx={{ color: "#bdbdbd", fontSize: "16px" }}
              />
            </Box>
          </Box>
        </Box>
      ) : null}
    </Fragment>
  );
};

export default Slider;
