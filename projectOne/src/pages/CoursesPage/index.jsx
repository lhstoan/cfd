/* eslint-disable no-unused-vars */
import CourseItem from "./CourseItem"
import useQuery from "../../hooks/useQuery";
import { courseService } from "../../services/courseService";

const CoursePage = () => {
	const { data: courses, error: coursesError, loading: coursesLoading } = useQuery(() =>
		courseService.getCourses()
	);

	return (
		<main className="mainwrapper courses --ptop">
			<div className="container">
				<div className="textbox">
					<div className="container">
						<h2 className="title --t2">Tất cả khoá học</h2>
					</div>
				</div>
				<div className="courses__list">
					{courses?.courses?.map((course, index) => {
						const { id } = course;
						return <CourseItem key={id || index} course={course} />;
					})}
				</div>
			</div>
		</main>
	)
}

export default CoursePage