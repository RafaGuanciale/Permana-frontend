import work from "../images/categorias/work.jpeg";
import gym from "../images/categorias/gym.jpeg";
import date from "../images/categorias/date2.jpeg";
import events from "../images/categorias/events.jpg";
import casual from "../images/categorias/casual.jpg";
import hot from "../images/categorias/hot.jpg";
import cold from "../images/categorias/cold.jpg";
import party from "../images/categorias/party.jpg";
import travel from "../images/categorias/travel.jpg";
import night from "../images/categorias/night.jpg";

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
    label: "casual",
    count: 9,
    image: casual,
    tint: "#1F2937",
    featured: true,
    category: "Casual",
    container: "top",
  },
  {
    label: "Trabalho",
    count: 7,
    tint: "#334155",
    image: work,
    category: "Trabalho",
    container: "top",
  },
  {
    label: "Encontros",
    count: 6,
    tint: "#7C3AED",
    image: date,
    category: "Encontros",
    container: "bottom",
  },
  {
    label: "Calor",
    count: 8,
    tint: "#0284C7",
    image: hot,
    category: "Calor",
    container: "top",
  },
  {
    label: "Noite",
    count: 11,
    tint: "#111827",
    featured: true,
    image: night,
    category: "Trabalho",
    container: "top",
    category: "Noite",
    container: "bottom",
  },
  {
    label: "Eventos",
    count: 4,
    tint: "#B45309",
    image: events,
    category: "Eventos",
    container: "bottom",
  },
];
