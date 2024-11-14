import React, {useState,useEffect} from "react";
import img from "../img/gallery/section_bg02.png"
import EventCard from "../Components/EventCard";
const Events = () => {
  const [events, setEvents] = useState([ ]);
  useEffect(()=>{
  const  fetchEvents = async()=>{
 try {
  
  const Response = await fetch("http://localhost:5000/events")
  const fetchData = await Response.json()
  if (Response.ok) {
    setEvents(fetchData.data)
  }

} catch (error) {
  console.log({ "Error": error })
}
    }

    fetchEvents()
  })

  return (
    <>
      <main>
        {/* Hero Start */}
        <div className="slider-area2">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 pt-20 text-center">
                    <h2>Social Events</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero End */}

        {/* Count Down Start */}
        <div
          className="count-down-area pt-25 section-bg"
         
          style={{ backgroundImage: `url(${img})` }}

        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12">
                <div className="count-down-wrapper">
                  <div className="row justify-content-between">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="single-counter text-center">
                        <span className="counter color-green">6,200</span>
                        <span className="plus">+</span>
                        <p className="color-green">Donation</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="single-counter text-center">
                        <span className="counter color-green">80</span>
                        <span className="plus">+</span>
                        <p className="color-green">Fund Raised</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="single-counter text-center">
                        <span className="counter color-green">256</span>
                        <span className="plus">+</span>
                        <p className="color-green">Donation</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="single-counter text-center">
                        <span className="counter color-green">256</span>
                        <span className="plus">+</span>
                        <p className="color-green">Donation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Count Down End */}

        {/* Featured Job Start */}
        <section
          className="featured-job-area section-padding30 section-bg2"
          data-background="assets/img/gallery/section_bg03.png"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-9 col-md-10 col-sm-12">
                <div className="section-tittle text-center mb-80">
                  <span>What We Are Doing</span>
                  <h2>We arrange many social events for charity donations</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              {events.map(
                (event, index) => (
                 <EventCard index={index} title={event.Title} date={event.Date} location={event.Location} startTime={event.startTime} endTime={event.endTime} img={event.Image} />
                )
              )}
            </div>
          </div>
        </section>
        {/* Featured Job End */}
      </main>
    </>
  );
};

export default Events;
