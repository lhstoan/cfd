import { useEffect, useMemo } from "react"
import { useParams } from "react-router-dom"
import { Roles } from "../../config/config-roles"
import { useAuthContext } from "../../context/AuthContext"
import useDebounce from "../../hooks/useDebounce"
import useMutation from "../../hooks/useMutation"
import useQuery from "../../hooks/useQuery"
import { courseService } from "../../services/courseService"
import { questionService } from "../../services/questionService"
import { formatCurrency, formatDate } from "../../utils/format"
import ContentDetailSection from "./ContentDetailSection"
import CoursesRelatedSection from "./CoursesRelatedSection"
import FaqSection from "./FaqSection"
import FeaturedSection from "./FeaturedSection"
import HeaderTop from "./HeaderTop"
import HeroDetailSection from "./HeroDetailSection"

const CoursesDetailPage = () => {
	const params = useParams();
	const { courseSlug } = params;
	const { courseInfo } = useAuthContext();
	const activeCourse = courseInfo.find((item) => item?.course?.slug === courseSlug)
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
	const { teams, startDate, price, tags } = courseDetailData || {};
	const modifiedProps = useMemo(() => (
		{
			...courseDetailData,
			teacherInfo: teams?.find((item) => item.tags.includes(Roles.Teacher)),
			startDate: formatDate(startDate || ""),
			price: formatCurrency(price),
			orderLink,
			tagsJoin: tags?.map((tag) => (tag)).join(' | ')
		}
	), [courseDetailData, teams, startDate, price, tagsJoin, orderLink, Roles])

	const apiLoading = courseDetailLoading || questionLoading || courseLoading;

	const pageLoading = useDebounce(apiLoading, 500);

	if (pageLoading) {
		// return <PageLoading />;
	}
	return (
		<>
			<HeaderTop {...modifiedProps} activeCourse={activeCourse} />
			<main className="mainwrapper coursedetailpage">
				<HeroDetailSection {...modifiedProps} activeCourse={activeCourse} />
				<ContentDetailSection {...modifiedProps} />
				<FeaturedSection {...modifiedProps} />
				<FaqSection questions={questions} loading={questionLoading} />
				<CoursesRelatedSection courses={courses} loading={courseLoading} exclude={courseSlug} />
			</main>
		</>
	)
}

export default CoursesDetailPage