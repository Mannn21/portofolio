import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 180vh;
	box-sizing: border-box;
	margin-bottom: 40px;
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 25px 80px;
	/* border: 1px solid green; */
`;

export const HeaderWrapper = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: flex-start;
	margin-bottom: 15px;
	/* border: 1px solid blue; */
`;

export const Header = styled.h3`
	font-family: "Merriweather Sans", sans-serif;
	font-weight: 600;
	font-size: 28px;
	letter-spacing: 1.1px;
	color: #1c66eb;
`;

export const ProjectContainer = styled.div`
	width: 100%;
	height: calc(100% - 65px);
`;

export const WebProjectWrapper = styled.div`
	width: 100%;
	height: 60%;
	position: relative;
`;

export const DesignProjectWrapper = styled.div`
	width: 100%;
	height: 40%;
	position: relative;
`;

export const ProjectHeaderWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 1;
	display: flex;
	align-items: start;
	justify-content: center;
	/* border: 1px solid blue; */
	padding-top: 30px;
`;

export const ProjectHeader = styled.h4`
	font-family: "Merriweather Sans", sans-serif;
	font-weight: 800;
	font-size: 90px;
	letter-spacing: 1.1px;
	color: rgba(212, 212, 212, 0.8);
	text-align: center;
`;

export const ProjectWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 2;
	/* border: 1px solid blue; */
`;

export const ProjectWebList = styled.ul`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	padding: 40px;
	flex-wrap: wrap;
	gap: 20px;
`;

export const ProjectWebCard = styled.div`
	width: 400px;
	height: 280px;
	background-color: white;
	border-radius: 5px;
	box-shadow: 2px 2px 8px 0px rgba(128, 128, 128, 0.75);
	-webkit-box-shadow: 2px 2px 8px 0px rgba(128, 128, 128, 0.75);
	-moz-box-shadow: 2px 2px 8px 0px rgba(128, 128, 128, 0.75);
	/* border: 1px solid red; */
`;

export const ThumbnailWrapper = styled.div`
	width: 100%;
	height: 210px;
	display: flex;
	flex-direction: row;
	/* border: 1px solid red; */
`;

export const LinkWrapper = styled.div`
	width: 100%;
	height: calc(100% - 210px);
	/* border: 1px solid blue; */
	padding: 5px;
	display: flex;
	flex-direction: column;
	gap: 6px;
`;

export const ImageWrapper = styled.div`
	width: 320px;
	height: 100%;
	padding: 5px;
`;

export const StackWrapper = styled.div`
	width: 80px;
	height: 100%;
	/* border: 1px solid black; */
	display: flex;
	flex-direction: column;
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	height: 50%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	background-color: #444;
	color: white;
	cursor: pointer;

	&:hover{
		color: #1c66eb;
	}
`;

export const ProjectDesignList = styled.ul`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	padding: 40px;
	flex-wrap: wrap;
`;

export const ProjectDesignCard = styled.li`
	list-style-type: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 16px;

	&:nth-child(odd) {
		margin-bottom: 40px;
	}

	&:nth-child(even) {
		margin-bottom: -70px;
	}
`;

export const ProjectTitle = styled.span`
	font-family: "Quicksand", sans-serif;
	font-weight: 600;
	font-size: 18px;
	letter-spacing: 1.1px;
	text-align: center;
	color: #1c66eb;
`;

export const Image = styled.img`
	filter: grayscale(100%);
	cursor: pointer;

	&:hover {
		transition: all 0.3s ease-in-out;
		filter: grayscale(0);
		margin-top: 18px;
		transform: scale(1.25);
	}
`;
