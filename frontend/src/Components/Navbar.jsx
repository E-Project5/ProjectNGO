import React , {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [OldLogo, setOldLogo] = useState(null);

  useEffect(()=>{
    const GetLogo=async()=>{
  try {
  const Response = await fetch("http://localhost:5000/logo")
  const fetchData = await Response.json()
  console.log(fetchData.data)
  if (Response.ok) {
    setOldLogo(fetchData.data[0].Logo)
    
  }
  
  } catch (error) {
    console.log(error)
  }  }
    GetLogo()
  })
  return (
    
    <>
      <header>
        {/* <!-- Header Start --> */}
        <div class="header-area">
          <div class="main-header ">
            {/* <div class="header-top d-none d-lg-block">
                    <div class="container-fluid">
                        <div class="col-xl-12">
                            <div class="row d-flex justify-content-between align-items-center">
                                <div class="header-info-left d-flex">
                                    <ul>     
                                        <li>Phone: +99 (0) 101 0000 888</li>
                                        <li>Email: noreply@yourdomain.com</li>
                                    </ul>
                                    <div class="header-social">    
                                        <ul>
                                            <li><a to="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a  to="https://www.facebook.com/sai4ull"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a to="#"><i class="fab fa-linkedin-in"></i></a></li>
                                            <li> <a to="#"><i class="fab fa-google-plus-g"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="header-info-right d-flex align-items-center">
                                    <div class="select-this">
                                        <form action="#">
                                            <div class="select-itms">
                                                <select name="select" id="select1">
                                                    <option value="">English</option>
                                                    <option value="">Bangla</option>
                                                    <option value="">Arabic</option>
                                                    <option value="">Hindi</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                    <ul class="contact-now">     
                                        <li><a to="#">Subscribe Now</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            <div class="header-bottom  header-sticky">
              <div class="container-fluid">
                <div class="row align-items-center">
                  {/* <!-- Logo --> */}
                  <div class="col-xl-2 col-lg-2">
                    <div class="logo">
                      <Link to="/">
                        <img src={OldLogo} alt="" />
                      </Link>
                    </div>
                  </div>
                  <div class="col-xl-10 col-lg-10">
                    <div class="menu-wrapper  d-flex align-items-center justify-content-end">
                      {/* <!-- Main-menu --> */}
                      <div class="main-menu d-none d-lg-block">
                        <nav>
                          <ul id="navigation">
                            <li>
                              <Link to="/">Home</Link>
                            </li>
                            <li>
                              <Link to="/About">About</Link>
                            </li>
                            <li>
                              <Link to="/Program">latest causes</Link>
                            </li>
                            <li>
                              <Link to="/Events">social events </Link>
                            </li>
                            <li>
                              <Link to="Blog">Blog</Link>
                              <ul class="submenu">
                                <li>
                                  <Link to="Blog">Blog</Link>
                                </li>
                                <li>
                                  <Link to="/Blogdetail">Blog Details</Link>
                                </li>
                                <li>
                                  <Link to="/Element">Element</Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to="/contact">Contact</Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      {/* <!-- Header-btn --> */}
                      <div class="header-right-btn d-none d-lg-block ml-20">
                        <a to="contact.html" class="btn header-btn">
                          Donate
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Mobile Menu --> */}
                  <div class="col-12">
                    <div class="mobile_menu d-block d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Header End --> */}
      </header>
    </>
  );
}

export default Navbar
