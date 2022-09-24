import React, { Fragment, useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { HighQuality } from "@mui/icons-material";
import Carousel from "./Components/Carousel";
import { motion } from "framer-motion";
import useWindowDimensions from "../../../../hooks/ScreenSize";

const data = [
  {
    year: "1998 - 1960",
    highlights: [
      {
        title: "Patio Bullrich",
        description: "Buenos Aires",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1661430298/unlrnzclbys3lsqijlxy.jpg",
      },
      {
        title: "Shopping Soleil",
        description: "Buenos Aires",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1661430502/qpkobhnwctcwjvp2zfef.jpg",
      },
      {
        title: "Edificio Residencial",
        description: "Bartolome Mitre 2466,  BS. AS.",
        img: "",
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
        title: "Las Terrazas de La Base",
        description: "Bs. As.",
        img: "",
      },
      {
        title: "Boulevard Shopping",
        description: "Bs. As.",
        img: "",
      },
    ],
  },
  {
    year: "2005 - 2000",
    highlights: [
      {
        title: "Urbanizacion Dique 1",
        description: "Puerto Madero, Buenos Aires",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1663019975/hhzbushjhp1e9wrt0tac.png",
      },
      {
        title: "Devoto Shopping",
        description: "Buenos Aires",
        img: "",
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
        description: "Edificio Residencial Madero Harbour",
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
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1663086485/okqdzx6t5fdc9axmdb0g.jpg",
      },
      {
        title: "Harbour House",
        description: "Edificio Residencial Madero Harbour, Buenos Aires",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1659660915/cfd44c44gwmyozdrdrqi.jpg",
      },
      {
        title: "Malecón Dique 4",
        description: "Edificio Corporativo Puerto Madero, Buenos Aires",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1663020724/m3sarfqm4cgpvnei7yam.jpg",
      },
      {
        title: "World Trade Center",
        description: "Santa Cruz de La Sierra, Bolivia",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1663020528/nxeegvbyhvz2dlpmpxvy.jpg",
      },
    ],
  },
  {
    year: "2018",
    highlights: [
      {
        title: "Plaza Houssay",
        description: "Buenos Aires",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1661431929/kpnd3ffbzkrz1nodgs08.jpg",
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
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1661432255/p3kexlsxmxdrlsvksvke.jpg",
      },
      {
        title: "Madero Harbour",
        description: "Nuevo Masterplan Post Pandemia",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1661382990/fkwfqkqzqq1nilndxgzg.jpg",
      },
    ],
  },
  {
    year: "2021",
    highlights: [
      {
        title: "Harbour Tower",
        description: "52 Pisos, Puerto Madero, Buenos Aires",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1660736982/ckusx7p3reagh4r0und8.png",
      },
      {
        title: "The Shops",
        description: "Paseo de Compras Madero Harbour Buenos Aires",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1657430355/g7yz4ndlvgjjqvtidfa6.jpg",
      },
      {
        title: "W HOTEL & RESIDENCES",
        description: "Paseo de compras Madero Harbour, Buenos Aires",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1663021534/jn9tl1hsqkbs0hoazbwl.jpg",
      },
      {
        title: "Hotel",
        description: "Uruguay",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1663183140/d1aioddhckbmzdxyvf6p.jpg",
      },
    ],
  },
  {
    year: "2022",
    highlights: [
      {
        title: "Ostent Tower",
        description: "Puerto Madero, Buenos Aires",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1661382383/ynocflafkurm4ki9dppi.jpg",
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

  const carouselRef = useRef(null);
  const handleClick = (index: number) => {
    setSelected(index);
  };

  const sm = width && width < 900;

  return (
    <Box sx={{ padding: { sx: "0", md: "0 5%" } }}>
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
              height: {
                xs: "100%",
                md: "80vh",
              },
            }}
          >
            {ventures?.map(({ year, highlights }, index) => {
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
                            fontSize: "20px",
                            color: "#e0e0e0",
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
                          sx={{ fontSize: "16px", color: "#e0e0e0" }}
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
