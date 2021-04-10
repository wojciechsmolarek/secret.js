import React from "react";
import { Layout, SEO } from "../layout";

const IndexPage = () => (
	<Layout>

		<SEO
			title="Home"
			description="Cześć, mam na imię Wojciech i na co dzień zajmuję się pozycjonowaniem stron internetowych. Ciekawi Cię to co robię? ✅ Sprawdź koniecznie moją witrynę!"
		/>

		<section className="section-padding">
			<div class="container rhythm">
				<h2>👋 Cześć, jestem Wojciech</h2>
				<h3>Na co dzień zajmuję się pozycjonowaniem stron internetowych.</h3>
			</div>
		</section>

	</Layout>
);

export default IndexPage;
