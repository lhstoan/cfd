import Auth from "../../components/Auth"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Loading from "../../components/Loading"
import Overlay from "../../components/Overlay"
import {Outlet} from "react-router-dom"


// eslint-disable-next-line react/prop-types
const MainLayout = () => {
  return (
	<>
		<Loading />
		<Header />
		<Navbar />
		<Overlay />

		<Outlet/>

		<Footer />
		<Auth />
	</>
  )
}

export default MainLayout;