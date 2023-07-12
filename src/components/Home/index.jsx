import React from "react";
import {
	Container,
	Wrapper,
	ImageWrapper,
	Image,
	TextWrapper,
	Header,
	HeaderWrapper,
	Title,
	Description,
	DescriptionWrapper,
} from "./styled.js";

const Home = () => {
	return (
		<Container>
			<Wrapper>
				<TextWrapper>
					<HeaderWrapper>
						<Header>Hello, I'm</Header>
						<Title>Aimanurrofi</Title>
					</HeaderWrapper>
					<DescriptionWrapper>
						<Description>
							Welcome to my portfolio! I graduated from islamic high school three
							years ago. After graduating, I became interested in website
							programming. Currently, I am 20 years old and highly enthusiastic
							about developing my skills as a frontend web developer. I'm
							particularly interested in using React.js to create interactive
							and responsive user interfaces.
						</Description>
					</DescriptionWrapper>
				</TextWrapper>
				<ImageWrapper>
					{/* <Image src="pattern.svg" alt="background picture" /> */}
				</ImageWrapper>
			</Wrapper>
		</Container>
	);
};

export default Home;
