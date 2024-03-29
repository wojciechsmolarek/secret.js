import React, { Component } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import "../styles/style.css";
import { Header, Footer, Nav, Breadcrumb } from "../components";

class Layout extends Component {
	render() {
		const { children } = this.props;

		return (
			<StaticQuery
				query={graphql`
					query {
						site {
							siteMetadata {
								title
							}
						}
					}
				`}
				render={data => (
					<React.Fragment>

						<div id="layout-svgs" className="layout-svgs" />

						<div id="site-container" className="site-container">
							<Header title={data.site.siteMetadata.title} />

							<main id="main" className="main">
								{children}
							</main>

							<Footer title={data.site.siteMetadata.title} />
						</div>
					</React.Fragment>
				)}
			/>
		);
	}
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
