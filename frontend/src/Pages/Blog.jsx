import React from "react";

const Blog = () => {
  return (
    <main>
      {/* Hero Section */}
      <div className="slider-area2">
        <div className="slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap hero-cap2 pt-70 text-center">
                  <h2>Blog</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <section className="blog_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="blog_left_sidebar">
                {[
                  {
                    imgSrc: "single_blog_1.png",
                    title: "Google inks pact for new 35-storey office",
                    date: "15 Jan",
                    category: "Travel, Lifestyle",
                    comments: 3,
                  },
                  {
                    imgSrc: "single_blog_2.png",
                    title: "Google inks pact for new 35-storey office",
                    date: "15 Jan",
                    category: "Travel, Lifestyle",
                    comments: 3,
                  },
                  {
                    imgSrc: "single_blog_3.png",
                    title: "Google inks pact for new 35-storey office",
                    date: "15 Jan",
                    category: "Travel, Lifestyle",
                    comments: 3,
                  },
                  {
                    imgSrc: "single_blog_4.png",
                    title: "Google inks pact for new 35-storey office",
                    date: "15 Jan",
                    category: "Travel, Lifestyle",
                    comments: 3,
                  },
                  {
                    imgSrc: "single_blog_5.png",
                    title: "Google inks pact for new 35-storey office",
                    date: "15 Jan",
                    category: "Travel, Lifestyle",
                    comments: 3,
                  },
                ].map((blog, index) => (
                  <article className="blog_item" key={index}>
                    <div className="blog_item_img">
                      <img
                        className="card-img rounded-0"
                        src={`assets/img/blog/${blog.imgSrc}`}
                        alt=""
                      />
                      <a href="#" className="blog_item_date">
                        <h3>{blog.date.split(" ")[0]}</h3>
                        <p>{blog.date.split(" ")[1]}</p>
                      </a>
                    </div>
                    <div className="blog_details">
                      <a className="d-inline-block" href="blog_details.html">
                        <h2 className="blog-head" style={{ color: "#2d2d2d" }}>
                          {blog.title}
                        </h2>
                      </a>
                      <p>
                        That dominion stars lights dominion divide years for
                        fourth have don't stars is that he earth it first
                        without heaven in place seed it second morning saying.
                      </p>
                      <ul className="blog-info-link">
                        <li>
                          <a href="#">
                            <i className="fa fa-user"></i> {blog.category}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-comments"></i> {blog.comments}{" "}
                            Comments
                          </a>
                        </li>
                      </ul>
                    </div>
                  </article>
                ))}
                {/* Pagination */}
                <nav className="blog-pagination justify-content-center d-flex">
                  <ul className="pagination">
                    <li className="page-item">
                      <a href="#" className="page-link" aria-label="Previous">
                        <i className="ti-angle-left"></i>
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      <a href="#" className="page-link">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link" aria-label="Next">
                        <i className="ti-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                  <form action="#">
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search Keyword"
                        />
                        <div className="input-group-append">
                          <button className="btns" type="button">
                            <i className="ti-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </aside>

                <aside className="single_sidebar_widget post_category_widget">
                  <h4 className="widget_title" style={{ color: "#2d2d2d" }}>
                    Category
                  </h4>
                  <ul className="list cat-list">
                    {[
                      "Restaurant food (37)",
                      "Travel news (10)",
                      "Modern technology (03)",
                      "Product (11)",
                      "Inspiration (21)",
                      "Health Care (21)",
                    ].map((category, index) => (
                      <li key={index}>
                        <a href="#" className="d-flex">
                          <p>{category.split(" ")[0]}</p>
                          <p>{category.split(" ")[1]}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </aside>

                {/* Popular Posts */}
                <aside className="single_sidebar_widget popular_post_widget">
                  <h3 className="widget_title" style={{ color: "#2d2d2d" }}>
                    Recent Post
                  </h3>
                  {[
                    {
                      imgSrc: "post_1.png",
                      title: "From life was you fish...",
                      date: "January 12, 2019",
                    },
                    {
                      imgSrc: "post_2.png",
                      title: "The Amazing Hubble",
                      date: "02 Hours ago",
                    },
                    {
                      imgSrc: "post_3.png",
                      title: "Astronomy Or Astrology",
                      date: "03 Hours ago",
                    },
                    {
                      imgSrc: "post_4.png",
                      title: "Asteroids telescope",
                      date: "01 Hours ago",
                    },
                  ].map((post, index) => (
                    <div className="media post_item" key={index}>
                      <img src={`assets/img/post/${post.imgSrc}`} alt="post" />
                      <div className="media-body">
                        <a href="blog_details.html">
                          <h3 style={{ color: "#2d2d2d" }}>{post.title}</h3>
                        </a>
                        <p>{post.date}</p>
                      </div>
                    </div>
                  ))}
                </aside>

                {/* Tag Clouds */}
                <aside className="single_sidebar_widget tag_cloud_widget">
                  <h4 className="widget_title" style={{ color: "#2d2d2d" }}>
                    Tag Clouds
                  </h4>
                  <ul className="list">
                    {[
                      "project",
                      "love",
                      "technology",
                      "travel",
                      "restaurant",
                      "life style",
                      "design",
                      "illustration",
                    ].map((tag, index) => (
                      <li key={index}>
                        <a href="#">{tag}</a>
                      </li>
                    ))}
                  </ul>
                </aside>

                {/* Instagram Feeds */}
                <aside className="single_sidebar_widget instagram_feeds">
                  <h4 className="widget_title" style={{ color: "#2d2d2d" }}>
                    Instagram Feeds
                  </h4>
                  <ul className="instagram_row flex-wrap">
                    {[
                      "post_5.png",
                      "post_6.png",
                      "post_7.png",
                      "post_8.png",
                    ].map((imgSrc, index) => (
                      <li key={index}>
                        <a href="#">
                          <img
                            className="img-fluid"
                            src={`assets/img/post/${imgSrc}`}
                            alt=""
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
