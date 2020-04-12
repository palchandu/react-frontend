import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './education.css';
import EducationTemplate from '../../re-usable-component/EducationComponent/index';
import ExperianceTemplate from '../../re-usable-component/ExperienceComponent/index';
import HireMe from '../HireMe/index';
//import { Test } from './Educations.styles';

class Educations extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Educations will mount');
  }

  componentDidMount = () => {
    console.log('Educations mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Educations will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Educations will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Educations did update');
  }

  componentWillUnmount = () => {
    console.log('Educations will unmount');
  }

  render () {
      const education_list=[
          {
              'year':'2010 - 2014',
              'institute':'Studied at Cambridge University',
              'about_education':'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
          },
          {
            'year':'2010 - 2014',
            'institute':'Studied at Cambridge University',
            'about_education':'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
        },
        {
            'year':'2010 - 2014',
            'institute':'Studied at Cambridge University',
            'about_education':'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
        }
      ];
      const experience_list=[
        {
            'year':'2010 - 2014',
            'company':'Studied at Cambridge University',
            'about_experience':'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
        },
        {
          'year':'2010 - 2014',
          'company':'Studied at Cambridge University',
          'about_experience':'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
      },
      {
          'year':'2010 - 2014',
          'company':'Studied at Cambridge University',
          'about_experience':'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
      }
    ]
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <React.Fragment>
        <section className="section" id="education">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="text-center mx-auto section-main-title">
                            <h2><span className="font-weight-bold">Education & Experiance</span></h2>
                            <div className="main-title-border">
                                <i className="mdi mdi-asterisk"></i>
                            </div>
                            <p className="text-muted mx-auto mt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>
                <div class="row mt-4 pt-4">
                    <div class="col-lg-5">
                        <div class="cv_edu_exp mt-3">
                        {education_list.map(item =>
                            <EducationTemplate data={item} />
                            )}
                        </div>
                    </div>
                    <div class="col-lg-5 offset-lg-2">
                        <div class="cv_edu_exp mt-3">
                        {experience_list.map(item =>
                            <ExperianceTemplate data={item} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <HireMe />

      </React.Fragment>
    );
  }
}

Educations.propTypes = {
  // bla: PropTypes.string,
};

Educations.defaultProps = {
  // bla: 'test',
};

export default Educations;
