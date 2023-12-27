import { useParams } from "react-router-dom"
import useQuery from "../../hooks/useQuery"
import { questionService } from "../../services/questionService"
import { courseService } from "../../services/courseService"
import ContentDetailSection from "./ContentDetailSection"
import CoursesRelatedSection from "./CoursesRelatedSection"
import FaqSection from "./FaqSection"
import FeaturedSection from "./FeaturedSection"
import HeaderTop from "./HeaderTop"
import HeroDetailSection from "./HeroDetailSection"
import useMutation from "../../hooks/useMutation"
import useDebounce from "../../hooks/useDebounce"
import { formatCurrency, formatDate } from "../../utils/format"
import { useEffect } from "react"
import { Roles } from "../../config/config-roles"

const CoursesDetailPage = () => {
	const params = useParams();
	const { courseSlug } = params;

	const { data: questionsData, loading: questionLoading } = useQuery(
		questionService.getQuestions
	);
	const { data: courseData, loading: courseLoading } = useQuery(
		courseService.getCourses
	);

	const {
		data: courseDetailData,
		loading: courseDetailLoading,
		execute,
	} = useMutation(courseService.getCourseBySlug);



	useEffect(() => {
		if (courseSlug) execute(courseSlug || "", {});
	}, [courseSlug]);

	// Modify data
	const questions = questionsData?.questions || [];
	const courses = courseData?.courses || [];
	const orderLink = `/course-order/` + courseSlug;

	const { teams, startDate, price } = courseDetailData || {};
	const modifiedProps = {
		...courseDetailData,
		teacherInfo: teams?.find((item) => item.tags.includes(Roles.Teacher)),
		startDate: formatDate(startDate || ""),
		price: formatCurrency(price),
		orderLink,
	};

	const apiLoading = courseDetailLoading || questionLoading || courseLoading;

	const pageLoading = useDebounce(apiLoading, 500);

	if (pageLoading) {
		// return <PageLoading />;
	}
	return (
		<>
			<HeaderTop {...modifiedProps} />
			<main className="mainwrapper coursedetailpage">
				<HeroDetailSection {...modifiedProps} />
				<ContentDetailSection {...modifiedProps} />
				<FeaturedSection {...modifiedProps} />
				<FaqSection questions={questions} loading={questionLoading} />
				<CoursesRelatedSection courses={courses} loading={courseLoading} />
			</main>
		</>
	)
}

export default CoursesDetailPage