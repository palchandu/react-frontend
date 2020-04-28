import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Footer.styles';

const Footer = (props) => (
  <React.Fragment>
    <section className="bg-light">
            <div className="container">
                <div className="row pt-4 pb-4">
                    <div className="col-lg-12">
                        <div className="float-left float_none mt-2 mb-2">
                          <p className="copy-rights text-muted mb-0">{props.data.footer_content}</p>
                        </div>
                        <div className="float-right float_none mt-2 mb-2">
                            <ul className="list-inline fot_social mb-0">
                                <li className="list-inline-item"><a target="_blank" href={props.data.social_content.facebook} className="social-icon text-muted"><i className="mdi mdi-facebook"></i></a></li>
                                <li className="list-inline-item"><a target="_blank" href={props.data.social_content.twitter} className="social-icon text-muted"><i className="mdi mdi-twitter"></i></a></li>
                                <li className="list-inline-item"><a target="_blank" href={props.data.social_content.linkedin} className="social-icon text-muted"><i className="mdi mdi-linkedin"></i></a></li>
                                <li className="list-inline-item"><a target="_blank" href={props.data.social_content.youtube} className="social-icon text-muted"><i className="mdi mdi-youtube-play"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <a href="#" className="back_top"> <i className="mbri-arrow-up"> </i> </a>
  </React.Fragment>
);

Footer.propTypes = {
  // bla: PropTypes.string,
};

Footer.defaultProps = {
  // bla: 'test',
};

export default Footer;
