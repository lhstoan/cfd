import HeaderAuth from "./HeaderAuth";
import HeaderLogo from "./HeaderLogo";
import HeaderHumburger from "./HeaderHumburger";

const Header=() => {

	return (
		<header className="header --transparent">
			<div className="container-fluid">
				<HeaderHumburger />
				<HeaderLogo />
				<HeaderAuth />
			</div>
		</header>
	)
}

export default Header