import React from "react";
import {
	Container,
	Wrapper,
	HeaderWrapper,
	ProjectWrapper,
	WebProjectWrapper,
	DesignProjectWrapper,
	Header,
	ProjectHeaderWrapper,
	ProjectContainer,
	ProjectHeader,
	ProjectWebList,
	ProjectWebCard,
	ThumbnailWrapper,
	ImageWrapper,
	LinkWrapper,
	StackWrapper,
	ButtonWrapper,
	ProjectDesignList,
	ProjectDesignCard,
	Image,
	ProjectTitle,
} from "./styled.js";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

const Project = () => {
	return (
		<Container>
			<Wrapper>
				<HeaderWrapper>
					<Header>My Projects</Header>
				</HeaderWrapper>
				<ProjectContainer>
					<WebProjectWrapper>
						<ProjectHeaderWrapper>
							<ProjectHeader>Website Design Projects</ProjectHeader>
						</ProjectHeaderWrapper>
						<ProjectWrapper>
							<ProjectWebList>
								<ProjectWebCard>
									<ThumbnailWrapper>
										<ImageWrapper>
											<img src={"https://placehold.co/300x200"} />
										</ImageWrapper>
										<StackWrapper>stack</StackWrapper>
									</ThumbnailWrapper>
									<LinkWrapper>
										<ButtonWrapper>
											<span>Repo Link</span>
											<AiOutlineGithub size={22}/>
										</ButtonWrapper>
										<ButtonWrapper>
											<span>Visit Link</span>
											<AiOutlineLink size={22}/>
										</ButtonWrapper>
									</LinkWrapper>
								</ProjectWebCard>
								<ProjectWebCard>
									<ThumbnailWrapper>
										<ImageWrapper>
											<img src={"https://placehold.co/300x200"} />
										</ImageWrapper>
										<StackWrapper>stack</StackWrapper>
									</ThumbnailWrapper>
									<LinkWrapper>
										<ButtonWrapper>
											<span>Repo Link</span>
											<AiOutlineGithub size={22}/>
										</ButtonWrapper>
										<ButtonWrapper>
											<span>Visit Link</span>
											<AiOutlineLink size={22}/>
										</ButtonWrapper>
									</LinkWrapper>
								</ProjectWebCard>
								<ProjectWebCard>
									<ThumbnailWrapper>
										<ImageWrapper>
											<img src={"https://placehold.co/300x200"} />
										</ImageWrapper>
										<StackWrapper>stack</StackWrapper>
									</ThumbnailWrapper>
									<LinkWrapper>
										<ButtonWrapper>
											<span>Repo Link</span>
											<AiOutlineGithub size={22}/>
										</ButtonWrapper>
										<ButtonWrapper>
											<span>Visit Link</span>
											<AiOutlineLink size={22}/>
										</ButtonWrapper>
									</LinkWrapper>
								</ProjectWebCard>
							</ProjectWebList>
						</ProjectWrapper>
					</WebProjectWrapper>
					<DesignProjectWrapper>
						<ProjectHeaderWrapper>
							<ProjectHeader>Graphic Design Projects</ProjectHeader>
						</ProjectHeaderWrapper>
						<ProjectWrapper>
							<ProjectDesignList>
								<ProjectDesignCard>
									<ProjectTitle>Flyer Pelatihan</ProjectTitle>
									<Image src="./project/flyer 1.webp" width={"160px"} />
								</ProjectDesignCard>
								<ProjectDesignCard>
									<ProjectTitle>Flyer Opening Restaurant</ProjectTitle>
									<Image src="./project/flyer 2.webp" width={"160px"} />
								</ProjectDesignCard>
								<ProjectDesignCard>
									<ProjectTitle>Poster Idul Adha</ProjectTitle>
									<Image src="./project/poster.webp" width={"160px"} />
								</ProjectDesignCard>
								<ProjectDesignCard>
									<ProjectTitle>Menu Restaurant</ProjectTitle>
									<Image src="./project/menu.webp" height={"180px"} />
								</ProjectDesignCard>
							</ProjectDesignList>
						</ProjectWrapper>
					</DesignProjectWrapper>
				</ProjectContainer>
			</Wrapper>
		</Container>
	);
};

export default Project;
