import { Link } from "react-router-dom";
import PATHS from "../../config/config-path";

const CourseItem = ({ course, ...restProps }) => {

	const { id, image, title, slug, tags, price, teams } = course || [];
	const team = teams[0];
	return (
		<div className="courses__list-item" id={id}>
			<div className="img">
				<a href="course-detail.html">
					<img src={image} alt="Khóa học CFD" className="course__thumbnail" />
					<span className="course__img-badge badge">
						{tags?.map((tag) => (tag))}
					</span>
				</a>
			</div>
			<div className="content">
				<p className="label">Front-End</p>
				<h3 className="title --t3"><Link to={`${PATHS.COURSE.DETAIL}${slug}`}>{title}</Link></h3>
				<div className="content__info">
					<div className="user">
						<div className="user__img"><img src="/img/avatar_nghia.jpg" alt="Avatar teacher" /></div>
						<p className="user__name">{team.name}</p>
					</div>
					<div className="price"><strong>{price}</strong></div>
				</div>
				<div className="content__action">
					<a href="course-order.html" className="btn btn--primary">Đăng ký ngay</a>
					<a href="course-detail.html" className="btn btn--default"><img src="/img/icon-paper.svg" alt="icon paper" /></a>
				</div>
			</div>
		</div>
	)
}

export default CourseItem