const Navbar = () => {
	return (
		<nav className="navbar">
			<ul className="navbar__main">
				<li className="navbar__link">
					<a href="./" className="navbar__item active">Trang chủ</a>
				</li>
				<li className="navbar__link">
					<a href="about.html" className="navbar__item">Về CFD Circle</a>
				</li>
				<li className="navbar__link">
					<a href="courses.html" className="navbar__item">Khóa học</a>
				</li>
				<li className="navbar__link">
					<a href="blog.html" className="navbar__item">Bài viết</a>
				</li>
				<li className="navbar__link">
					<a href="contact.html" className="navbar__item">Liên hệ</a>
				</li>
			</ul>
			<div className="navbar__overlay" />
		</nav>
	)
}

export default Navbar