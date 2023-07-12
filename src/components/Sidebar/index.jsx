import React from "react";
import { IconContext } from "react-icons";
import { StyleSheetManager } from "styled-components";
import {
	AiOutlineHome,
	AiOutlineFundProjectionScreen,
	AiOutlineContacts,
	AiOutlineInfoCircle,
	AiFillLinkedin,
	AiFillInstagram,
	AiFillFacebook,
} from "react-icons/ai";
import { GiPencilRuler } from "react-icons/gi";
import { FaGithubSquare } from "react-icons/fa";
import { Container, Wrapper, NavbarWrapper, Navbar } from "./styled.js";
import styled from "../../styles/global.module.css";
import { Sosmed } from "../../data/sosmed.js";
import { NavIcon } from "../../data/navigation.js";
import NavbarList from "../../utils/mappedNavbar";

const Sidebar = () => {
	return (
		<Container>
			<Wrapper>
				<NavbarWrapper>
					<StyleSheetManager
						shouldForwardProp={prop => prop !== "justifyContent"}>
						<Navbar justifyContent="flex-start">
							<NavbarList data={NavIcon} target="_self" />
						</Navbar>
					</StyleSheetManager>
				</NavbarWrapper>

				<NavbarWrapper>
					<StyleSheetManager
						shouldForwardProp={prop => prop !== "justifyContent"}>
						<Navbar justifyContent="flex-end">
							<NavbarList data={Sosmed} target="_blank" />
						</Navbar>
					</StyleSheetManager>
				</NavbarWrapper>
			</Wrapper>
		</Container>
	);
};

export default Sidebar;
