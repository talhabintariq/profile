import React, { Component } from "react";
import { Card } from "antd";
import PropTypes from "prop-types";

export default class Porfolio extends Component {
  render() {
    const { resumeData } = this.props;

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <Card title={item.title} bordered={false} className="card">
                      <p>Card content</p>
                      <p>Card content</p>
                      <p>Card content</p>
                    </Card>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Porfolio.propTypes = {
  resumeData: PropTypes.object,
};

Porfolio.defaultProps = {
  resumeData: {},
};
