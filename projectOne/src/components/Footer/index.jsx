import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="content">
					<div className="content-item">
						<h3 className="label">Thông tin</h3>
						<ul>
							<li><Link to="/about">Về CFD Circle</Link></li>
							<li><Link to="/courses">Khóa học</Link></li>
							<li><Link to="/blog">Bài viết</Link></li>
						</ul>
					</div>
					<div className="content-item">
						<h3 className="label">Hỗ trợ</h3>
						<ul>
							<li><Link to="/contact">Trung tâm hỗ trợ</Link></li>
							<li><Link to="/payment-method">Phương thức thanh toán</Link></li>
							<li><Link to="/privacy">Chính sách và điều khoản</Link></li>
						</ul>
					</div>
					<div className="content-item">
						<h3 className="label">Kết nối</h3>
						<ul>
							<li><a href="https://www.facebook.com/groups/cfdteam" target="_blank" rel="noreferrer"><i><img src="/img/icon-cfd-footer.svg"alt="cfd"/></i><span>Cộng đồng</span></a>
							</li>
							<li><a href="https://www.facebook.com/cfdcircle" target="_blank" rel="noreferrer"><i><img src="/img/icon-fb-footer.svg"alt="cfd"/></i><span>Facebook</span></a></li>
							<li><a href="https://www.youtube.com/cfdcircle" target="_blank" rel="noreferrer"><i><img src="/img/icon-ytb-ft.svg"alt="cfd"/></i><span>Youtube</span></a></li>
						</ul>
					</div>
					<div className="content-item">
						<h3 className="label">Liên hệ</h3>
						<ul>
							<li><a href="https://goo.gl/maps/RnCAPv3CBjUgTUFd8" target="_blank" rel="noreferrer"><i><img src="/img/icon-address.svg" alt="cfd" /></i><span>666/46/29 Ba Tháng Hai,
								phường 14, quận
								10, TPHCM</span></a></li>
							<li><a href="tel:0989596913"><i><img src="/img/icon-phone.svg"alt="cfd"/></i><span>(+84) 98 9596
								913</span></a>
							</li>
							<li><a href="mailto:info@cfdcircle.vn"><i><img src="/img/icon-mail.svg"alt="cfd"/></i><span>info@cfdcircle.vn</span></a>
							</li>
						</ul>
					</div>
				</div>
				<div className="bottom">
					<div className="copyright">
						<img src="/img/icon-footer-copy.svg"alt="cfd"/><span>© 2023 CFD Circle</span>
					</div>
					<Link to="/" target="_blank" className="logobct"><img src="/img/logo-bo-cong-thuong.png"alt="cfd"/></Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer;