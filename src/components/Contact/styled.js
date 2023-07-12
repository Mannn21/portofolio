import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 260px;
	box-sizing: border-box;
	margin-bottom: 60px;
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	padding: 10px 80px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	gap: 18px;
`;

export const HeaderWrapper = styled.div`
	width: 100%;
	height: 140px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	gap: 6px;
`;

export const Header = styled.h3`
	font-family: "Merriweather Sans", sans-serif;
	font-weight: 600;
	font-size: 28px;
	letter-spacing: 1.1px;
	color: #1c66eb;
`;

export const MoreHeader = styled.span`
	font-family: "Merriweather Sans", sans-serif;
	font-weight: 900;
	font-size: 20px;
	letter-spacing: 1.1px;
`;

export const ContactWrapper = styled.div`
	width: 100%;
	height: calc(100% - 70px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 60%;
	gap: 25px;
`;

export const ContactText = styled.span`
	font-family: "Quicksand", sans-serif;
	font-weight: 600;
	font-size: 15px;
	letter-spacing: 1.05px;
	text-align: center;
	color: #333;
`;

export const EmailWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const EmailContainer = styled.a`
	width: auto;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 2px;
	gap: 14px;
	border-bottom: 2px dashed #1c66eb;
	cursor: pointer;
	text-decoration: none;
	color: black;
`;

export const Email = styled.span`
	font-family: "Merriweather Sans", sans-serif;
	font-weight: 400;
	font-size: 14px;
	letter-spacing: 1.05px;
	text-align: center;
`;
