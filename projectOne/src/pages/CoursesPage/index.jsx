/* eslint-disable no-unused-vars */
import CourseItem from "./CourseItem"
import useQuery from "../../hooks/useQuery";
import { courseService } from "../../services/courseService";
import { Empty, Skeleton } from "antd";
import useDebounce from "../../hooks/useDebounce";

const CoursePage = () => {
	const { data: data, error: coursesError, loading: coursesLoading } = useQuery(() =>
		courseService.getCourses()
	);
	const courses = data?.courses || [];
	const loading = useDebounce(coursesLoading, 300);
	return (
		<main className="mainwrapper courses --ptop">
			<div className="container">
				<div className="textbox">
					<div className="container">
						<h2 className="title --t2">Tất cả khoá học</h2>
					</div>
				</div>
				<div className="courses__list">
					{!loading && courses?.length === 0 && (
						<Empty
							description="Không tìm thấy dữ liệu nào"
							style={{ margin: "0 auto" }}
						/>
					)}
					{loading &&
						Array(4)
							.fill("")
							.map((_, index) => (
								<div
									key={index}
									className="courses__list-item"
									style={{
										height: "50vh",
									}}
								>
									<Skeleton active />
									<br />
									<Skeleton active />
								</div>
							))}
					{courses?.length > 0 &&
						!loading &&
						courses?.map((course, index) => {
							const { id } = course;
							return <CourseItem key={id || index} course={course} />;
						})}
				</div>
			</div>
		</main>
	)
}

export default CoursePage