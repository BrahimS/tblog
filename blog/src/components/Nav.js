import React from 'react'


const Nav = (props) => {
	return (
		<nav className="Blog_nav">
			<ul className="Blog_nav__item">
				<li className="item_link">
					<a to="/">Home</a>
				</li>
				<li className="item_link">
					<a to="/projects">About us</a>
				</li>
				<li className="item_link">
					<a to="/contact">Contact</a>
				</li>
			</ul>
	</nav>
	)
}

export default Nav
