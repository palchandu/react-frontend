import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './About.styles';
import ApiServices from '../../api_services/api_services';
//Loader import
import Loader from '../Loader';

class About extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      about_title:'',
      about_intro:'',
      about_details:'',
      skills_percent:[],
      isLoading: true
    };
  }

  webAllInfo(){
    ApiServices.getWebsiteInfo().then((response)=>{
        if(response.data.success==true){
           this.setState({
            skills_percent:response.data.data.about.skills_percent,
            about_details:response.data.data.about.about_details,
            about_intro:response.data.data.about.about_intro,
            about_title:response.data.data.about.about_title,
            isLoading:false
        });
        }
        console.log('ddddddd',this.state.work_list);
    }).catch((error)=>{
        console.log(error)
    })
}


  componentWillMount = () => {
    console.log('About will mount');
  }

  componentDidMount = () => {
    this.webAllInfo();
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
    if(this.state.isLoading){
      return(
        <Loader />
      )
    }else{
    return (
      <React.Fragment>
        <section className="section" id="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="text-center mx-auto section-main-title">
                            <h2><span className="font-weight-bold">{this.state.about_title} </span></h2>
                            <div className="main-title-border">
                                <i className="mdi mdi-asterisk"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-lg-12">

                        <div className="text-center about-detail mx-auto mt-5">
                            <h3 className="mb-3">Hello! <span className="font-weight-bold text-custom">I'M {this.state.about_intro}</span></h3>
                            
                            <p className="text-muted mt-3">{this.state.about_details}</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-9" style={{"marginLeft": "12%"}}>
                        <div className="progress-bars skill-custom">
                        {this.state.skills_percent.length==0 &&<div className="clearfix">
                              <h3>No Skill's</h3>
                            </div> }
                            {this.state.skills_percent.map((item,id)=>(
                              <React.Fragment>
                              <div className="clearfix">
                            <div className="text-dark font-weight-bold float-left">{item.skill}</div>
                                <div className="text-muted float-right">{item.percent}%</div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{"width": item.percent+"%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </React.Fragment>
                            ))}
                            
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

About.propTypes = {
  // bla: PropTypes.string,
};

About.defaultProps = {
  // bla: 'test',
};

export default About;
