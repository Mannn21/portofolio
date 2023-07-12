import React from "react";

const NavbarList = ({data, target}) => {
	return data?.map((item, index) => {
		return (
            <a href={item.ref} key={index} style={{color: "black"}} target={target}>
                {item.icon}
            </a>
		);
	});
};

export default NavbarList;