import React, { useState } from 'react';
import { Link } from "gatsby";
import Icon from '../icons/hamburger'
import { cn } from '../utils/Utilities'
import * as styles from "../styles/style.css";


const Nav = ({ onHideNav, onShowNav, showNav, siteTitle }) => {

	return (

		<div className="wrapper">
			<button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
				<Icon symbol='hamburger' />
			</button>

			<nav className={cn(styles.nav, showNav && styles.showNav)}>
				<ul>
					<li>
						<Link to='/o-mnie/'>O mnie</Link>
					</li>
					<li>
						<Link to='/kontakt/'>Kontakt</Link>
					</li>
				</ul>
			</nav>

		</div>
	);
};

export default Nav;
