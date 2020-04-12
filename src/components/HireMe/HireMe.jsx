import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './HireMe.styles';

const HireMe = (props) => (
  <React.Fragment>
    <section className="section bg-cta">
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center text-white">
                            <h1>I Am Available For Freelancer.</h1>
                            <div className="mt-4">
                                <a href="#" className="btn btn-outline-custom">Hire Me!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </React.Fragment>
);

HireMe.propTypes = {
  // bla: PropTypes.string,
};

HireMe.defaultProps = {
  // bla: 'test',
};

export default HireMe;
