import { Link } from "react-router-dom";
import PATHS from "../../../config/config-path";

import CourseComingItem from "../CourseComingSection/CourseComingItem";
import { Empty } from "antd";

const CoursesSection = ({ courses, loading }) => {
	return (
		<section className="courses">
			<div className="container">
				<div className="heading">
					<h2 className="heading__title title --t2">Tất cả <span className="color--primary">khóa học</span></h2>
				</div>

				{!loading && courses?.length === 0 ? (
					<Empty
						description="Không tìm thấy dữ liệu nào"
						style={{ margin: "0 auto" }}
					/>
				) : (
					<div className="courses__list">
						{courses?.length > 0 &&
							courses.map((course, index) => {
								return (
									<CourseComingItem
										key={course?.id || index}
										{...course}
									/>
								);
							})}
					</div>
				)}
				<div className="courses__btnall">
					<Link to={PATHS.COURSE.INDEX} className="course__btn btn btn--grey">Tất cả khoá học</Link>
				</div>
			</div>
		</section>
	)
}

export default CoursesSection