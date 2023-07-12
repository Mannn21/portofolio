import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 300px;
	box-sizing: border-box;
	margin-bottom: 40px;
	/* border: 1px solid black; */
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	/* border: 1px solid blue; */
	padding: 25px 80px;
`;

export const SkillSetWrapper = styled.section`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 10px;
	/* border: 1px solid red; */
`;

export const SkillSetHeader = styled.h3`
	font-family: "Merriweather Sans", sans-serif;
	font-weight: 600;
	font-size: 28px;
	letter-spacing: 1.1px;
	color: #1c66eb;
`;

export const SkillSet = styled.span`
	font-family: "Merriweather Sans", sans-serif;
	font-weight: 900;
	font-size: 40px;
	letter-spacing: 1.1px;
`;

export const AboutWrapper = styled.section`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding-top: 40px;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 15px;
	/* border: 1px solid green; */
`;

export const About = styled.span`
	font-family: "Quicksand", sans-serif;
	font-weight: 600;
	font-size: 15px;
	letter-spacing: 1.05px;
	text-align: justify;
	color: #333;
`;

export const IconWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	/* gap: 5px 28px; */
	/* border: 1px solid blue; */
`;
