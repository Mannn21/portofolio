import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
// import About from "./components/About";
import Career from "./components/Career";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";
import styled from "./styles/app.module.css";

export function App() {
	return (
		<div className={styled["container"]}>
			<div className={styled["wrapper"]}>
				<div>
					<Sidebar />
				</div>
				<div className={styled["content"]}>
					<Home />
					{/* <About /> */}
					<Skills />
					<Career />
					<Project />
					<Contact />
				</div>
			</div>
		</div>
	);
}
