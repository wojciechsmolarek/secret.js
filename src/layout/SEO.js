import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, title, robots, image }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						robots
						author {
							name
						}
						social {
							image
						}
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;
	const metaImage = image || site.siteMetadata.social.image;
	const metaRobots = robots || site.siteMetadata.robots;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					name: `robots`,
					content: metaRobots,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `og:image`,
					content: metaImage,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author.name,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:image`,
					content: metaImage,
				}
			]}
		/>
	);
}

SEO.defaultProps = {
	description: ``,
	lang: `pl`,
	meta: [],
	title: ``,
	image: ``,
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
	image: PropTypes.string,
};

export default SEO;
