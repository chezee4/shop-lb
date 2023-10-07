import { v4 as uuidv4 } from "uuid";
import Facebook from "../../../public/icons/facebook.svg";
import Instagram from "../../../public/icons/instagram.png";
import Snapchat from "../../../public/icons/snapchat.png";

export const messageLinkt = [
  { title: "facebook", icon: Facebook, link: "https://www.facebook.com/chezee.good/?locale=uk_UA", id: uuidv4() },
  { title: "instagram", icon: Instagram, link: "https://www.instagram.com/vadum_hd/", id: uuidv4() },
  { title: "snapchat", icon: Snapchat, link: "https://github.com/chezee4", id: uuidv4() },
] as const;
