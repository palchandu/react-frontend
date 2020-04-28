import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Contact.styles';

class Contact extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Contact will mount');
  }

  componentDidMount = () => {
    console.log('Contact mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Contact will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Contact will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Contact did update');
  }

  componentWillUnmount = () => {
    console.log('Contact will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <React.Fragment>
        <section className="section " id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="text-center mx-auto section-main-title">
                            <h2>Get In <span className="font-weight-bold">Tuch</span></h2>
                            <div className="main-title-border">
                                <i className="mdi mdi-asterisk"></i>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="row mt-4 pt-4">
                    <div className="col-lg-4">
                        <div className="text-center mt-4">
                            <div>
                                <i className="mbri-mobile2 text-custom h2"></i>
                            </div>
                            <div className="mt-2">
                                <p className="mb-0 font-weight-bold">Call Us On</p>
                                <p className="text-muted">+985 123 7856</p>
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <div>
                                <i className="mbri-letter text-custom h2"></i>
                            </div>
                            <div className="mt-2">
                                <p className="mb-0 font-weight-bold">Email Us At</p>
                                <p className="text-muted">exmaple@gmail.com</p>
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <div>
                                <i className="mbri-pin text-custom h2"></i>
                            </div>
                            <div className="mt-2">
                                <p className="mb-0 font-weight-bold">Visit Office</p>
                                <p className="text-muted">202, Grasselli Street , Conway.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="contact_form">
                            <form>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group mt-2">
                                            <label for="name" className="font-weight-bold">Name</label>
                                            <input name="name" id="name" type="text" className="form-control" placeholder="Your name..." required=""/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group mt-2">
                                            <label for="email" className="font-weight-bold">Email address</label>
                                            <input name="email" id="email" type="email" className="form-control" placeholder="Your email..."  required=""/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group mt-2">
                                            <label for="subject" className="font-weight-bold">Subject</label>
                                            <input type="text" className="form-control" id="subject" placeholder="Your Subject.."  required=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group mt-2">
                                            <label for="comments" className="font-weight-bold">Message</label>
                                            <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your message..." required=""></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 text-right">
                                        <input type="submit" className="btn btn-custom" value="Send Message"/>
                                    </div>
                                </div>
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

Contact.propTypes = {
  // bla: PropTypes.string,
};

Contact.defaultProps = {
  // bla: 'test',
};

export default Contact;
