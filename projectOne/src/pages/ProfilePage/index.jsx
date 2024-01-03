import { NavLink, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const ProfilePage = () => {
	const { profile } = useAuthContext();
	const { email, lastName, firstName, introduce, phone, website, facebookURL } = profile || "";

	return (
		<main className="mainwrapper profilepage">
			<div className="container">
				<div className="wrapper">
					<div className="sidebar">
						<div className="sidebar__info">
							<div className="useravatar">
								<div className="avatar">
									<div className="img"><img  src="/img/cfd-share-thumbnail-facebook.png" alt="avatar" /></div>
								</div>
								<h3 className="title --t3">{firstName}</h3>
							</div>
						</div>
						<div className="sidebar__content">
							<h4>Giới thiệu</h4>
							<p className="description">{introduce}</p>
							<ul>
								<li><img src="/img/icon-mail-outline.svg" alt="icon" style={{ top: 1 }} /><span>{email}</span></li>
								<li><img src="/img/icon-phone-outline.svg" alt="icon" style={{ top: 1 }} /><span>{phone}</span></li>
								<li><img src="/img/icon-link.svg" alt="icon" style={{ top: 1 }} /><a href="#" target="_blank">{website}</a></li>
							</ul>
							{/* <div className="social">
								<a href="#"><img src="/img/icon-facebook-dark.svg"alt="cfd"/></a>
								<a href="#"><img src="/img/icon-linkedin-dark.svg"alt="cfd"/></a>
								<a href="#"><img src="/img/icon-youtube-dark.svg"alt="cfd"/></a>
							</div> */}
						</div>
					</div>
					<div className="tabwrap">
						<div className="tab">
							<div className="tab__title">
								<NavLink end to="/profile">Thông tin cá nhân</NavLink>
								<NavLink to="/profile/my-course">Khóa học của tôi</NavLink>
								<NavLink to="/profile/my-payment" >Lịch sử thanh toán</NavLink>
							</div>
							<div className="tab__content">
								<Outlet />
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default ProfilePage
