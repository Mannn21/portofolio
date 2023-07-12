import React from "react";
import { CareerList } from "../data/career.js";
import styled from "../styles/global.module.css";

const Careers = () => {
	return CareerList?.map((item, index) => {
		return (
			<div key={index} className={styled["card"]}>
				<h3 className={styled["title"]}>{item.title}</h3>
				<img src={item.image} alt={item.title} className={styled["image"]}/>
				<span className={styled["year"]}>{item.year}</span>
			</div>
		);
	});
};

export default Careers;
