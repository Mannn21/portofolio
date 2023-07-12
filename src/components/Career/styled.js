import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 300px;
	box-sizing: border-box;
	margin-bottom: 40px;
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	padding: 10px 80px;
	display: flex;
	flex-direction: column;
`;

export const HeaderWrapper = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: flex-start;
	margin-bottom: 15px;
`;

export const Header = styled.h3`
	font-family: "Merriweather Sans", sans-serif;
	font-weight: 600;
	font-size: 28px;
	letter-spacing: 1.1px;
	color: #1c66eb;
`;

export const CardWrapper = styled.div`
	height: calc(100% - 65px);
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

export const Card = styled.div`
	width: calc(90% / 4);
	height: 100%;
	display: flex;
	/* gap: 3px; */
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`;

export const Title = styled.h4`
	font-family: "Merriweather Sans", sans-serif;
	font-weight: 600;
	font-size: 21px;
	letter-spacing: 1.1px;
	text-align: center;
`;

export const Image = styled.img`
	height: 45%;
	width: 45%;
`

export const Year = styled.span`
	font-family: "Quicksand", sans-serif;
	font-weight: 600;
	font-size: 18px;
	letter-spacing: 1.1px;
	text-align: center;
	color: #303030;
`;
