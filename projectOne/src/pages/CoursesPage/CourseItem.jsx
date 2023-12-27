import { Link } from "react-router-dom";
import PATHS from "../../config/config-path";
import Button from "../../components/Button";
import { formatCurrency } from "../../utils/format";

const CourseItem = ({ course, ...restProps }) => {

	const { id, image, title, slug, tags, price, teams } = course || [];
	const team = teams[0];
	const pathDetail = PATHS.COURSE.INDEX + `/${slug}`;
	const pathOrder = PATHS.COURSE.ORDER + `/${slug}`;
	return (
		<div className="courses__list-item" id={id}>
			<div className="img">
				<Link to={pathDetail}>
					<img src={image} alt="Khóa học CFD" className="course__thumbnail" />
					<span className="course__img-badge badge">
						{tags?.map((tag) => (tag)).join(' | ')}
					</span>
				</Link>
			</div>
			<div className="content">
				<p className="label">Front-End</p>
				<h3 className="title --t3"><Link to={pathDetail}>{title}</Link></h3>
				<div className="content__info">
					<div className="user">
						<div className="user__img"><img src={team.image} alt={team.name} /></div>
						<p className="user__name">{team.name}</p>
					</div>
					<div className="price"><strong>{formatCurrency(price || 0)}đ</strong></div>
				</div>
				<div className="content__action">
					<Button variant="primary" link={pathOrder}>Đăng ký ngay</Button>
					<Button variant="default" link={pathDetail}><img src="/img/icon-paper.svg" alt="icon paper" /></Button>
				</div>
			</div>
		</div>
	)
}

export default CourseItem