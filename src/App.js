import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./Page/About/About";
import Contact from "./Page/Contact/Contact";
import Home from "./Page/Home/Home";
import ServicesScreen from "./Page/ServicesScreen/ServicesScreen";
import ServiceDetails from "./Page/ServiceDetails/ServiceDetails";
import NavBar from "./components/NavBar/NavBar";
import Register from "./Page/Register/Register";
import Login from "./Page/Login/Login";
import NotFound from "./Page/NotFound/NotFound";
import AuthProvider from "./Contexts/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <div>
      {/* <h1>In the name of Allah</h1> */}
      <Router>
        <AuthProvider>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/about">
              <About></About>
            </PrivateRoute>
            <PrivateRoute exact path="/services">
              <ServicesScreen></ServicesScreen>
            </PrivateRoute>
            <PrivateRoute exact path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
