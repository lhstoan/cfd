const CourseComing=({course,...restProps}) => {
	const {id,image,title,slug,tags,price,teams}=course||[];
	const team=teams[0];
	return (
		<div className="coursecoming__item">
			<div className="coursecoming__item-img">
				<a href="course-detail.html">
					<img src={image} alt="Khóa học sắp ra mắt CFD" />
				</a>
			</div>
			<div className="coursecoming__item-content">
				<p className="category label">Front-end</p>
				<h2 className="title --t2"><a href="course-detail.html">{title}</a></h2>
				<div className="user">
					<div className="user__img">
						<img src="/img/avatar_nghia.jpg" alt={team.name} />
					</div>
					<p className="user__name">{team.name}</p>
				</div>
				<div className="info">
					<div className="labeltext">
						<span className="label --blue">Ngày khai giảng</span>
						<p className="title --t2">04/05/2023</p>
					</div>
					<div className="labeltext">
						<span className="label --blue">Hình thức học</span>
						<p className="title --t2">Offline | Online</p>
					</div>
				</div>
				<div className="btnwrap">
					<a href="course-order.html" className="btn btn--primary">Đăng Ký Học</a>
					<a href="course-detail.html" className="btn btn--border --black">Xem chi tiết</a>
				</div>
			</div>
		</div>
	)
}

export default CourseComing