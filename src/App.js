import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer/Footer";
import Detail from "./Home/Detail";
import Home from "./Home/Home";
import MainDetail from "./Home/MainDetail";
import Register from "./Register/Register";
import SignIn from "./Register/SignIn";
import MakeNote from "./Report/MakeNote";
import MakeReport from "./Report/MakeReport";
import ScrollToTop from "./Scroll";
import Header from "./TheHeader/HeaderFile";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/:id" element={<MainDetail />} />
						<Route path="/register" element={<Register />} />
						<Route path="/signin" element={<SignIn />} />
						<Route path="/report" element={<MakeReport />} />
						<Route path="/note" element={<MakeNote />} />
					</Routes>

					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default App;
