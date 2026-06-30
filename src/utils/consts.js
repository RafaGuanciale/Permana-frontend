import work from "../images/categorias/work.jpeg";
import casual from "../images/categorias/casual.jpg";
import gym from "../images/categorias/gym.jpeg";
import hot from "../images/categorias/hot.jpg";
import cold from "../images/categorias/cold.jpg";
import date from "../images/categorias/date2.jpeg";
import night from "../images/categorias/night.jpg";
import party from "../images/categorias/party.jpg";
import events from "../images/categorias/events.jpg";
import travel from "../images/categorias/travel.jpg";

export const initialCards = [
  {
    id: "1",
    name: "Light Blue",
    brand: "Dolce & Gabbana",
    link: "https://http2.mlstatic.com/D_NQ_NP_914124-MLA85253135136_062025-O.webp",
    description:
      "Cítrico fresco com toques de zimbro e alecrim. Evoca o verão mediterrâneo com leveza e descontração, ideal para o calor.",
    family: "Cítrico",
    tint: "#C9B79C",
    occasion: "Casual",
    climate: "Calor",
    intensity: "Leve",
    role: "Papel na coleção ainda não definido. Em breve a inteligência do Aromatik vai analisar sua coleção e revelar o papel deste perfume.",
  },
  {
    id: "2",
    name: "Dior Homme Intense",
    brand: "Dior",
    link: "https://http2.mlstatic.com/D_NQ_NP_754743-MLA80116075781_102024-O.webp",
    description:
      "Íris empoado e aveludado com lavanda, âmbar e cedro. Sofisticado e sensual, com presença elegante e envolvente para ocasiões especiais.",
    family: "Floral",
    tint: "#C9B79C",
    occasion: "Evento",
    climate: "Frio",
    intensity: "Intenso",
    role: "Papel na coleção ainda não definido. Em breve a inteligência do Aromatik vai analisar sua coleção e revelar o papel deste perfume.",
  },
  {
    id: "3",
    name: "Terre d'Hermès",
    brand: "Hermes",
    link: "https://leloynparfums.com.br/cdn/shop/files/70798_1.png?v=1769599428&width=1024",
    description:
      "Amadeirado seco e terroso, com sensação mineral e elegante. Presença madura, firme e discreta, mais racional do que expansiva.",
    family: "Amadeirado",
    tint: "#C9B79C",
    occasion: "Dia",
    climate: "Ameno",
    intensity: "Moderado",
    role: "A assinatura diurna da coleção. Representa você no dia a dia com maturidade e elegância discreta. Presente e firme sem precisar gritar para ser notado por quem importa.",
  },
];

export const categories = [
  {
    name: "Trabalho",
    container: "top",
    subcats: ["Escritório", "Reunião", "Home office", "Ar livre"],
    count: 0,
    perfumes: [],
    featured: false,
    image: work,
  },
  {
    name: "Casual",
    container: "top",
    subcats: ["Dia a dia", "Brunch", "Parque"],
    count: 0,
    perfumes: [],
    featured: true,
    image: casual,
  },
  {
    name: "Academia",
    container: "top",
    subcats: ["Treino", "Corrida", "Yoga"],
    count: 0,
    perfumes: [],
    featured: false,
    image: gym,
  },
  {
    name: "Calor",
    container: "top",
    subcats: ["Praia", "Litoral", "Tarde quente"],
    count: 0,
    perfumes: [],
    featured: false,
    image: hot,
  },
  {
    name: "Frio",
    container: "top",
    subcats: ["Inverno", "Serra", "Noite fria"],
    count: 0,
    perfumes: [],
    featured: false,
    image: cold,
  },
  {
    name: "Encontro",
    container: "bottom",
    subcats: ["Primeiro encontro", "Jantar", "Noturno"],
    count: 0,
    perfumes: [],
    featured: false,
    image: date,
  },
  {
    name: "Noite",
    container: "bottom",
    subcats: ["Bar", "Drinks", "Balada"],
    count: 0,
    perfumes: [],
    featured: false,
    image: night,
  },
  {
    name: "Festas",
    container: "bottom",
    subcats: ["Show", "Aniversário", "Réveillon"],
    count: 0,
    perfumes: [],
    featured: false,
    image: party,
  },
  {
    name: "Eventos",
    container: "bottom",
    subcats: ["Casamento", "Formatura", "Gala"],
    count: 0,
    perfumes: [],
    featured: false,
    image: events,
  },
  {
    name: "Viagens",
    container: "bottom",
    subcats: ["Avião", "Resort", "Estrada"],
    count: 0,
    perfumes: [],
    featured: false,
    image: travel,
  },
];
