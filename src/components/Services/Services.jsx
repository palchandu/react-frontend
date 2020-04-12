import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Services.styles';
import ServiceTemplate from '../../re-usable-component/ServiceComponent/index'
class Services extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Services will mount');
  }

  componentDidMount = () => {
    console.log('Services mounted');
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
      const service_list=[
          {
              'icon_class':'mbri-database',
              'service_name':'Graphic Design',
              'about_service':'The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.'

          },
          {
            'icon_class':'mbri-website-theme',
            'service_name':'Unlimited Color',
            'about_service':'The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.'

        },
        {
            'icon_class':'mbri-growing-chart',
            'service_name':'Media Marketing',
            'about_service':'The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.'

        },
        {
            'icon_class':'mbri-wifi',
            'service_name':'Unlimited Wifi',
            'about_service':'The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.'

        },
        {
            'icon_class':'mbri-responsive',
            'service_name':'Responsive Design',
            'about_service':'The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.'

        },
        {
            'icon_class':'mbri-edit',
            'service_name':'Easy to customize',
            'about_service':'The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.'

        }
      ]
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <React.Fragment>
        <section className="section bg-light" id="services">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="text-center mx-auto section-main-title">
                            <h2>Our <span className="font-weight-bold">Services</span></h2>
                            <div className="main-title-border">
                                <i className="mdi mdi-asterisk"></i>
                            </div>
                            <p className="text-muted mx-auto mt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-4 pt-4">
                   {service_list.map(item=>
                       <ServiceTemplate data={item} />
                   )}
                </div>
                
            </div>
        </section>
      
      </React.Fragment>
    );
  }
}

Services.propTypes = {
  // bla: PropTypes.string,
};

Services.defaultProps = {
  // bla: 'test',
};

export default Services;
