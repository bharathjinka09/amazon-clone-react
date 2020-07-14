import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'

function Header(){
	return (
		<nav className="header">
			<Link to="/">

		  		<img alt="logo" className="header__logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
			</Link>
			{/* Search box */}
			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>
		</nav>
	)
}

export default Header