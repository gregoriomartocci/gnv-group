import { Fragment, useEffect, useRef, useState } from "react";
import React from "react";
import { IState } from "../../components/Menu";
import Box from "@mui/material/Box";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import HeaderTitle from "../../components/Header-Title";
import { motion } from "framer-motion";
import Counters from "../../components/Counters";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import useWindowDimensions from "../../hooks/ScreenSize";
import { ligthTheme } from "../../assets/mapsStyles";
import { ReadTimeline } from "../../api/timeline";
import { Loader } from "../../hooks/Loader";

import dynamic from "next/dynamic";

const Main = dynamic(() => import("../../components/Main"), { ssr: false });
const Parallax = dynamic(() => import("../../components/Parallax"), {
  ssr: false,
});
const Menu = dynamic(() => import("../../components/Menu"), { ssr: false });
const Card = dynamic(() => import("./Components/Card"), { ssr: false });
const Cards = dynamic(() => import("../../components/Cards"), { ssr: false });
const Slider = dynamic(() => import("./Components/Slider"), { ssr: false });
const Form = dynamic(() => import("./Components/Form"), { ssr: false });
const UseTabs = dynamic(() => import("./Components/Tabs"), { ssr: false });
const Timeline = dynamic(() => import("./Components/Timeline"), { ssr: false });
const CarouselB = dynamic(() => import("./Components/Carousel"), {
  ssr: false,
});

export type TDemo = {
  img: string;
  title: string;
  link: string;
  objectPosition: any;
};

