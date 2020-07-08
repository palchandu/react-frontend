import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Services.styles';
import ServiceTemplate from '../../re-usable-component/ServiceComponent/index'
import ApiServices from '../../api_services/api_services';
//Loader import
import Loader from '../Loader';
class Services extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      service_list:[],
      service_title:'',
      service_intro:'',
      isLoading: true
    };
  }

  webAllInfo(){
    ApiServices.getWebsiteInfo().then((response)=>{
        if(response.data.success==true){
           this.setState({
            service_list:response.data.data.service.service_set,
            service_title:response.data.data.service.service_title,
            service_intro:response.data.data.service.service_intro,
            isLoading:false
        });
        }
        console.log('ddddddd',this.state.work_list);
    }).catch((error)=>{
        console.log(error)
    })
}

  componentWillMount = () => {
    console.log('Services will mount');
  }

  componentDidMount = () => {
    console.log('Services mounted');
    this.webAllInfo();
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Services will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Services will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Services did update');
  }

  componentWillUnmount = () => {
    console.log('Services will unmount');
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
        <section className="section bg-light" id="services">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="text-center mx-auto section-main-title">
                            <h2><span className="font-weight-bold">{this.state.service_title}</span></h2>
                            <div className="main-title-border">
                                <i className="mdi mdi-asterisk"></i>
                            </div>
                            <p className="text-muted mx-auto mt-2">{this.state.service_intro}</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-4 pt-4">
                   {this.state.service_list.map(item=>
                       <ServiceTemplate data={item} />
                   )}
                </div>
                
            </div>
        </section>
      
      </React.Fragment>
    );
  }
 }
}

Services.propTypes = {
  // bla: PropTypes.string,
};

Services.defaultProps = {
  // bla: 'test',
};

export default Services;
