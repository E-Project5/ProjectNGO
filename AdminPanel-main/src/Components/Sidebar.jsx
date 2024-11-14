import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.div`
  height: 100vh; /* Set height to full viewport */
  overflow-y: auto; /* Enable vertical scrolling */

  /* Scrollbar styles */
  &::-webkit-scrollbar {
    width: 8px; /* Width of the scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    background: #888; /* Color of the scrollbar thumb */
    border-radius: 4px; /* Rounded edges for the scrollbar thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* Color on hover */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* Background of the scrollbar track */
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer className="quixnav">
      <div className="quixnav-scroll">
        <ul className="metismenu" id="menu">
          <hr />
          
          <li className="nav-label first">Navbar</li>
          <li>
            <NavLink to="/" aria-expanded="false">
              <i className="icon icon-single-04"></i>
              <span className="nav-text">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/logo" aria-expanded="false">
              <i className="icon"></i>
              <span className="nav-text">Logo</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/favicon" aria-expanded="false">
              <i className="icon"></i>
              <span className="nav-text">Favicon</span>
            </NavLink>
          </li>
          <hr />
          <li className="nav-label first">Footer</li>
          <li>
            <NavLink to="/footer" aria-expanded="false">
              <i className="icon icon-single-04"></i>
              <span className="nav-text">Social Media</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Copyright" aria-expanded="false">
              <i className="icon icon-single-04"></i>
              <span className="nav-text">Copyright</span>
            </NavLink>
          </li>
          <li className="nav-label first">Home Page</li>
          <li>
            <NavLink to="/slider" aria-expanded="false">
              <i className="icon icon-single-04"></i>
              <span className="nav-text">Home Page</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/meta" aria-expanded="false">
              <i className="icon icon-single-04"></i>
              <span className="nav-text">Meta</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/schedule" aria-expanded="false">
              <i className="icon icon-single-04"></i>
              <span className="nav-text">Schedule</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/QuickLinks" aria-expanded="false">
              <i className="icon icon-single-04"></i>
              <span className="nav-text">QuickLinks</span>
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/speaker" aria-expanded="false">
              <i className="icon icon-single-04"></i>
              <span className="nav-text">Speakers</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/testimonial" aria-expanded="false">
              <i className="icon icon-single-04"></i>
              <span className="nav-text">Testimonial</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/welcome" aria-expanded="false">
              <i className="icon icon-single-04"></i>
              <span className="nav-text">Welcome</span>
            </NavLink>
          </li>
          <hr style={{ color: "white" }} />
          <li className="nav-label first">Schedule</li>
          <li>
            <NavLink to="/Meta" aria-expanded="false">
              <i className="icon icon-single-04"></i>
              <span className="nav-text">Meta Information</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/EventDates" aria-expanded="false">
              <i className="icon icon-single-04"></i>
              <span className="nav-text">Event Date</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/EventManagement" aria-expanded="false">
              <i className="icon icon-single-04"></i>
              <span className="nav-text">Event Management</span>
            </NavLink>
          </li>

          {/* About */}
          <hr style={{ color: "white" }} />
          <li className="nav-label first">About</li>
          <li>
            <NavLink to="/About" aria-expanded="false">
              <i className="icon icon-single-04"></i>
              <span className="nav-text">About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Organizers" aria-expanded="false">
              <i className="icon icon-single-04"></i>
              <span className="nav-text">Organizers</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Attendees" aria-expanded="false">
              <i className="icon icon-single-04"></i>
              <span className="nav-text">Attendees</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
