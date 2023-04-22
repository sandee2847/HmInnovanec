import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import React, { lazy, Suspense } from 'react';
import ScrollTop from "./component/ScrollTop";
import SpinnerExample from "./component/SpinnerExample";
// import Home from "./Pages/Home/Home";
// import About from "./Pages/About/About";
// import Contact from "./Pages/Contact/ContactUs";
// import WebDesigning from "./Pages/Services/WebDesigning/WebDesigning";
// import WebDevelopment from "./Pages/Services/WebDevlopement/WebDevelopment";
// import AppDevelopment from "./Pages/Services/AppDevlopement/AppDevelopment";
// import DigitalMarketing from "./Pages/Services/DigitalMarketing/DigitalMarketing";
// import Gallery from "./Pages/Gallery/Gallery";
// import SoftwareDevlopement from "./Pages/Services/SoftwareDevlopement/SoftwareDevlopment";
// import AutomatedSystem from "./Pages/Services/AutomatedSystem/AutomatedSystem";
// import BusinessAnalysis from "./Pages/Services/BussinessAnalysis/BusinessAnalysis";
// import SocialMediaMarketing from "./Pages/Services/SocialMarketing/SocialMediaMarketing";
// import ContactUs from "./Pages/Contact/ContactUs";
// import MYBScholarship from "./Pages/MYB/MYBScholarship";
import Error from "./Pages/ErrorPage/Error";
const Home = lazy(() => import('./Pages/Home/Home'));
const About = lazy(()=>import("./Pages/About/About"))
const Contact = lazy(()=>import("./Pages/Contact/ContactUs"))
const WebDesigning  =lazy(()=>import("./Pages/Services/WebDesigning/WebDesigning"))
const WebDevelopment  =lazy(()=>import("./Pages/Services/WebDevlopement/WebDevelopment"))
const AppDevelopment  =lazy(()=>import("./Pages/Services/AppDevlopement/AppDevelopment"))
const DigitalMarketing  =lazy(()=>import("./Pages/Services/DigitalMarketing/DigitalMarketing"))
const Gallery  =lazy(()=>import("./Pages/Gallery/Gallery"))
const SoftwareDevlopement  =lazy(()=>import("./Pages/Services/SoftwareDevlopement/SoftwareDevlopment"))
const AutomatedSystem  =lazy(()=>import("./Pages/Services/AutomatedSystem/AutomatedSystem"))
const BusinessAnalysis  =lazy(()=>import("./Pages/Services/BussinessAnalysis/BusinessAnalysis"))
const SocialMediaMarketing  =lazy(()=>import("./Pages/Services/SocialMarketing/SocialMediaMarketing"))
const ContactUs  =lazy(()=>import("./Pages/Contact/ContactUs"))
const MYBScholarship  =lazy(()=>import("./Pages/MYB/MYBScholarship"))


export default function App() {
    return (
        <Router>
            <Suspense fallback={<SpinnerExample />}>
            <ScrollTop />
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/home" element={<Home />}></Route>
                    <Route exact path="/about" element={<About />}></Route>
                    <Route exact path="/contactUs" element={<ContactUs />}></Route>
                    <Route exact path="/webDesigning" element={<WebDesigning />}></Route>
                    <Route exact path="/webDevelopment" element={<WebDevelopment />}></Route>
                    <Route exact path="/appDevelopment" element={<AppDevelopment />}></Route>
                    <Route exact path="/softwareDevelopment" element={<SoftwareDevlopement />}></Route>
                    <Route exact path="/digitalMarketing" element={<DigitalMarketing />}></Route>
                    <Route exact path="/automatedSystem" element={<AutomatedSystem />}></Route>
                    <Route exact path="/businessAnalysis" element={<BusinessAnalysis />}></Route>
                    <Route exact path="/socialMediaMarketing" element={<SocialMediaMarketing />}></Route>
                    <Route exact path="/gallery" element={<Gallery />}></Route>
                    <Route exact path="/mYBScholarship" element={<MYBScholarship />}></Route>
                    <Route exact path="/*" element={<Error />}></Route>
                </Routes>
            </Suspense>
        </Router>
    );

}
