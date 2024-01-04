import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PATHS from "./config/config-path";
import MainLayout from "./layout/MainLayout";
import Page404 from "./pages/404Page";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import CoursesOrderPage from "./pages/CourseOrderPage";
import CoursesDetailPage from "./pages/CoursesDetailPage";
import CoursePage from './pages/CoursesPage/';
import HomePage from './pages/HomePage/';
import ProfilePage from "./pages/ProfilePage";
import MyCourse from './pages/ProfilePage/MyCourse';
import MyInfo from './pages/ProfilePage/MyInfo';
import MyPayment from './pages/ProfilePage/MyPayment';

function App() {

	return (
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
	)
}

export default App;