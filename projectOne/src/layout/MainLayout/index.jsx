import Auth from "../../components/Auth"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Loading from "../../components/Loading"
import Overlay from "../../components/Overlay"


// eslint-disable-next-line react/prop-types
const MainLayout = ({children}) => {
  return (
	<>
		<Loading />
		<Header />
		<Navbar />
		<Overlay />

		{children}

		<Footer />
		<Auth />
	</>
  )
}

export default MainLayout;