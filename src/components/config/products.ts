import { v4 as uuidv4 } from 'uuid';
import Blouse          from "../../../public/clothes/1.jpg";
import OversizedShirt  from "../../../public/clothes/2.jpg";
import CroppedSweater  from "../../../public/clothes/3.jpg";
import Camisole        from "../../../public/clothes/4.jpg";
import Sweater         from "../../../public/clothes/5.jpg";
import CroppedCamisole from "../../../public/clothes/6.jpg";
import Shirt           from "../../../public/clothes/7.jpg";
import Hoodie          from "../../../public/clothes/8.jpg";
import Cardigan        from "../../../public/clothes/9.jpg";

export const products = [
  {
    title: "Blouse",
    img: Blouse,
    id: uuidv4(),
    price: "12",
  },
  {
    title: "Oversized Shirt",
    img: OversizedShirt,
    id: uuidv4(),
    price: "12",
  },
  {
    title: "Cropped Sweater",
    img: CroppedSweater,
    id: uuidv4(),
    price: "13",
  },
  {
    title: "Camisole",
    img: Camisole,
    id: uuidv4(),
    price: "8",
  },
  {
    title: "Sweater",
    img: Sweater,
    id: uuidv4(),
    price: "18",
  },
  {
    title: "Cropped Camisole",
    img: CroppedCamisole,
    id: uuidv4(),
    price: "8",
  },
  {
    title: "Shirt",
    img: Shirt,
    id: uuidv4(),
    price: "10",
  },
  {
    title: "Hoodie",
    img: Hoodie,
    id: uuidv4(),
    price: "15",
  },
  {
    title: "Cardigan",
    img: Cardigan,
    id: uuidv4(),
    price: "17",
  },
] as const;
