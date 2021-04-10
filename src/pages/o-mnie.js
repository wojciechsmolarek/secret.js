import React from "react";
import { Layout, SEO } from "../layout";

const SecondPage = () => (
	<Layout>
		<SEO
			title="O mnie"
			robots="noindex"
		/>
		<section className="section-padding">
			<div className="container rhythm">
				<h1>O mnie słów kilka...</h1>
				<p>Welcome to page 2</p>
			</div>
		</section>
	</Layout>
);

export default SecondPage;
