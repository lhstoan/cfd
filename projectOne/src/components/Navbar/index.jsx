import {Link} from "react-router-dom"

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul className="navbar__main">
				<li className="navbar__link">
					<Link to="/" className="navbar__item active">Trang chủ</Link>
				</li>
				<li className="navbar__link">
					<Link to="/about" className="navbar__item">Về CFD Circle</Link>
				</li>
				<li className="navbar__link">
					<Link to="/courses" className="navbar__item">Khóa học</Link>
				</li>
				<li className="navbar__link">
					<Link to="/blog" className="navbar__item">Bài viết</Link>
				</li>
				<li className="navbar__link">
					<Link to="/contact" className="navbar__item">Liên hệ</Link>
				</li>
			</ul>
			<div className="navbar__overlay" />
		</nav>
	)
}

export default Navbar