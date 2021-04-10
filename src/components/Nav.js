import React from "react";
import { Link } from "gatsby";

const Nav = () => {
	return (
		<nav className="main-nav">
			<Link to="/o-mnie" className="main-nav-item" activeClassName="active">
				O mnie
			</Link>
			<Link
				to="/kontakt"
				className="main-nav-item"
				activeClassName="active"
			>
				Kontakt
			</Link>
		</nav>
	);
};

export default Nav;
