import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class About extends Component {
  render() {
    const { resumeData } = this.props;

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br />
                  <span><a href={`mailto:${resumeData.email}`} target="_blank" rel="noopener noreferrer">{resumeData.email}</a></span>
                  <br />
                  <span><a href={resumeData.github} target="_blank" rel="noopener noreferrer">{resumeData.github}</a></span>
                  <br />
                  <span><a href={resumeData.githubPage} target="_blank" rel="noopener noreferrer">{resumeData.githubPage}</a></span>
                  <br />
                  <span><a href={resumeData.website} target="_blank" rel="noopener noreferrer">{resumeData.website}</a></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

About.propTypes = {
  resumeData: PropTypes.object,
};

About.defaultProps = {
  resumeData: {},
};
