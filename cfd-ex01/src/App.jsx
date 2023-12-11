import { ThemeProvider, createGlobalStyle } from "styled-components";
import TodoContainer from "./component/Todo";

const cssSite = {
	fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
	bgBlack: "#242424",
	bgWhite: "#f5f5f5",
	bgGrey: "#565656",
};

const GlobalStyle = createGlobalStyle`
	body {
	font-family: ${(props) => props.theme.fontFamily};
	line-height: 1.5;
	font-weight: 400;
	color-scheme: light dark;
	color: rgba(255, 255, 255, 0.87);
	background-color: ${(props) => props.theme.bgBlack};
	max-width: 1280px;
	min-height: 100vh;
	margin: 0 auto;
	padding: 2rem;
	text-align: center;
	}
`;

function App() {
	return (
		<ThemeProvider theme={cssSite}>
			{/* css site */}
			<GlobalStyle />
			{/* end css site */}
			<TodoContainer />
		</ThemeProvider>
	);
}

export default App;
