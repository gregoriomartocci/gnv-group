import React, { Fragment, useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { HighQuality } from "@mui/icons-material";
import Carousel from "./Components/Carousel";
import { motion } from "framer-motion";

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
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1657430355/g7yz4ndlvgjjqvtidfa6.jpg",
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1661431377/wtwupcfe2bjyoh6snkq0.jpg",
      },
      {
        title: "Boulevard Shopping",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1661430888/pcannswq9zygabnijowr.jpg",
      },
    ],
  },
  {
    year: "2005 - 2000",
    highlights: [
      {
        title: "Urbanizacion Dique 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1661431454/cnjhnvfyjwtxub4nsva3.jpg",
      },
      {
        title: "Devoto Shopping",
        description: "Buenos Aires",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1657430355/g7yz4ndlvgjjqvtidfa6.jpg",
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
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1661431304/oel7lppm3jcpzfbtxwhh.jpg",
      },
      {
        title: "World Trade Center Rosario",
        description: "Licencia",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1661431230/cvatnkqnxudscqq7628m.png",
      },
    ],
  },
  {
    year: "2016",
    highlights: [
      {
        title: "World Trade Center III & IV",
        description: "Centro Empresarial Madero Harbour",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1657430588/owperet7603w21sgbf7w.jpg",
      },
      {
        title: "Harbour House",
        description: "Edificio Residencial Madero Harbour, Buenos Aires",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1659660915/cfd44c44gwmyozdrdrqi.jpg",
      },
      {
        title: "Malecón Dique 4",
        description: "Edificio Corporativo Puerto Madero, Buenos Aires",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1661431851/ioueikbuvxhryrmsiacu.jpg",
      },
      {
        title: "World Trade Center",
        description: "Santa Cruz de La Sierra, Bolivia",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1657430588/owperet7603w21sgbf7w.jpg",
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
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1657430355/g7yz4ndlvgjjqvtidfa6.jpg",
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
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1661382383/ynocflafkurm4ki9dppi.jpg",
      },
      {
        title: "The Shops",
        description: "Paseo de Compras Madero Harbour Buenos Aires",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1657430355/g7yz4ndlvgjjqvtidfa6.jpg",
      },
      {
        title: "W HOTEL & RESIDENCES",
        description: "Paseo de compras Madero Harbour, Buenos Aires",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1657430355/g7yz4ndlvgjjqvtidfa6.jpg",
      },
      {
        title: "Hotel",
        description: "Uruguay",
        img: "https://res.cloudinary.com/gregomartocci/image/upload/v1657430355/g7yz4ndlvgjjqvtidfa6.jpg",
      },
    ],
  },
];

const Timeline = () => {
  const [selected, setSelected] = useState<number>(0);
  const [ventures, setVentures] = useState(data);
  const [width, setWidth] = useState<number>(0);

  const carousel = useRef();

  useEffect(() => {
    if (carousel != undefined) {
      console.log(
        carousel.current.scrollWidth,
        carousel.current.offsetWidth,
        "ookkkk"
      );
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const handleClick = (index: number) => {
    setSelected(index);
  };

  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "70vh",
        overflow: "hidden",
      }}
      drag="x"
      ref={carousel}
      dragConstraints={{ right: 0, left: -width }}
      whileTap={{cursor:"grabbing"}}
    >
      {ventures?.map(({ year, highlights }, index) => {
        return (
          <motion.div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "100%",
              height: "100%",
              cursor: "grab",
            }}
          >
            {selected === index ? (
              <Carousel items={highlights ?? []} />
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "30px 25px",
                  width: "100px",
                  height: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderLeft: "1px solid #eeeeee",
                  borderRight: "1px solid #eeeeee",
                  zIndex: 100,
                }}
                component="span"
                onClick={() => handleClick(index)}
              >
                <Box />
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      fontSize: "20px",
                      color: "#bdbdbd",
                      transform: "rotate(-90deg)",
                      width: "max-content",
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
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Timeline;
