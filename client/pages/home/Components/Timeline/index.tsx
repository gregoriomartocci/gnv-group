import React, { Fragment, useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { HighQuality } from "@mui/icons-material";
import Carousel from "./Components/Carousel";
import { motion } from "framer-motion";
import useWindowDimensions from "../../../../hooks/ScreenSize";
import { useQuery } from "react-query";
import { ReadTimeline } from "../../../../api/timeline";

const data = [
  {
    year: "1998 - 1960",
    highlights: [
      {
        title: "Patio Bullrich",
        description: " Bs. As.",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1661430298/unlrnzclbys3lsqijlxy.jpg",
      },
      {
        title: "Shopping Soleil",
        description: " Bs. As.",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1661430502/qpkobhnwctcwjvp2zfef.jpg",
      },
    ],
  },
  {
    year: "1998 - 1990",
    highlights: [
      {
        title: "San Luis Shopping Center",
        description: "San Luis",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1661430969/es9zoiz4qvicj6yw4lgr.jpg",
      },
      {
        title: "Boulevard Shopping",
        description: "Bs. As.",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1664815178/t51oxhhi44e2nvqt2i5t.jpg",
      },
      {
        title: "Palmares Open Mall",
        description: "Mendoza",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1664815337/rgzxtwnvkkromplipjc3.jpg",
      },
      {
        title: "Galerias Pacífico",
        description: "Bs. As.",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1664815424/rqwjxoql3acnk4fubw48.jpg",
      },
      {
        title: "Patio Olmos",
        description: "Córdoba.",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1664815534/ek8qedaeue1kcvt2lqbg.jpg",
      },
      {
        title: "Alto Palermo",
        description: "Bs. As.",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1664815646/ylqwzhnsfdzc1tlpodjc.jpg",
      },
    ],
  },
  {
    year: "2005 - 2000",
    highlights: [
      {
        title: "Urbanizacion Dique 1",
        description: "Puerto Madero,  Bs. As.",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1663019970/oew7m6l0jdgzw3syaand.jpg",
      },
      {
        title: "Devoto Shopping",
        description: "Buenos Aires",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1664815810/ow5tiqjr3jlmitvr5576.jpg",
      },
      {
        title: "Malecón Dique 1",
        description: "Puerto Madero, Bs. As.",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1664802384/ira6mxdht3hmy15g3k6o.jpg",
      },
    ],
  },
  {
    year: "2010",
    highlights: [
      {
        title: "World Trade Center I",
        description: "Centro Empresarial Madero Harbour",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1657430588/owperet7603w21sgbf7w.jpg",
      },
    ],
  },
  {
    year: "2012",
    highlights: [
      {
        title: "Harbour Residences",
        description: "Edificio Residencial Madero Harbour, Bs. As.",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1660742361/zmga4wvfzztpfk1zt5gu.png",
      },
    ],
  },
  {
    year: "2015",
    highlights: [
      {
        title: "World Trade Center II",
        description: "Centro Empresarial Madero Harbour",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1663020643/vgt0dljvfgbau5jpcwiy.jpg",
      },
      {
        title: "World Trade Center Rosario",
        description: "Licencia",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1663020703/q7gmz8luoderdklnq50b.jpg",
      },
    ],
  },
  {
    year: "2016",
    highlights: [
      {
        title: "World Trade Center III & IV",
        description: "Centro Empresarial Madero Harbour",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1664800485/n70nppki7ir8xsoeclj0.jpg",
      },
      {
        title: "Harbour House",
        description: "Edificio Residencial Madero Harbour, Bs. As.",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1659660915/cfd44c44gwmyozdrdrqi.jpg",
      },
      {
        title: "Malecón Dique 4",
        description: "Edificio Corporativo Puerto Madero, Bs. As.",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1663020724/m3sarfqm4cgpvnei7yam.jpg",
      },
    ],
  },
  {
    year: "2018",
    highlights: [
      {
        title: "Plaza Houssay",
        description: "Bs. As.",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1664816559/xukclw7z1k1isgq3j8g7.jpg",
      },
      {
        title: "World Trade Center, Córdoba",
        description: "Licencia",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1663020828/mtu9aj4ehoug06efu0s4.jpg",
      },
    ],
  },
  {
    year: "2020",
    highlights: [
      {
        title: "Ginevra International Realty",
        description: "Uruguay PDE",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1664816794/vpdr7ws24plfnutrizpc.jpg",
      },
      {
        title: "Madero Harbour",
        description: "Nuevo Masterplan Post Pandemia",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1664801586/ag4wnvecj3x4ltgiipvu.jpg",
      },
    ],
  },
  {
    year: "2021",
    highlights: [
      {
        title: "Harbour Tower",
        description: "52 Pisos, Puerto Madero, Bs. As.",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1660736982/ckusx7p3reagh4r0und8.png",
      },
      {
        title: "The Shops",
        description: "Paseo de Compras Madero Harbour Bs. As.",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1657430355/g7yz4ndlvgjjqvtidfa6.jpg",
      },
      {
        title: "W Hotel & Residences",
        description: "Paseo de compras Madero Harbour, Bs. As.",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1663021534/jn9tl1hsqkbs0hoazbwl.jpg",
      },
    ],
  },
  {
    year: "2022",
    highlights: [
      {
        title: "Osten Tower",
        description: "Puerto Madero, Bs. As.",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1664743925/ezwfysleolfcbnsn2vxk.png",
      },
      {
        title: "SLS Punta del Este",
        description: "Paseo de Compras Punta del Este Urugay",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1663086371/ddrsegmpkbp0zde9o3ty.jpg",
      },
    ],
  },
];

const Timeline = () => {
  const [selected, setSelected] = useState<number>(0);
  const [ventures, setVentures] = useState(data);
  const { height, width } = useWindowDimensions();

  const {
    isFetching: loading,
    isError,
    error,
    data: timelineItems,
  } = useQuery("timeline", ReadTimeline);
  const carouselRef = useRef(null);
  const handleClick = (index: number) => {
    setSelected(index);
  };

  const sm = width && width < 900;

  return (
    <Box sx={{ padding: { sx: "0", md: "80px 5% 10px 5%" } }}>
      <Box
        sx={{
          display: { sx: "column", md: " flex" },
          overflow: {
            md: "hidden",
          },
          width: "100%",
          height: "100%",
        }}
        ref={carouselRef}
      >
        <motion.div
          animate={{ x: sm && 0 }}
          drag={width && width > 900 ? "x" : false}
          dragConstraints={carouselRef}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            {timelineItems?.map(({ year, highlights }, index) => {
              return (
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    cursor: "grab",
                  }}
                  key={index}
                >
                  {selected === index ? (
                    <Box
                      sx={{
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                      }}
                    >
                      <Carousel items={highlights ?? []} year={year} />
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: {
                          xs: "row",
                          md: "column",
                        },
                        padding: "30px 25px",
                        width: {
                          xs: "100%",
                          md: "100px",
                        },
                        height: "100%",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "#fff",
                        borderLeft: {
                          md: "1px solid #eeeeee",
                        },
                        borderRight: {
                          md: "1px solid #eeeeee",
                        },
                        borderTop: {
                          xs: "1px solid #eeeeee",
                          md: "none",
                        },
                        borderBottom: {
                          xs: "1px solid #eeeeee",
                          md: "none",
                        },
                        zIndex: 100,
                      }}
                      component="span"
                      onClick={() => handleClick(index)}
                    >
                      <Box />
                      <Box
                        sx={{
                          width: {
                            xs: "100%",
                            md: "max-content",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 700,
                            fontSize: { xs: "14px", md: "16px" },
                            color: "#bdbdbd",
                            transform: {
                              xs: "",
                              md: "rotate(-90deg)",
                            },
                          }}
                        >
                          {year}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          color: "#BCBCBC",
                        }}
                      >
                        <FiberManualRecordIcon
                          sx={{ fontSize: "14px", color: "#e0e0e0" }}
                        />
                      </Box>
                    </Box>
                  )}
                </Box>
              );
            })}
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Timeline;
