import { connect } from "react-redux";
import { decrement, increment } from './store/actions';
// import component page
// const MainLayout = lazy(() => import("./layout/MainLayout"));
// const Page404 = lazy(() => import("./pages/404Page"));
// const HomePage = lazy(() => import("./pages/HomePage"));


function App(props) {
	return (
		<div>
			<h1>Counter: {props.counter}</h1>
			<button onClick={() => props.increment(10)}>Increment</button>
			<button onClick={() => props.decrement()}>Decrement</button>
		</div>
	);

	// return (
	// 	<>
	// 		<Suspense fallback={<div>Loading...</div>}>
	// 			<BrowserRouter>
	// 				<Routes>
	// 					<Route path={PATHS.HOME} element={<MainLayout />}>
	// 						<Route index element={<HomePage />} />

	// 						{/* link to error page  */}
	// 						<Route path="*" element={<Page404 />} />
	// 					</Route>
	// 				</Routes>
	// 			</BrowserRouter>
	// 		</Suspense>
	// 	</>
	// )
}

// export default App

const mapStateToProps = (state) => {
	return {
		counter: state,
	};
};

export default connect(mapStateToProps, { increment, decrement })(App);
