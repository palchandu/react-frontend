import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './About.styles';

class About extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('About will mount');
  }

  componentDidMount = () => {
    console.log('About mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('About will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('About will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('About did update');
  }

  componentWillUnmount = () => {
    console.log('About will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <React.Fragment>
        <section className="section" id="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="text-center mx-auto section-main-title">
                            <h2><span className="font-weight-bold">About </span>Me</h2>
                            <div className="main-title-border">
                                <i className="mdi mdi-asterisk"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-lg-12">

                        <div className="text-center about-detail mx-auto mt-5">
                            <h3 className="mb-3">Hello! <span className="font-weight-bold text-custom">I'M Elvish Walters.</span></h3>
                            <ul className="mb-0 list-inline text-center about-work">
                                <li className="list-inline-item mr-0 text-muted">UI/UX Designer</li>
                                <li className="list-inline-item mr-0 text-muted">Photographer</li>
                                <li className="list-inline-item mr-0 text-muted">Devloper</li>
                            </ul>
                            <p className="text-muted mt-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <div className="progress-bars skill-custom">
                            <div className="clearfix">
                                <div className="text-dark font-weight-bold float-left">Development</div>
                                <div className="text-muted float-right">80%</div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{"width": "80%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="clearfix">
                                <div className="text-dark font-weight-bold float-left">WordPress</div>
                                <div className="text-muted float-right">59%</div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{"width": "59%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="clearfix">
                                <div className="text-dark font-weight-bold float-left">Photoshop</div>
                                <div className="text-muted float-right">88%</div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{"width": "88%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="progress-bars skill-custom">
                            <div className="clearfix">
                                <div className="text-dark font-weight-bold float-left">Html</div>
                                <div className="text-muted float-right">96%</div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{"width": "86%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="clearfix">
                                <div className="text-dark font-weight-bold float-left">Css</div>
                                <div className="text-muted float-right">70%</div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{"width": "70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="clearfix">
                                <div className="text-dark font-weight-bold float-left">Asp.net</div>
                                <div className="text-muted float-right">58%</div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{"width":"58%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </React.Fragment>
    );
  }
}

About.propTypes = {
  // bla: PropTypes.string,
};

About.defaultProps = {
  // bla: 'test',
};

export default About;
