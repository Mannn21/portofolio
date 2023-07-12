import {
	AiOutlineHome,
	AiOutlineFundProjectionScreen,
	AiOutlineContacts,
	AiOutlineInfoCircle,
} from "react-icons/ai";
import { GiPencilRuler } from "react-icons/gi";

export const NavIcon = [
    {
        title: "Home",
        icon: <AiOutlineHome size={25}/>,
        ref: "#"
    },
    {
        title: "About",
        icon: <AiOutlineInfoCircle size={25}/>,
        ref: "#about"
    },
    {
        title: "Skills",
        icon: <GiPencilRuler size={25}/>,
        ref: "#skills"
    },
    {
        title: "Projects",
        icon: <AiOutlineFundProjectionScreen size={25}/>,
        ref: "#projects"
    },
    {
        title: "Contact",
        icon: <AiOutlineContacts size={25}/>,
        ref: "#contact"
    },
];
