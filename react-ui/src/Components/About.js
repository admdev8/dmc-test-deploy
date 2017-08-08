import React from "react";

class About extends React.Component {
  render() {
    return (
      <section id="about" className="container content-section text-center">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <h2>About DMC</h2>
            <p>
              DMC is a cannabis dispensary comparison application made my some
              pretty cool dudes who just want to make finding what you want
              easier.
            </p>
            <p>
              This application is designed to locate the establishemnts in your
              area.
            </p>
            <p>
              DMC gives you the freedom to build orders for pickup or delivery
              when available from anywhere.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
