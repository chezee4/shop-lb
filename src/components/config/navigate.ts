import { v4 as uuidv4 } from "uuid";
export const navigate = [
  { title: "Home", link: "/home", id:uuidv4() },
  { title: "Products", link: "/Products", id:uuidv4() },
  { title: "Sole", link: "/Sole", id:uuidv4() },
  { title: "Cart", link: "/Products/Cart", id:uuidv4() },
  { title: "Checkout", link: "/Checkout", id:uuidv4() },
];
