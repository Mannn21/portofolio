import React from "react";
import { Icon } from "../data/icon.js";
import styled from "../styles/global.module.css"

const IconSkills = () => {
	return Icon?.map((item, index) => {
		return (
			<div key={index}>
                <img src={item.image} className={styled["skills-image"]} alt={item.title} title={item.title}/>
			</div>
		);
	});
};

export default IconSkills;
