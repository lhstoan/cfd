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
import { courseService } from "../../services/courseService";

const HomePage = () => {

	const { data: coursesData, loading: coursesLoading } = useQuery(
		courseService.getCourses
	);

	// Modify data
	const comingCourses =
		coursesData?.courses?.filter(
			(course) => course.startDate && new Date(course.startDate) > new Date()
		) || [];

	const coursesDatas = coursesData?.courses;

	return (
		<main className="mainwrapper">
			<HeroSection />
			{/* --------------------------------CourseComingSection-------------------------------- */}
			<CourseComingSection courses={comingCourses} loading={coursesLoading} />
			<CoursesSection courses={coursesDatas} loading={coursesLoading} />
			<TeacherSection />
			<FeaturedSection />
			{/* --------------------------------Testimonial-------------------------------- */}
			<TestimonialSection />
			{/* --------------------------------faq-------------------------------- */}
			<FaqSection />
			<GallerySection />
			<RegisterSection />
		</main>
	)
}

export default HomePage