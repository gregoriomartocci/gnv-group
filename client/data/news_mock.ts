const news_mock = [
  {
    id: 1,
    title: "Ley de Blanqueo, un incentivo a la producción",
    description:
      "La iniciativa del Gobierno busca recaudar dólares para el mercado de la construcción y el trabajo. El antecedente de la Harbour Tower en Puerto Madero. El Gobierno promulgó la ley de incentivo a la inversión, construcción y producción argentina, norma que prolonga por un año el régimen de blanqueo con la intención -principalmente- de incentivar la reincorporación tanto de pesos como de dólares al sistema formal.",
    images: [
      "https://res.cloudinary.com/gregomartocci/image/upload/v1663186575/xhztgwducabdupu5exzf.webp",
    ],
    link: "https://www.letrap.com.ar/nota/2022-9-11-10-27-0-ley-de-blanqueo-un-incentivo-a-la-produccion",
    published: true,
    source: "LETRA P",
    date: "11 de septiembre de 2022",
  },
  {
    id: 2,
    title:
      "Blanqueo para la construcción: cuáles son los edificios en los que se puede invertir",
    description:
      "La iniciativa del Gobierno busca recaudar dólares para el mercado de la construcción y el trabajo. El antecedente de la Harbour Tower en Puerto Madero. El Gobierno promulgó la ley de incentivo a la inversión, construcción y producción argentina, norma que prolonga por un año el régimen de blanqueo con la intención -principalmente- de incentivar la reincorporación tanto de pesos como de dólares al sistema formal.",
    images: [
      "https://res.cloudinary.com/gregomartocci/image/upload/v1666629420/ewpf9xhzkoq6zgoj4twl.jpg",
    ],
    link: "https://www.clarin.com/economia/blanqueo-construccion-edificios-puede-invertir_0_kDr6zICQng.html",
    published: true,
    source: "Clarín",
    date: "09/09/2022 12:35",
  },
  {
    id: 3,
    title:
      "Mega proyecto en Puerto Madero: rascacielos de lujo, todas las amenities y hasta supermercado",
    description:
      "En el perímetro que forman las calles Juana Manso, Camila O´Gorman, Julieta Lanteri y Lola Mora dentro del lujoso y turístico barrio de Puerto Madero se deja ver un gigante complejo multiuso de edificios que sobresalen por su altura y por sus características arquitectónicas modernas. Se trata de un concepto novedoso en Argentina que pretende reunir en un mismo lugar propuestas habitacionales, de trabajo, recreativas, sanitarias y comerciales mediante la edificación de torres de lujo con departamentos de hasta 200 metros cuadrados a un valor de entre u$s4.000 y u$s6.000 el m2.",
    images: [
      "https://res.cloudinary.com/gregomartocci/image/upload/v1663089953/f79pn59qjkmona8asxzm.png",
    ],
    link: "https://www.iprofesional.com/negocios/366672-como-es-el-mega-proyecto-que-avanza-en-medio-de-puerto-madero.amp",
    published: true,
    source: "Iprofesional",
    date: "30 de Julio, 2022",
  },
  {
    id: 4,
    title:
      "Nació como restaurante y se convirtió en la torre más vendida de Puerto Madero",
    description: `Osten nació como un establecimiento porteño de alta gastronomía. Hoy, su creador redobla la apuesta y presenta una torre residencial con el mismo sello de calidad. Los “locos años 20″ son recordados por la historia como una época de prosperidad, derroche y grandilocuencia; con un estilo glamuroso que contrasta con el crack de 1929 y el inicio de una de las crisis económicas de mayor alcance en el mundo. De eso se trata el bar de alta coctelería y restaurante Osten. Ubicado en el barrio de Puerto Madero y abierto al público desde finales de 2020, su arquitectura está inspirada en las novelas “El Crack-Up” y “El Gran Gatsby” del escritor estadounidense Scott Fitzgerald; decisión que le valió el título de bar mejor diseñado de toda América en la última edición de los Restaurant & Bar Design Awards.`,
    images: [
      "https://res.cloudinary.com/gregomartocci/image/upload/v1663089953/eldkojxscalfxboem0qq.jpg",
    ],
    link: "https://www.infobae.com/inhouse/2022/07/15/nacio-como-restaurante-y-se-convirtio-en-la-torre-mas-vendida-de-puerto-madero/?outputType=amp-type",
    published: true,
    source: "Infobae",
    date: "15 de Julio de 2022",
  },
  {
    id: 5,
    title: "El mercado inmobiliario y el ladrillo pospandemia",
    description: `Las postales se replicaron en muchos puntos del planeta. Imágenes de familias que dejaban las grandes ciudades para instalarse en casas ubicadas en zonas alejadas, con espacios verdes y comodidades para otro tipo de vida. También ocurrió en Argentina, con fuerte demanda de propiedades en countries, más población estable en lugares veraniegos y contracción de la actividad en zonas como el microcentro porteño. “La demanda se trasladó hacia casas con jardín, para compra y alquiler. En la Ciudad, se pedían departamentos con mucha luz, balcón y terrazas”, indica Horacio Benvenuto, gerente general de Izrastzoff.`,
    images: [
      "https://res.cloudinary.com/gregomartocci/image/upload/v1666629588/n5dctmuepdcxfaesvfob.jpg",
    ],
    link: "https://noticias.perfil.com/noticias/amp/empresas/ladrillo-pospandemia.phtml",
    published: true,
    source: "Noticias",
    date: "15 de Julio de 2022",
  },
  {
    id: 6,
    title:
      "Avanza en Puerto Madero el primer shopping a cielo abierto: qué marcas y restaurantes están confirmados",
    description: `Puerto Madero, la zona más exclusiva de la Ciudad de Buenos Aires, cada vez está más cerca de tener su propio shopping a cielo abierto. El proyecto, que espera la aprobación del Gobierno de la Ciudad, está en manos de la desarrolladora GNV y del estudio de arquitectos Pfeifer y Zurdo.`,
    images: [
      "https://res.cloudinary.com/gregomartocci/image/upload/v1663021190/hiexbwla0bhru9mtsdyz.jpg",
    ],
    link: "https://www.cronista.com/negocios/puerto-madero-mas-cerca-de-su-propio-shopping-ya-funciona-el-paseo-gastronomico-con-que-marcas/",
    published: true,
    source: "Cronista",
    date: "13/02/2022",
  },
  {
    id: 7,
    title:
      "Madero Harbour consolida su proyecto más ambicioso: cambiar el “Skyline” porteño",
    description: `Embarcado en la construcción de una nueva torre en medio de la pandemia y sorteando los imprevistos que toda obra de envergadura presenta, el desarrollador de Madero Harbour y presidente de GNV Group, Alejandro Ginevra, artífice de este desarrollo urbano, cuenta en Noticias detalles del gigante inmobiliario.
    `,
    images: [
      "https://res.cloudinary.com/gregomartocci/image/upload/v1663089953/wvp2xgdwx9lwjelxloas.jpg",
    ],
    link: "https://noticias.perfil.com/noticias/amp/empresas-y-protagonistas/madero-harbour-proyecto-mas-ambicioso-cambiar-skyline-porteno.phtml",
    published: true,
    source: "Noticias",
    date: "13/02/2022",
  },
];

export default news_mock;
