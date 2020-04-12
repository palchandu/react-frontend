import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Client.styles';

class Client extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Client will mount');
  }

  componentDidMount = () => {
    console.log('Client mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Client will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Client will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Client did update');
  }

  componentWillUnmount = () => {
    console.log('Client will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <React.Fragment>
        <section className="section bg-client" id="client">
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="text-center mx-auto text-white section-main-title">
                            <h2>Our <span className="font-weight-bold">Client</span></h2>
                            <div className="main-title-border">
                                <i className="mdi mdi-asterisk"></i>
                            </div>
                            <p className="mx-auto mt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-4 pt-4">
                    <div className="col-lg-12">
                        <div id="owl-demo" className="owl-carousel">
                            <div className="text-white people_says text-center">
                                <div className="people_icon">
                                    <i className="mbri-user"></i>                                
                                </div>
                                <div className="people_review_box mt-4">
                                    <p className="people_name text-white h5 font-weight-bold mb-0">Kirk McFall</p>
                                    <p className="h6">Google</p>
                                    <p className="people_review text-white mx-auto pt-3 mb-0">" The most well-known dummy text is the 'Lorem Ipsum', which is said originated the 16th century. This ancient dummy text is also  incomprehensible, of most European in Latin script."</p>
                                </div>
                            </div>
                            <div className="text-white people_says text-center">
                                <div className="people_icon">
                                    <i className="mbri-user"></i>                                
                                </div>
                                <div className="people_review_box mt-4">
                                    <p className="people_name text-white h5 font-weight-bold mb-0">Edward Evans</p>
                                    <p className="h6">Google</p>
                                    <p className="people_review text-white mx-auto pt-3 mb-0">" The most well-known dummy text is the 'Lorem Ipsum', which is said originated the 16th century. This ancient dummy text is also  incomprehensible, of most European in Latin script."</p>
                                </div>
                            </div>
                            <div className="text-white people_says text-center">
                                <div className="people_icon">
                                    <i className="mbri-user"></i>                                
                                </div>
                                <div className="people_review_box mt-4">
                                    <p className="people_name text-white h5 font-weight-bold mb-0">Antonio Hernandez</p>
                                    <p className="h6">Google</p>
                                    <p className="people_review text-white mx-auto pt-3 mb-0">" The most well-known dummy text is the 'Lorem Ipsum', which is said originated the 16th century. This ancient dummy text is also  incomprehensible, of most European in Latin script."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="section bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="text-center mx-auto section-main-title">
                            <h2>Trusted by <span className="font-weight-bold">Great People</span></h2>
                            <div className="main-title-border">
                                <i className="mdi mdi-asterisk"></i>
                            </div>
                            <p className="text-muted mx-auto mt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-4 pt-4">
                    <div className="col-lg-2 mt-3">
                        <div className="logo_img">
                            <img src="images/clients/1.png" alt="logo-img" className="mx-auto img-fluid d-block"/>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-3">
                        <div className="logo_img">
                            <img src="images/clients/2.png" alt="logo-img" className="mx-auto img-fluid d-block"/>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-3">
                        <div className="logo_img">
                            <img src="images/clients/3.png" alt="logo-img" className="mx-auto img-fluid d-block"/>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-3">
                        <div className="logo_img">
                            <img src="images/clients/4.png" alt="logo-img" className="mx-auto img-fluid d-block"/>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-3">
                        <div className="logo_img">
                            <img src="images/clients/5.png" alt="logo-img" className="mx-auto img-fluid d-block"/>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-3">
                        <div className="logo_img">
                            <img src="images/clients/6.png" alt="logo-img" className="mx-auto img-fluid d-block"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="text-center mx-auto section-main-title">
                            <h2><span className="font-weight-bold">Subscribe</span> to Newsletter </h2>
                            <div className="main-title-border">
                                <i className="mdi mdi-asterisk"></i>
                            </div>
                            <p className="text-muted mx-auto mt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-4 pt-4">
                    <div className="col-lg-12">
                        <div className="text-center subcribe-newslatter mt-4">
                            <form className="mx-auto position-relative">
                                <input type="text" placeholder="Email"/>
                                <button type="submit" className="btn btn-custom">Subcribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </React.Fragment>
    );
  }
}

Client.propTypes = {
  // bla: PropTypes.string,
};

Client.defaultProps = {
  // bla: 'test',
};

export default Client;