const Home = () => {
  const state = useSelector((state: IState) => state?.templates);

  const dispatch = useDispatch();
  const [countersVisible, setCountersVisible] = useState(false);
  const [tab, setTab] = useState<number>(0);

  const google_api = process.env.NEXT_PUBLIC_MAPS;

  const defaultLocation = { lat: -34.8388567, lng: -57.1487484 };
  const argentinaLocation = { lat: -34.6191721, lng: -58.3606006 };
  const uruguayLocation = { lat: -34.9451061, lng: -54.935135 };

  const CountersRef = useRef(null);

  const { width } = useWindowDimensions();

  const sm = width && width < 1200;
  const xs = width && width < 700;

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: google_api as string,
  });

  useEffect(() => {
    if (!xs) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setCountersVisible(entry?.isIntersecting);
      });

      if (CountersRef?.current) {
        observer?.observe(CountersRef?.current);
      }
    }
  }, [xs]);

  // ANIMATIONS

  const FadeFromBottom = {
    offscreen: { y: 20, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };

  // MOCKDATA

  const data = [
    { number: 771190, unity: "m²", description: "desarrollados" },
    { number: 107000, unity: "m²", description: "en construcción" },
    { number: 21, unity: "ha", description: "urbanizadas" },
    {
      number: 40000,
      unity: "m²",
      description: "World Trade Center",
    },
    { number: 17, description: "centros comerciales" },
  ];

  const items = [
    {
      img: "https://res.cloudinary.com/gregomartocci/image/upload/v1664799049/xts6othfkuu2psbv3vh0.jpg",
      title: "WTC Buenos Aires I, II, III IV",
      link: "/venture/633ad14b79c62c036db870ba",
      objectPosition: { xs: "center center", md: "" },
    },
    {
      img: "https://res.cloudinary.com/gregomartocci/image/upload/v1660741258/pacagjb8rm2kk6mex1em.png",
      title: "Osten Tower",
      link: "/venture/62ca5fdb20e916ae0afc3882",
      objectPosition: { xs: "80% top", md: "" },
    },
    {
      img: "https://res.cloudinary.com/gregomartocci/image/upload/v1657426798/jefizhrvbp3zxcpgbbay.jpg",
      title: "Harbour Tower",
      link: "/venture/62ca537060ec294bc6a645d9",
      objectPosition: { xs: "68% center", md: "" },
    },
    {
      img: "https://res.cloudinary.com/gregomartocci/image/upload/v1657430355/g7yz4ndlvgjjqvtidfa6.jpg",
      title: "The Shops",
      link: "/venture/62ca615520e916ae0afc388e",
      objectPosition: { xs: "", md: "" },
    },
  ];

  const slides = [
    {
      src: "https://res.cloudinary.com/gregomartocci/video/upload/v1661381763/qt7lymuixtepvnoufb9j.mp4",
      phrase:
        "Buscamos redefinir la visión de la construcción y otorgarle personalidad a los desarrollos. Creamos espacios versátiles con detalles y diseño en todos sus ángulos.",
    },
    {
      src: "https://res.cloudinary.com/gregomartocci/image/upload/v1661395987/qfqy8bva2otewp8wxkwu.jpg",
      phrase:
        "Generar emociones y cumplir con los estándares sofisticados de nuestros clientes.  Combinamos locaciones extraordinarias con construcción high-end.",
    },
    {
      src: "https://res.cloudinary.com/gregomartocci/image/upload/v1663021190/hiexbwla0bhru9mtsdyz.jpg",
      phrase:
        "Cada proyecto nuestro tiene la cualidad de ser único, singular e irrepetible.  Pretendemos lograr esculturas a gran escala que marquen hitos de diseño urbano.",
    },
  ];

  const mapItems = [
    {
      title: "Argentina",
      id: 1,
      coordinates: { lat: -34.6191721, lng: -58.3606006 },
    },
    {
      title: "Uruguay",
      id: 2,
      coordinates: { lat: -34.9451061, lng: -54.935135 },
    },
  ];

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Loader delay={2000} />

      <Menu onScroll color="#fff" />

      {/* MAIN SECTION */}
      <Main
        slides={slides}
        buttonLink="/home/#contact"
        headerTitle="Proyectos únicos con visión de futuro"
        mode="static"
        img="https://res.cloudinary.com/gregomartocci/video/upload/v1661059464/xftkbgfkccyncmuq6rrv.mp4"
        textFontSize={{ xs: "25px", md: "32px" }}
      />

      {/* SECTION 1 */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: { xs: "center", md: "center" },
          width: "100vw",
          height: { xs: "80vh", md: "80vh" },
          padding: "7.5%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0 }}
            variants={FadeFromBottom}
          >
            <HeaderTitle
              p={{ xs: "0 15px", md: "45px 0" }}
              titleFontSize={{ xs: "20px", md: "26px" }}
              width={{ xs: "100%", md: "1120px" }}
              descriptionFontSize={{ xs: "13px", md: "18px" }}
              title="Participamos en todos los segmentos del mercado inmobiliario."
              description="Urbanizamos, construimos, comercializamos y desarrollamos torres residenciales, edificios corporativos, centros comerciales y usos mixtos."
            />
          </motion.div>
        </Box>

        {xs ? (
          <Box
            sx={{
              display: "flex",
              position: "relative",
              width: "100%",
              height: "120px",
            }}
          >
            <Slider items={data} />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              width: { xs: "200px", md: "200px", lg: "200px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "none", md: "center" },
                width: "100%",
                height: "100%",
              }}
              ref={CountersRef}
            >
              <motion.div
                dragConstraints={CountersRef}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0 }}
                drag={sm ? "x" : false}
                animate={{ x: !sm && 0 }}
              >
                <Counters
                  data={data}
                  counterSize={{ xs: "20px", md: "25px" }}
                  countersRef={countersVisible}
                />
              </motion.div>
            </Box>
          </Box>
        )}
      </Box>

      {/* CARDS */}

      <Box sx={{ position: "relative", minHeight: "100vh", width: "100vw" }}>
        <Cards
          gap={""}
          gridTemplateColumns={{
            xs: `1fr`,
            md: `repeat(2, auto)`,
          }}
          gridTemplateRows={{
            xs: `1fr`,
            md: `auto`,
          }}
          items={items}
          component={(item: TDemo) => <Card {...item} sm={sm} />}
        />
      </Box>

      {/* Trayectory */}

      <Box
        sx={{
          width: "100%",
          padding: { xs: "5% 0 0 0", md: "5% 0" },
          minHeight: "100vh",
        }}
      >
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true }}
          variants={FadeFromBottom}
        >
          <HeaderTitle
            p={{ xs: "10px 0", md: "" }}
            titleFontSize={{ xs: "20px", md: "24px" }}
            titlePadding="25px 0 0 0"
            fontWeight={600}
            title="Trayectoria"
          />
          <Timeline />
        </motion.div>
      </Box>

      {/* Carousel B */}

      <Box
        sx={{
          display: "flex",
          position: "relative",
          width: "100vw",
          minHeight: "60vh",
        }}
      >
        <CarouselB items={slides} />
      </Box>

      {/* Quote Section */}

      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "flex-start", md: "center" },
          minHeight: { xs: "", md: "80vh" },
          width: "100%",
          padding: { xs: "85px 25px 50px 25px", md: "50px 10%" },
        }}
      >
        <Section
          imageMaxWidth="600px"
          quote="Hagamos lo que hagamos, esta es nuestra filosofía: construir pensando en el futuro, sin olvidarnos de nuestra historia."
          image={
            "https://res.cloudinary.com/gregomartocci/image/upload/v1658965044/vlsdhy1hikzlz1g39zoz.jpg"
          }
          reverse
          bodyTextPadding={{ xs: "25px 0", md: "0" }}
        />
      </Box>

      {/* Parrallax */}

      {!xs && (
        <Parallax url="https://res.cloudinary.com/gregomartocci/image/upload/v1660741258/pacagjb8rm2kk6mex1em.png">
          <Box sx={{ width: "100%", height: "60vh" }}></Box>
        </Parallax>
      )}

      {/* Contact */}

      <Box
        id="contact"
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          margin: "auto",
          minHeight: { sx: "", md: "80vh" },
          maxWidth: "1200px",
          padding: { xs: "0", md: "75px 10%" },
        }}
      >
        <HeaderTitle
          p="20px 0"
          titleFontSize={{ xs: "20px", md: "24px" }}
          descriptionFontSize={{ xs: "16px", md: "20px" }}
          title="Contacto"
          fontWeight={600}
          description="Envianos tu consulta"
        />

        <Box sx={{ width: "100%", padding: { xs: "10px 10%", md: "0 10%" } }}>
          <Form />
        </Box>
      </Box>

      {/* Parrallax */}

      {!xs && (
        <Parallax url="https://res.cloudinary.com/gregomartocci/image/upload/v1659730299/jc3hwcipmpjbnfxtkjxa.jpg">
          <Box sx={{ width: "100%", height: "500px" }}></Box>
        </Parallax>
      )}

      {/* Maps */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          marginBottom: "-50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            padding: { xs: "50px 10% 40px 10%", md: "100px 10% 100px 10%" },
          }}
        >
          <UseTabs items={mapItems} tab={tab} setTab={setTab} />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: { xs: "300px", md: "400px" },
            }}
          >
            {isLoaded && (
              <GoogleMap
                center={
                  tab === 1
                    ? argentinaLocation
                    : tab === 2
                    ? uruguayLocation
                    : defaultLocation
                }
                zoom={xs ? 7 : 8}
                options={{
                  styles: ligthTheme,
                  zoomControl: false,
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: false,
                }}
                mapContainerStyle={{ width: "100%", height: "100%" }}
              >
                {mapItems.map(({ id, coordinates }) => {
                  return (
                    <Marker
                      key={id}
                      position={coordinates}
                      icon={{
                        url: "/markerLogoBlack.svg",
                        scaledSize: new window.google.maps.Size(125, 125),
                      }}
                    />
                  );
                })}
              </GoogleMap>
            )}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
