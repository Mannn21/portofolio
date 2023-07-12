import React from "react";
import {
	Container,
	Wrapper,
	HeaderWrapper,
	Header,
	CardWrapper,
	Card,
	Title,
	Year,
	Image,
} from "./styled.js";
import Careers from "../../utils/mappedCareer.jsx"

const Career = () => {
	return (
		<Container>
			<Wrapper>
				<HeaderWrapper>
					<Header>My Career</Header>
				</HeaderWrapper>
				<CardWrapper>
					<Careers />
				</CardWrapper>
			</Wrapper>
		</Container>
	);
};

export default Career;
