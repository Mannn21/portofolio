import styled from "styled-components";

export const Container = styled.div`
	height: 100vh;
	width: 50px;
	position: sticky;
	top: 0;
	bottom: 0;
	box-shadow: 2px 1px 10px 0px rgba(28, 102, 235, 0.75);
	-webkit-box-shadow: 2px 1px 10px 0px rgba(28, 102, 235, 0.75);
	-moz-box-shadow: 2px 1px 10px 0px rgba(28, 102, 235, 0.75);
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

export const NavbarWrapper = styled.section`
	height: 50%;
	width: 100%;
	padding: 22px 0px;
`;

export const Navbar = styled.nav`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: ${props => props.justifyContent};
	align-items: center;
	gap: 20px;
`;
