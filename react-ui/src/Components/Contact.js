import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <section id="contact" className="container content-section text-center">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <h2>Contact DMC</h2>
            <p>
              Feel free to email us to provide some feedback on our services,
              give us suggestions for new features or locations, or to just say
              hello!
            </p>
            <p>
              <a href="mailto:dmc@gmail.com">dmc@gmail.com</a>
            </p>
            <ul className="list-inline banner-social-buttons">
              <li>
                <a
                  href="https://twitter.com/SBootstrap"
                  className="btn btn-default btn-lg"
                >
                  <i className="fa fa-twitter fa-fw" />{" "}
                  <span className="network-name">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/IronSummitMedia/startbootstrap"
                  className="btn btn-default btn-lg"
                >
                  <i className="fa fa-github fa-fw" />{" "}
                  <span className="network-name">Github</span>
                </a>
              </li>
              <li>
                <a
                  href="https://plus.google.com/+Startbootstrap/posts"
                  className="btn btn-default btn-lg"
                >
                  <i className="fa fa-google-plus fa-fw" />{" "}
                  <span className="network-name">Google+</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
