import React, { Component } from "react";

class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5 text-primary font-weight-black">
          <h1 className="display-4 font-weight-bold">404</h1>
          <h2 className="display-4 font-weight-bold">Error</h2>
          <h2 className="display-4 font-weight-bold">Page not found</h2>
          <h3 className="display-4 font-weight-bold">
            The requested Url
            <br />
            <span className="text-danger font-weight-bold">
              {this.props.location.pathname}
            </span>
            <br />
            &nbsp; was not found
          </h3>
        </div>
      </div>
    );
  }
}

export default Default;
