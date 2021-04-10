import React from "react";
import { Layout, SEO } from "../layout";

const SecondPage = () => (
	<Layout>
		<SEO
			title="Kontakt"
			robots="noindex"
		/>
		<section className="section-padding">
			<div className="container rhythm">
				<h1>Kontakt</h1>
				<p>Welcome to page 2</p>
			</div>
		</section>
	</Layout>
);

export default SecondPage;
