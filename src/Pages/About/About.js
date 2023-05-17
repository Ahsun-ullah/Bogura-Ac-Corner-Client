import React from "react";
import PageTitle from "../Shared/PageTitle/PageTitle";

const About = () => {
  const handleClick = () => {
    <link rel="stylesheet" href="home#experts" />;
    console.log("clicked");
  };
  return (
    <div className="container">
      <PageTitle title="About"></PageTitle>
      <div className="row">
        <div className="col mb-4">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            pretium sem at sapien interdum, eget venenatis lectus feugiat.
            Suspendisse ut orci eu velit scelerisque ullamcorper at vitae
            turpis. Etiam vehicula finibus velit ut posuere. Sed eget luctus
            eros. Nam euismod euismod nisi vel placerat. In sit amet nulla
            ipsum. Pellentesque auctor eleifend semper.
          </p>
          <p>
            Our company was founded in 2020 with the goal of creating innovative
            solutions to complex problems. We specialize in developing custom
            software applications for businesses of all sizes.
          </p>
          <p>
            Our team is comprised of experienced developers, designers, and
            project managers who work together to deliver high-quality products
            that meet our clients' needs. We pride ourselves on our ability to
            communicate effectively with our clients and understand their unique
            requirements.
          </p>
          <p>
            If you're interested in working with us, please don't hesitate to.
            We'd be happy to discuss your project and provide you with a free
            consultation.
          </p>
          <button variant="link" onClick={handleClick}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
