import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './education.css';
import EducationTemplate from '../../re-usable-component/EducationComponent/index';
import ExperianceTemplate from '../../re-usable-component/ExperienceComponent/index';
import HireMe from '../HireMe/index';
//import { Test } from './Educations.styles';
import ApiServices from '../../api_services/api_services';
class Educations extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      education_list:[],
      experience_list:[],
      title:'',
      intro:''
    };
  }

  webAllInfo(){
    ApiServices.getWebsiteInfo().then((response)=>{
        if(response.data.success==true){
           this.setState({
            title:response.data.data.education_experience.education_service_title,
            intro:response.data.data.education_experience.education_service_intro,
            education_list:response.data.data.education_experience.education_set,
            experience_list:response.data.data.education_experience.experience_set
        });
        }
    }).catch((error)=>{
        console.log(error)
    })
}

  componentWillMount = () => {
    console.log('Educations will mount');
  }

  componentDidMount = () => {
    this.webAllInfo();
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
                            <h2><span className="font-weight-bold">{this.state.title}</span></h2>
                            <div className="main-title-border">
                                <i className="mdi mdi-asterisk"></i>
                            </div>
                            <p className="text-muted mx-auto mt-2">{this.state.intro}</p>
                        </div>
                    </div>
                </div>
                <div class="row mt-4 pt-4">
                    <div class="col-lg-5">
                        <div class="cv_edu_exp mt-3">
                        {this.state.education_list.map(item =>
                            item!=null?
                            <EducationTemplate data={item} />:''
                            )}
                        </div>
                    </div>
                    <div class="col-lg-5 offset-lg-2">
                        <div class="cv_edu_exp mt-3">
                        {this.state.experience_list.map(item =>
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
