// import React from "react";

// import { Link } from "react-router-dom";

// //sidebar import
// import Sidebar from "../Components/Sidebar";
// import Navheader from "../Components/Navheader";
// import Header from "../Components/Header"
// import Footer from "../Components/Footer"
// const Dashboard = () => {
//   return (
//     <>
  
//       {/* <!--**********************************
//         Main wrapper start
//     ***********************************--> */}
//       <div id="main-wrapper" />

//       {/* <!--**********************************
//             Nav header start
//         ***********************************--> */}
//  <Navheader/>
//       {/* </div> */}
//       {/* <!--**********************************
//             Nav header end
//         ***********************************-->

//         <!--**********************************
//             Header start
//         ***********************************--> */}
//      <Header/>
//       {/* <!--**********************************
//             Header end ti-comment-alt
//         ***********************************-->

//         <!--**********************************
//             Sidebar start
//         ***********************************--> */}
//      <Sidebar/>
//       {/* <!--**********************************
//             Sidebar end
//         ***********************************-->

//         <!--**********************************
//             Content body start
//         ***********************************--> */}
//       <div className="content-body">
//         <div className="container-fluid">
//           <div className="row page-titles mx-0">
//             <div className="col-sm-6 p-md-0">
//               <div className="welcome-text">
//                 <h4>Hi, welcome back!</h4>
//                 <p className="mb-0">Your business dashboard template</p>
//               </div>
//             </div>
//             <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
//               <ol className="breadcrumb">
//                 <li className="breadcrumb-item">
//                   <Link to="javascript:void(0)">Layout</Link>
//                 </li>
//                 <li className="breadcrumb-item active">
//                   <Link to="javascript:void(0)">Blank</Link>
//                 </li>
//               </ol>
//             </div>
//           </div>

//           <div className="row">
//             <div className="col-lg-3 col-sm-6">
//               <div className="card">
//                 <div className="stat-widget-one card-body">
//                   <div className="stat-icon d-inline-block">
//                     <i className="ti-money text-success border-success"></i>
//                   </div>
//                   <div className="stat-content d-inline-block">
//                     <div className="stat-text">Profit</div>
//                     <div className="stat-digit">1,012</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-3 col-sm-6">
//               <div className="card">
//                 <div className="stat-widget-one card-body">
//                   <div className="stat-icon d-inline-block">
//                     <i className="ti-user text-primary border-primary"></i>
//                   </div>
//                   <div className="stat-content d-inline-block">
//                     <div className="stat-text">Customer</div>
//                     <div className="stat-digit">961</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-3 col-sm-6">
//               <div className="card">
//                 <div className="stat-widget-one card-body">
//                   <div className="stat-icon d-inline-block">
//                     <i className="ti-layout-grid2 text-pink border-pink"></i>
//                   </div>
//                   <div className="stat-content d-inline-block">
//                     <div className="stat-text">Projects</div>
//                     <div className="stat-digit">770</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-3 col-sm-6">
//               <div className="card">
//                 <div className="stat-widget-one card-body">
//                   <div className="stat-icon d-inline-block">
//                     <i className="ti-link text-danger border-danger"></i>
//                   </div>
//                   <div className="stat-content d-inline-block">
//                     <div className="stat-text">Referral</div>
//                     <div className="stat-digit">2,781</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
         
        
         
//         </div>
//       </div>
//       {/* <!--**********************************
//             Content body end
//         ***********************************--> */}

//       {/* </div> */}

//       <Footer/>
//     </>
//   );
// };

// export default Dashboard;
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row page-titles mx-0">
          <div className="col-sm-6 p-md-0">
            <div className="welcome-text">
              <h4>Hi, welcome back!</h4>
              <p className="mb-0">Your business dashboard template</p>
            </div>
          </div>
          <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="javascript:void(0)">Layout</Link>
              </li>
              <li className="breadcrumb-item active">
                <Link to="javascript:void(0)">Blank</Link>
              </li>
            </ol>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="card">
              <div className="stat-widget-one card-body">
                <div className="stat-icon d-inline-block">
                  <i className="ti-money text-success border-success"></i>
                </div>
                <div className="stat-content d-inline-block">
                  <div className="stat-text">Profit</div>
                  <div className="stat-digit">1,012</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card">
              <div className="stat-widget-one card-body">
                <div className="stat-icon d-inline-block">
                  <i className="ti-user text-primary border-primary"></i>
                </div>
                <div className="stat-content d-inline-block">
                  <div className="stat-text">Customer</div>
                  <div className="stat-digit">961</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card">
              <div className="stat-widget-one card-body">
                <div className="stat-icon d-inline-block">
                  <i className="ti-layout-grid2 text-pink border-pink"></i>
                </div>
                <div className="stat-content d-inline-block">
                  <div className="stat-text">Projects</div>
                  <div className="stat-digit">770</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card">
              <div className="stat-widget-one card-body">
                <div className="stat-icon d-inline-block">
                  <i className="ti-link text-danger border-danger"></i>
                </div>
                <div className="stat-content d-inline-block">
                  <div className="stat-text">Referral</div>
                  <div className="stat-digit">2,781</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
