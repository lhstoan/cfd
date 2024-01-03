import { useAuthContext } from "../../context/AuthContext";
import CourseItem from "../CoursesPage/CourseItem";

const MyCourse = () => {
	const { courseInfo } = useAuthContext();

	return (
		<div className="tab__content-item" style={{ display: 'block' }}>
			<div className="courses__list">
				{!!!courseInfo.length && <p>Không có dữ liệu.</p>}
				{courseInfo?.length > 0 &&
					courseInfo
						.map((course, index) => {
							return <CourseItem key={course?.id || index} course={course} {...course} />;
						})
				}
			</div>
		</div>
	)
}

export default MyCourse
