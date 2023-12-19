import {Link} from "react-router-dom";
import {Empty} from "antd";
import PATHS from "../../../config/config-path";
import CourseItem from "../CourseComingSection/CourseItem";

const CoursesSection=({data=[],loading=false}) => {
	return (
		<section className="courses">
			<div className="container">
				<div className="heading">
					<h2 className="heading__title title --t2">Tất cả <span className="color--primary">khóa học</span></h2>
				</div>

				{!loading&&data?.length===0? (
					<Empty
						description="Không tìm thấy dữ liệu nào"
						style={{margin: "0 auto"}}
					/>
				):(
					<div className="courses__list">
						{data?.length>0&&
							data.map((course,index) => {
								return (
									<CourseItem
										key={course?.id||index}
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