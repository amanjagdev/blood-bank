import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Screens
import Home from "./pages/Home";
import AddDonor from "./pages/AddDonor";

//Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="App">
			<Router>
				<NavBar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/adddonor" exact component={AddDonor} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
