import {
  RiAccountCircleFill,
  RiBriefcase4Fill,
  RiCodeSSlashFill,
  RiHome3Line,
  RiListCheck3,
} from "react-icons/ri";

export const dataNavbar = [
  { name: "home", path: "/", icon: <RiHome3Line size={30} /> },
  { name: "about", path: "/about", icon: <RiAccountCircleFill size={30} /> },
  { name: "works", path: "/works", icon: <RiBriefcase4Fill size={30} /> },
  { name: "projects", path: "/projects", icon: <RiListCheck3 size={30} /> },

  { name: "skills", path: "/skills", icon: <RiCodeSSlashFill size={30} /> },
];
