import {BrowserRouter,Route,Routes} from "react-router-dom";
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

function App() {

	return (
		<BrowserRouter>
			<Routes >
				<Route path="/" element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path="/profile" element={<ProfilePage />}>
						<Route index element={<MyInfo />} />
						<Route path="/profile/my-course" element={<MyCourse />} />
						<Route path="/profile/my-payment" element={<MyPayment />} />
					</Route>
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/blog" element={<BlogPage />} />
					<Route path="/courses" element={<CoursePage />} />
					<Route path="/about" element={<AboutPage />} />

					<Route path="*" element={<Page404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App;