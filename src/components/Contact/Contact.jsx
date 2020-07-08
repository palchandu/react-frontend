import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Contact.styles';
import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from '../../library/TextValidator';
import TextAreaValidator from '../../library/TextAreaValidator';
import Service from '../../api_services/api_services';
import swal from 'sweetalert';
//Loader import
import Loader from '../Loader';
class Contact extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      name:'',
      email:'',
      subject:'',
      message:'',
      call_us:'',
      email_us:'',
      visit_us:'',
      isLoading: true
    };
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({[e.target.name]:e.target.value});
  }
  addEnquiry(e){
    e.preventDefault();
    var data={
        enquiry:{
            name:this.state.name,
            email:this.state.email,
            subject:this.state.subject,
            message:this.state.message
        }
    }
    this.saveEnquiry(data);
  }

  saveEnquiry(data){
    Service.addEnquiry(data).then((response)=>{
        console.log(response);
        if(response.data.success==true){
            swal("Thank You!", response.data.message, "success");
        }else{
            swal("Thank You!", response.data.message, "success");
        }
    }).catch((error)=>{
        swal("Error!", error, "error");
    })
  }
  allInfo(){
    Service.getContactDetails().then((response)=>{
      console.log('99999999999999999999',response);
        if(response.data.success==true){
           this.setState({
            call_us:response.data.data.call_us,
            email_us:response.data.data.email_us,
            visit_us:response.data.data.visit_us,
            isLoading:false
        });
        }
    }).catch((error)=>{
        console.log(error)
    })
}

  componentWillMount = () => {
    console.log('Contact will mount');
  }

  componentDidMount = () => {
    console.log('Contact mounted');
    this.allInfo();
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
    if(this.state.isLoading){
      return(
        <Loader />
      )
    }else{
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
                                <p className="text-muted">{this.state.call_us}</p>
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <div>
                                <i className="mbri-letter text-custom h2"></i>
                            </div>
                            <div className="mt-2">
                                <p className="mb-0 font-weight-bold">Email Us At</p>
                                <p className="text-muted">{this.state.email_us}</p>
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <div>
                                <i className="mbri-pin text-custom h2"></i>
                            </div>
                            <div className="mt-2">
                                <p className="mb-0 font-weight-bold">Visit Office</p>
                                <p className="text-muted">{this.state.visit_us}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="contact_form">
                            <ValidatorForm  ref="form" onSubmit={this.addEnquiry.bind(this)} >
                                <div className="row">
                                    <div className="col-lg-6 form-group">
                                    <label htmlFor="name" className="font-weight-bold">Name</label>
                                        <TextValidator 
                                            name="name"
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                            validators={['required','minStringLength:5']}
                                            errorMessages={['this field is required', 'minimum length will be 5 character']}
                                            className="form-control mt-2"
                                            placeholder="Your name..."
                                         />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                    <label htmlFor="email" className="font-weight-bold">Email address</label>
                                    <TextValidator 
                                            name="email"
                                            onChange={this.handleChange}
                                            value={this.state.email}
                                            validators={['required','isEmail']}
                                            errorMessages={['this field is required', 'email is not valid']}
                                            className="form-control mt-2"
                                            placeholder="Your email..."
                                    />
                                    </div>
                                    <div className="col-lg-12 form-group">
                                    <label htmlFor="subject" className="font-weight-bold">Subject</label>
                                    <TextValidator 
                                            name="subject"
                                            onChange={this.handleChange}
                                            value={this.state.subject}
                                            validators={['required','minStringLength:10']}
                                            errorMessages={['this field is required', 'minimum length will be 10 character']}
                                            className="form-control mt-2"
                                            placeholder="Your Subject.."
                                    />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 form-group">
                                        <label htmlFor="comments" className="font-weight-bold">Message</label>
                                        <TextAreaValidator 
                                            name="message"
                                            onChange={this.handleChange}
                                            value={this.state.message}
                                            validators={['required','minStringLength:100']}
                                            errorMessages={['this field is required', 'minimum length will be 100 character']}
                                            className="form-control mt-2"
                                            placeholder="Your Messages.."
                                    />
                                            
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 text-right">
                                        <input type="submit" className="btn btn-custom" value="Send Message"/>
                                    </div>
                                </div>
                            </ValidatorForm>
                        </div> 
                    </div>
                </div>                          
            </div>
        </section> 
      </React.Fragment>
    );
  }
 }
}

Contact.propTypes = {
  // bla: PropTypes.string,
};

Contact.defaultProps = {
  // bla: 'test',
};

export default Contact;
