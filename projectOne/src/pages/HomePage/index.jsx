import HeroSection from "./HeroSection";
import CourseComingSection from "./CourseComingSection";
import CoursesSection from "./CoursesSection";
import TeacherSection from "./TeacherSection";
import FeaturedSection from "./FeaturedSection";
import TestimonialSection from "./TestimonialSection";
import FaqSection from "./FaqSection";
import GallerySection from "./GallerySection";
import RegisterSection from "./RegisterSection";
import useQuery from "../../hooks/useQuery";
import {courseService} from "../../services/courseService";
import {teamService} from './../../services/teamService';
import {questionService} from './../../services/questionService';
import {galleryService} from './../../services/galleryService';

const HomePage=() => {

	const {data: coursesData,loading: coursesLoading}=useQuery(
		courseService.getCourses
	);

	const coursesList=coursesData?.courses;
	// Modify data
	const comingCourses=
		coursesData?.courses?.filter(
			(course) => course.startDate&&new Date(course.startDate)>new Date()
		)||[];

	const {data: teacherData,loading: TeacherLoading}=useQuery(
		teamService.getTeams
	);
	const teachers=teacherData?.teams||[];

	const {data: questionsData,loading: questionsLoading}=useQuery(
		questionService.getQuestions
	);
	const questions=questionsData?.questions||[];

	const {data: galleriesData,loading: galleriesLoading}=useQuery(
		galleryService.getGalleries
	);
	const galleries=galleriesData?.galleries?.[0]?.images||[];

	return (
		<main className="mainwrapper">
			<HeroSection />
			{/* --------------------------------CourseComingSection-------------------------------- */}
			<CourseComingSection data={comingCourses} loading={coursesLoading} />
			<CoursesSection data={coursesList} loading={coursesLoading} />
			<TeacherSection data={teachers} loading={TeacherLoading} />
			<FeaturedSection />
			{/* --------------------------------Testimonial-------------------------------- */}
			<TestimonialSection />
			{/* --------------------------------faq-------------------------------- */}
			<FaqSection data={questions} loading={questionsLoading} />
			<GallerySection data={galleries} loading={galleriesLoading} />
			<RegisterSection />
		</main>
	)
}

export default HomePage