import { v4 as uuidv4 } from "uuid";
import Facebook from "../../../public/icons/facebook.svg";
import Instagram from "../../../public/icons/instagram.png";
import Snapchat from "../../../public/icons/snapchat.png";

export const messageLinkt = [
  { title: "facebook", icon: Facebook, link: "ggg", id: uuidv4() },
  { title: "instagram", icon: Instagram, link: "aaa", id: uuidv4() },
  { title: "snapchat", icon: Snapchat, link: "bbb", id: uuidv4() },
] as const;
