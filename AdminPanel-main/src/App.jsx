import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./Pages/Main";
// Pages
import Dashboard from "./Pages/Dashboard";
import Copyright from "./Pages/Copyright";
import Favicon from "./Pages/Favicon";
import FooterPage from "./Pages/Footer";
import Logo from "./Pages/Logo";
import Meta from "./Pages/Meta";
import QuickLinks from "./Pages/QuickLinks";
import Schedule from "./Pages/Schedule";
import Slider from "./Pages/Slider";
import Speaker from "./Pages/Speaker";
import Testimonal from "./Pages/Testimonal";
import Welcome from "./Pages/Welcome";
import EventManagment from "./Pages/EventManagement"
import EventDates from "./Pages/EventDates"
const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Dashboard />} />
          <Route path="/copyright" element={<Copyright />} />
          <Route path="/favicon" element={<Favicon />} />
          <Route path="/footer" element={<FooterPage />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/meta" element={<Meta />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/QuickLinks" element={<QuickLinks />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/speaker" element={<Speaker />} />
          <Route path="/testimonial" element={<Testimonal />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/EventManagement" element={<EventManagment />} />
          <Route path="/EventDates" element={<EventDates />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;