import React from "react";
import { IconContext } from "react-icons";
import {
	Container,
	Wrapper,
	HeaderWrapper,
	Header,
	MoreHeader,
	ContactWrapper,
	ContactText,
	EmailWrapper,
    EmailContainer,
	Email,
} from "./styled.js";
import { HiMail } from "react-icons/hi";

const Contact = () => {
	return (
		<Container>
			<Wrapper>
				<HeaderWrapper>
					<Header>My Contact</Header>
					<MoreHeader>
						Let's Collaborate and Create Something Amazing Together!
					</MoreHeader>
				</HeaderWrapper>
				<ContactWrapper>
					<ContactText>
						If you are interested in my skills and would like to collaborate
						with me, please feel free to contact me further by sending an email
						to the address below. I would be delighted to accept the
						collaboration opportunity with you. Until then, see you again!
					</ContactText>
					<EmailWrapper>
						<EmailContainer href={"mailto:aimannurrofi21@gmail.com"}>
							<Email>Click to Write an Email for Me</Email>
							<IconContext.Provider value={{ color: "black" }}>
								<HiMail size={25} />
							</IconContext.Provider>
						</EmailContainer>
					</EmailWrapper>
				</ContactWrapper>
			</Wrapper>
		</Container>
	);
};

export default Contact;
