import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: ${props => (props.height ? props.height : "100vh")};
	box-sizing: border-box;
	/* border: 1px solid red; */
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	padding: 10px 80px;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`;

export const TextWrapper = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 10px;
`;

export const HeaderWrapper = styled.div`
	width: 90%;
`;

export const Header = styled.h2`
	font-family: "Merriweather Sans", sans-serif;
	font-weight: 700;
	font-size: 25px;
	color: rgb(28, 102, 235);
`;

export const Title = styled.h1`
	font-family: "Merriweather Sans", sans-serif;
	font-weight: 800;
	font-size: 60px;
	letter-spacing: 1.1px;
`;

export const DescriptionWrapper = styled.div`
	width: 90%;
`;

export const Description = styled.span`
	font-family: 'Quicksand', sans-serif;
	font-weight: 600;
	font-size: 15px;
	letter-spacing: 1.05px;
    text-align: justify;
	color: #333;
`;

export const ImageWrapper = styled.div`
	width: 50%;
	height: 100%;
`;

export const Image = styled.img`
	width: 400px;
	height: 500px;
`;
