import React from "react";
import { Link } from "gatsby";

const Breadcrumb = () => {
	return (
    <div className="container rhythm">
			<Link to="/" className="nav-item" activeClassName="active">Strona główna</Link>
			<span className="divider">‣</span>
    </div>
	);
};

export default Breadcrumb;
