import React from "react";
import {
	Container,
	SkillSetWrapper,
	Wrapper,
	AboutWrapper,
	SkillSetHeader,
	SkillSet,
	About,
	IconWrapper
} from "./styled.js";
import IconSkills from "../../utils/mappedIcon.jsx";

const Skills = () => {
	return (
		<Container>
			<Wrapper>
				<SkillSetWrapper>
					<SkillSetHeader>My Skills</SkillSetHeader>
					<SkillSet>Frontend Developer</SkillSet>
					<SkillSet>Backend Developer</SkillSet>
					<SkillSet>Graphic Design</SkillSet>
				</SkillSetWrapper>
				<AboutWrapper>
					<About>
						I'm an Frontend developer proficient in React.js, Next.js. I use Styled
						Components, Bootstrap and Tailwind for creating stylish interfaces.
						With a strong backend foundation in Node.js (Express.js) and MySQL.
						Additionally, my graphic design skills extend to creating
						eye-catching visuals such as posters, banners, and flyers using
						Inkscape and Corel Draw.
					</About>
					<IconWrapper>
						<IconSkills />
					</IconWrapper>
				</AboutWrapper>
			</Wrapper>
		</Container>
	);
};

export default Skills;
