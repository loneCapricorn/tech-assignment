import { facebook, instagram, twitter } from "../assets/icons";

const loginURL = "https://0wzm4.wiremockapi.cloud/login";
const orderHistoryURL = "https://0wzm4.wiremockapi.cloud/orders";

const navbarItems = [
  {
    label: "Dashboard",
    path: "/",
  },
  {
    label: "Login",
    path: "/login",
  },
  {
    label: "Order history",
    path: "/order-history",
  },
];

const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Water bottles", path: "/" },
      { name: "Milk bottles", path: "/" },
      { name: "Phone Cases", path: "/" },
      { name: "Cables", path: "/" },
      { name: "Glasses 1", path: "/" },
      { name: "Glasses 2", path: "/" },
      { name: "Headphones", path: "/" },
      { name: "Wallets", path: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", path: "/" },
      { name: "FAQs", path: "/" },
      { name: "How it works", path: "/" },
      { name: "Privacy policy", path: "/" },
      { name: "Payment policy", path: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@dashboard.com", path: "/" },
      { name: "+92554862354", path: "/" },
    ],
  },
];

const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

export { loginURL, orderHistoryURL, navbarItems, footerLinks, socialMedia };
