import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ContactPage from "./pages/ContactPage";
import HomePage from './pages/HomePage/';
import ProfilePage from "./pages/ProfilePage";
import MyCourse from './pages/ProfilePage/MyCourse';
import MyInfo from './pages/ProfilePage/MyInfo';
import MyPayment from './pages/ProfilePage/MyPayment';
import Page404 from "./pages/404Page";
import BlogPage from "./pages/BlogPage";
import CoursePage from './pages/CoursesPage/';
import AboutPage from "./pages/AboutPage";
import PATHS from "./config/config-path";

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path={PATHS.HOME} element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path={PATHS.PROFILE.INDEX} element={<ProfilePage />}>
						<Route index element={<MyInfo />} />
						<Route path={PATHS.PROFILE.MY_COURSE} element={<MyCourse />} />
						<Route path={PATHS.PROFILE.MY_PAYMENT} element={<MyPayment />} />
					</Route>
					<Route path={PATHS.CONTACT} element={<ContactPage />} />
					<Route path={PATHS.BLOG.INDEX} element={<BlogPage />} />
					<Route path={PATHS.COURSE.INDEX} element={<CoursePage />} />
					<Route path={PATHS.ABOUT} element={<AboutPage />} />

					<Route path="*" element={<Page404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App;