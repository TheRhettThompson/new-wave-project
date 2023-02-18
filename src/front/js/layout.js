import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import AboutUs from "./pages/aboutUs";
import Jobs from "./pages/jobs";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ContactUs from "./pages/ContactUs";
import TermsOfServicePrivacy from "./pages/termsOfServicePrivacy";
import Favorites from "./pages/Favorites";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import Navbar from "./component/navbar";
import Footer from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            {/* <Route element={<Home />} path="/" /> */}
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
            <Route path="/" element={<Landing />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/landing" element={<Landing />} />
            <Route exact path="/jobs" element={<Jobs />} />
            <Route exact path="/contactus" element={<ContactUs />} />
            <Route
              exact
              path="/termsofserviceprivacy"
              element={<TermsOfServicePrivacy />}
            />
            <Route exact path="/favorites" element={<Favorites />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
