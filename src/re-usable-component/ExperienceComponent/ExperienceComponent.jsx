import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ExperienceComponent.styles';

const ExperienceComponent = (props) => (
  <React.Fragment>
    <div class="cv_edu_exp_box mt-4">
        <div class="row">
            <div class="col-lg-12">
              <div class="cv_edu_exp_year font-weight-bold text-custom position-relative">{props.data.year}</div>
                <div class="cb_edu_exp_detail">
                    <h4>{props.data.company}</h4>
                    <p class="cv_desc mb-0">{props.data.about_experience}</p>
                </div>
            </div>
        </div>
    </div>
  </React.Fragment>
);

ExperienceComponent.propTypes = {
  // bla: PropTypes.string,
};

ExperienceComponent.defaultProps = {
  // bla: 'test',
};

export default ExperienceComponent;
