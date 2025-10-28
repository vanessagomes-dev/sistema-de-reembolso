import foodSvg from "../assets/food.svg";
import othersSVG from "../assets/others.svg";
import servicesSVG from "../assets/services.svg";
import transportSvg from "../assets/transport.svg";
import accomodationSVG from "../assets/accomodation.svg";

export const CATEGORIES = {
  food: {
    name: "Alimentação",
    icon: foodSvg,
  },
  transport: {
    name: "Transporte",
    icon: transportSvg,
  },
  accomodation: {
    name: "Hospedagem",
    icon: accomodationSVG,
  },
  services: {
    name: "Serviços",
    icon: servicesSVG,
  },
  others: {
    name: "Outros",
    icon: othersSVG,
  },
};

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<
  keyof typeof CATEGORIES
>;
