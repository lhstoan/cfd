import React from 'react'
import {Link} from 'react-router-dom'

const HeaderAuth=() => {

	return (
		<>
			<div className="header__auth">
				<a href="javascript:void(0)" className="btn btn--transparent btnmodal" data-modal="mdlogin">
					<span>Đăng ký /&nbsp;</span><span>Đăng nhập</span>
				</a>
			</div>
			{/* user logged */}
			{/* <div className="header__logged">
				<div className="userlogged">
					<div className="userlogged__avatar user" data-dropdown="userlogged__dropdown">
						<div className="userlogged__avatar-img user__img">
							<img src="/img/avatar_nghia.jpg" alt="Avatar teacher" />
						</div>
						<i className="userlogged__avatar-icon"><svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 3.5L7.00003 10.5L14 3.5H0Z" fill="white" />
						</svg>
						</i>
					</div>
					<div className="userlogged__dropdown dropdown">
						<div className="userlogged__dropdown-info">
							<div className="user__img">
								<img src="/img/avatar_nghia.jpg" alt="Avatar teacher" />
							</div>
							<Link to="/profile" className="user__info">
								<p className="title --t4"><strong>Trần Nghĩa</strong></p>
								<span className="email">Thông tin tài khoản</span>
							</Link>
						</div>
						<div className="userlogged__dropdown-list">
							<Link to="/profile/my-course">Khóa học của tôi</Link>
							<Link to="/profile/my-payment">Lịch sử thanh toán</Link>
							<Link to="/contact">Hỗ trợ</Link>
							<Link to="#">Đăng xuất <i><img src="/img/iconlogout.svg" alt /></i></Link>
						</div>
					</div>
				</div>
			</div> */}
		</>
	)
}

export default HeaderAuth