import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Works.styles';
import PortfolioTemplate from '../../re-usable-component/Portfolio/index';
import ApiServices from '../../api_services/api_services';
class Works extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      work_list:[],
      portfolio_data_title:'',
      portfolio_data_intro:''
    };
  }
  webAllInfo(){
    ApiServices.getWebsiteInfo().then((response)=>{
        if(response.data.success==true){
           this.setState({
            work_list:response.data.data.work.works_set,
            portfolio_data_title:response.data.data.work.portfolio_data_title,
            portfolio_data_intro:response.data.data.work.portfolio_data_intro
        });
        }
        console.log('ddddddd',this.state.work_list);
    }).catch((error)=>{
        console.log(error)
    })
}

  componentWillMount = () => {
    console.log('Works will mount');
  }

  componentDidMount = () => {
    this.webAllInfo();
    console.log('Works mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Works will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Works will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Works did update');
  }

  componentWillUnmount = () => {
    console.log('Works will unmount');
  }

  render () {

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <React.Fragment>
        <section className="section text-center" id="work">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="text-center mx-auto section-main-title">
                        <h2><span className="font-weight-bold">{this.state.portfolio_data_title}</span></h2>
                            <div className="main-title-border">
                                <i className="mdi mdi-asterisk"></i>
                            </div>
                            <p className="text-muted mx-auto mt-2">{this.state.portfolio_data_intro}</p>
                        </div>
                    </div>
                </div>
                
                <div className="row mt-5 work-filter">
                    {this.state.work_list.map(item=>
                    <PortfolioTemplate key={item.id} data={item} />
                        )}
                    
                </div>
            </div>
        </section>
      </React.Fragment>
    );
  }
}

Works.propTypes = {
  // bla: PropTypes.string,
};

Works.defaultProps = {
  // bla: 'test',
};

export default Works;
