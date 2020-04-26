import React, { Component } from 'react';
import { Progress } from 'antd';
import PropTypes from 'prop-types';

export default class Resume extends Component {
  render() {
    const { resumeData } = this.props;

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education
              && resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{' '}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Certifications</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.certifications
              && resumeData.certifications.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CertificationName}</h3>
                      <p className="info">
                        {item.exams.map((exam) => {
                          return (
                            <p>{exam} <br /></p>
                          );
                        })}
                        <span>&bull;</span>{' '}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        {/* <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work
              && resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{' '}
                        <em className="date">
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>  */}

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {/* <p>{resumeData.skillsDescription}</p> */}
            <div className="bars">
              <ul className="skills">
                {resumeData.skills
                  && resumeData.skills.map((item) => {
                    return (
                      <>
                        <span className={`${item.skillname.toLowerCase()}`} />
                        <em>{item.skillname}</em>
                        <Progress percent={item.percent} format={() => ''} /> 
                      </>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Resume.propTypes = {
  resumeData: PropTypes.object,
};

Resume.defaultProps = {
  resumeData: {},
};
