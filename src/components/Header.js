import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styles from "../styles/style.css";

import { Nav, Hero, Breadcrumb } from ".";

const Header = ({ title, onHideNav, onShowNav, showNav }) => {
	return (
		<>
		<header id="header" className="header" role="banner">
			<div className="container">
				<div className="main-bar">
					<Link to="/" className="logo">
						{title}
					</Link>
					<Nav onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
				</div>
			</div>
		</header>
		<Breadcrumb />
		</>
	);
};

Header.propTypes = {
	title: PropTypes.string,
};

export default Header;
