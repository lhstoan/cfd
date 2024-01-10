import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import PATHS from "./config/config-path";
// import component page
const MainLayout = lazy(() => import("./layout/MainLayout"));
const PrivateRoute = lazy(() => import("./components/PrivateRoute"));
const Page404 = lazy(() => import("./pages/404Page"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CoursesOrderPage = lazy(() => import("./pages/CourseOrderPage"));
const CoursePage = lazy(() => import("./pages/CoursesPage"));
const CoursesDetailPage = lazy(() => import("./pages/CoursesDetailPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const MyCourse = lazy(() => import("./pages/ProfilePage/MyCourse"));
const MyInfo = lazy(() => import("./pages/ProfilePage/MyInfo"));
const MyPayment = lazy(() => import("./pages/ProfilePage/MyPayment"));

function App() {

	return (
		<Suspense fallback={<Loading />}>
			<BrowserRouter>
				<Routes>
					<Route path={PATHS.HOME} element={<MainLayout />}>
						<Route index element={<HomePage />} />
						<Route element={<PrivateRoute />}>
							<Route path={PATHS.PROFILE.INDEX} element={<ProfilePage />}>
								<Route index element={<MyInfo />} />
								<Route path={PATHS.PROFILE.MY_COURSE} element={<MyCourse />} />
								<Route path={PATHS.PROFILE.MY_PAYMENT} element={<MyPayment />} />
							</Route>
							<Route path={PATHS.COURSE.ORDER} element={<CoursesOrderPage />} />
						</Route>

						<Route path={PATHS.CONTACT} element={<ContactPage />} />
						<Route path={PATHS.BLOG.INDEX} element={<BlogPage />} />
						<Route path={PATHS.COURSE.INDEX} element={<CoursePage />} />
						<Route path={PATHS.COURSE.DETAIL} element={<CoursesDetailPage />} />
						<Route path={PATHS.ABOUT} element={<AboutPage />} />
						<Route path="*" element={<Page404 />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Suspense>
	)
}

export default App;