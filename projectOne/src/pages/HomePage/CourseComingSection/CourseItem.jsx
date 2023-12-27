import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { CourseTypes } from "../../../config/config-general"
import PATHS from "../../../config/config-path"
import { Roles } from "../../../config/config-roles";
import { formatCurrency, formatDate } from "../../../utils/format";

const CourseItem = ({ type = CourseTypes.Normal, image, title, slug, tags, price, teams, startDate, ...restProps }) => {
	const pathDetail = PATHS.COURSE.INDEX + `/${slug}`;
	const pathOrder = PATHS.COURSE.ORDER + `/${slug}`;
	const showTeacher = teams?.find((item) => (item.tags?.includes(Roles.Teacher)));

	if (type === CourseTypes.Coming) {
		return (
			<div className="coursecoming__item">
				<div className="coursecoming__item-img">
					<Link to={pathDetail}>
						<img src={image} alt={title} />
					</Link>
				</div>
				<div className="coursecoming__item-content">
					<p className="category label">Front-end</p>
					<h2 className="title --t2"><Link to={pathDetail}>{title}</Link></h2>
					<div className="user">
						<div className="user__img">
							<img src={showTeacher?.image} alt={showTeacher?.name} />
						</div>
						<p className="user__name">{showTeacher?.name}</p>
					</div>
					<div className="info">
						{!!startDate && (
							<div className="labeltext">
								<span className="label --blue">Ngày khai giảng</span>
								<p className="title --t2">{formatDate(startDate)}</p>
							</div>
						)}
						<div className="labeltext">
							<span className="label --blue">Hình thức học</span>
							<p className="title --t2">{tags?.map((tag) => (tag)).join(' | ')}</p>
						</div>
					</div>
					<div className="btnwrap">
						<Button variant="primary" link={pathOrder}>Đăng Ký Học</Button>
						<Button variant="border" link={pathDetail}>Xem chi tiết</Button>
					</div>
				</div>
			</div>
		)
	}
	return (
		<div className="courses__list-item">
			<div className="img">
				<Link to={pathDetail}>
					<img src={image} alt="Khóa học CFD" className="course__thumbnail" />
					<span className="course__img-badge badge">{tags?.map((tag) => (tag)).join(' | ')}</span>
				</Link>
			</div>
			<div className="content">
				<p className="label">Front-End</p>
				<h3 className="title --t3">
					<Link to={pathDetail}>{title}</Link>
				</h3>
				<div className="content__info">
					<div className="user">
						<div className="user__img"><img src={showTeacher?.image} alt={showTeacher?.name} /></div>
						<p className="user__name">{showTeacher?.name}</p>
					</div>
					<div className="price"><strong>{formatCurrency(price || 0)}đ</strong></div>
				</div>
				<div className="content__action">
					<Button variant="primary" link={pathOrder}>Đăng ký ngay</Button>
					<Button variant="border" link={pathDetail}><img src="/img/icon-paper.svg" alt="icon paper" /></Button>
				</div>
			</div>
		</div>
	)
}

export default CourseItem