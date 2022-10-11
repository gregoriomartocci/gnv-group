import { Fragment, useEffect, useRef, useState } from "react";
import React from "react";
import Main from "../../components/Main";
import Menu, { IState } from "../../components/Menu";
import Box from "@mui/material/Box";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import HeaderTitle from "../../components/Header-Title";
import Card from "./Components/Card";
import Cards from "../../components/Cards";
import Quote from "../../components/Quote";
import { setState, setTemplates } from "../../redux/slices/templates";
import api from "../../hooks/Api";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Counters from "../../components/Counters";
import UseCarousel from "./Components/Carousel";
import Logo from "../../components/Logo";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import dynamic from "next/dynamic";
import InputGroup from "../../components/Input";
import Form from "./Components/Form";
import UseButton from "../../components/Button";
import useWindowDimensions from "../../hooks/ScreenSize";
import UseTabs from "./Components/Tabs";
import MarkerLogo from "./marker-01.svg";
import Timeline from "./Components/Timeline";
import { ReadProject } from "../../api/ventures";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { setProject } from "../../redux/slices/projects";
import { ligthTheme } from "../../assets/mapsStyles";
import CarouselB from "./Components/CarouselB";

export type TDemo = {
  img: string;
  title: string;
  link: string;
  objectPosition: any;
};

const Home = () => {
  const state = useSelector((state: IState) => state?.templates);
  const [value, setValue] = useState({});
  const dispatch = useDispatch();
  const [countersVisible, setCountersVisible] = useState(false);
  const [tab, setTab] = useState<number>(1);

  const google_api = process.env.NEXT_PUBLIC_MAPS;

  const argentinaLocation = { lat: -34.6191721, lng: -58.3606006 };
  const uruguayLocation = { lat: -34.9451061, lng: -54.935135 };

  const CountersRef = useRef(null);

  const { height, width } = useWindowDimensions();

  const sm = width && width < 1200;
  const xs = width && width < 900;

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: google_api as string,
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setCountersVisible(entry.isIntersecting);
    });
    observer.observe(CountersRef?.current);
  }, []);

  // ANIMATIONS

  const FadeFromBottom = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };

  // MOCKDATA

  const data = [
    { number: 771190, unity: "m²", description: "desarrollados" },
    { number: 107000, unity: "m²", description: "de inversión" },
    { number: 21, unity: "ha", description: "urbanizados" },
    {
      number: 40000,
      unity: "m²",
      description: "corporativos World Trade Center",
    },
    { number: 17, description: "centros comerciales desarrollados" },
  ];

  const items = [
    {
      img: "https://res.cloudinary.com/gregomartocci/image/upload/v1664799049/xts6othfkuu2psbv3vh0.jpg",
      title: "WTC Buenos Aires I, II, III IV",
      link: "/venture/633ad14b79c62c036db870ba",
      objectPosition: { xs: "center center", md: "" },
    },
    {
      img: "https://res.cloudinary.com/gregomartocci/image/upload/v1664740315/irdlqnpade7qxflqicc6.jpg",
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
      title: "GNV Argentina",
      id: 1,
      coordinates: { lat: -34.6191721, lng: -58.3606006 },
    },
    {
      title: "GNV Uruguay",
      id: 2,
      coordinates: { lat: -34.9451061, lng: -54.935135 },
    },
  ];

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Menu onScroll color="#fff" />

      {/* MAIN SECTION */}
      <Main
        slides={slides}
        buttonLink="/home/#contact"
        headerTitle="Proyectos distintivos con visión de futuro"
        mode="static"
        img="https://res.cloudinary.com/gregomartocci/video/upload/v1661059464/xftkbgfkccyncmuq6rrv.mp4"
        textFontSize={{ xs: "34px", md: "45px" }}
      />

      {/* SECTION 1 */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          minHeight: "100vh",
          height: { xs: "60vh", sm: "80vh" },
          padding: "7.5%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5% 0",
          }}
        >
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0 }}
            variants={FadeFromBottom}
          >
            <HeaderTitle
              p={{ xs: "0 15px", md: "5% 0" }}
              titleFontSize={{ xs: "28px", md: "32px" }}
              fontWeight={600}
              width={{ xs: "100%", md: "1120px" }}
              descriptionFontSize={{ xs: "19px", md: "22px" }}
              title="Participamos en todos los segmentos del mercado inmobiliario."
              description="Urbanizamos, construimos, comercializamos y desarrollamos torres residenciales, edificios corporativos, centros comerciales y usos mixtos."
            />
          </motion.div>
        </Box>
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
                counterSize="30px"
                countersRef={countersVisible}
              />
            </motion.div>
          </Box>
        </Box>
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

      <Box sx={{ width: "100%", padding: "5% 0" }}>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true }}
          variants={FadeFromBottom}
        >
          <HeaderTitle
            p={{ xs: "60px", md: "0 20% 50px 20%"  }}
            titleFontSize={{ xs: "30px", md: "28px" }}
  
            titlePadding="25px"
            descriptionFontSize={{ xs: "1px", md: "18px" }}
            title="Trayectoria"
            descriptionTextAlign="center"
            description="La compañía está viviendo una etapa de expansión fenomenal.
            Fortaleciendo alianzas con marcas internacionales de la importancia de World Trade Center, la cadena hotelera Marriot Internacional y Grupo Ennismore bajo la marca SLS Hotel & Residences.
            Lo que demuestra la fuerte convicción y los valores a la hora de desarrollar un proyecto. Se trate de una torre o de su propia empresa. "
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
          minHeight: { xs: "", md: "100vh" },
          width: "100%",
          padding: { xs: "20% 5%", md: "50px 10%" },
        }}
      >
        <Section
          quote={`"Hagamos lo que hagamos, esta es nuestra filosofía: construir pensando en el futuro, sin olvidarnos de nuestra rica historia"`}
          image={
            "https://res.cloudinary.com/gregomartocci/image/upload/v1658965044/vlsdhy1hikzlz1g39zoz.jpg"
          }
          reverse
          bodyTextPadding={{ xs: "25px 0", md: "0" }}
        />
      </Box>

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
          minHeight: { sx: "", md: "100vh" },
          maxWidth: "1200px",
          padding: { xs: "0 15px", md: "0 10%" },
        }}
      >
        <HeaderTitle
          p="20px 0"
          titleFontSize={{ xs: "35px", md: "38px" }}
          fontWeight={600}
          title="Contacto"
          description="Envianos tu consulta"
          descriptionFontSize="20px"
        />

        <Box sx={{ width: "100%", padding: { xs: "0 10%", md: "0 5%" } }}>
          <Form value={value} setValue={setValue} />
        </Box>
      </Box>

      {/* Maps */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            padding: { xs: "180px 10% 80px 10%", md: "180px 10% 100px 10%" },
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
              height: "700px",
            }}
          >
            {isLoaded && (
              <GoogleMap
                center={tab === 1 ? argentinaLocation : uruguayLocation}
                zoom={15}
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
