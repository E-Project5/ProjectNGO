import React from 'react'

const EventCard = (props) => {
  return (
    <>
      <div className="col-lg-9 col-md-12" >
        <div className="single-job-items mb-30">
          <div className="job-items">
            <div className="company-img">
              <a href="#">
                <img
                  className='img-thumbnail'
                  style={{maxWidth:"200px"}}
                  src={props.img}
                  alt=""
                />
              </a>
            </div>
            <div className="job-tittle">
              <a href="#">
                <h4> {props.title}</h4>
              </a>
              <ul>
                <li>
                  <i className="far fa-clock"></i> {props.startTime}- {props.endTime}
                </li>
                <li>
                  <i className="fas fa-sort-amount-down"></i>
                  {props.date}
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  {props.location}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventCard
