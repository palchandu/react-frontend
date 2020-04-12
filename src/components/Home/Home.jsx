import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Typical from 'react-typical'
//import { Test } from './Home.styles';

class Home extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Home will mount');
  }

  componentDidMount = () => {
    console.log('Home mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Home will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Home will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Home did update');
  }

  componentWillUnmount = () => {
    console.log('Home will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <React.Fragment>
        <section className="home-bg section h-100vh clip-home" id="home" style={{"background":"url(../images/home-bg.jpg)","backgroundPosition": "center center",
    "backgroundSize": "cover","position": "relative"}}>
            <div className="bg-overlay"></div>
            <div className="home-table">
                <div className="home-table-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="text-white text-center">
                                    <h4>Hello & Welcome</h4>
                                    <h1 className="header_title mb-0 mt-3">I Am<Typical
        steps={['C.P Pal',1500,'Developer', 1000, 'Designer', 500]}
        loop={Infinity}
        wrapper="p"
      /></h1>
                                    <ul className="social_home list-unstyled text-center pt-4">
                                        <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="mdi mdi-linkedin"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="mdi mdi-dribbble"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="mdi mdi-google-plus"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="mdi mdi-twitter"></i></a></li>
                                    </ul>
                                    <div className="header_btn">
                                        <a href="#" className="btn btn-outline-custom btn-rounded mt-4">Download CV</a>
                                    </div>
                                </div>
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

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

export default Home;
