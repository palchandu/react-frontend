import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Typical from 'react-typical'
import HireMe from '../HireMe';
import Loader from '../Loader';
//import { Test } from './Home.styles';
import ApiServices from '../../api_services/api_services';
class Home extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      welcome_title:'',
      cv_url:'',
      background_image:'',
      animated_text:[],
      facebook:'',
      linkedin:'',
      twitter:'',
      youtube:'',
      isLoading: true
    };
  }
  webAllInfo(){
    ApiServices.getWebsiteInfo().then((response)=>{
        if(response.data.success==true){
            var animate=[];
            response.data.data.home.animated_text.map((item,id)=>(
              animate.push(item.text_name,item.text_delay)
            ))
           this.setState({
            animated_text:animate,
            background_image:response.data.data.home.background_image,
            cv_url:response.data.data.home.cv_url,
            welcome_title:response.data.data.home.welcome_title,
            facebook:response.data.data.social_icons.facebook,
            linkedin:response.data.data.social_icons.linkedin,
            twitter:response.data.data.social_icons.twitter,
            youtube:response.data.data.social_icons.youtube,
            isLoading:false
        });
        }
        console.log('ddddddd',this.state.work_list);
    }).catch((error)=>{
        console.log(error)
    })
}

  componentWillMount = () => {
    console.log('Home will mount');
  }

  componentDidMount = () => {
    this.webAllInfo();
   // this.setState({isLoading: false});
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
    var divStyle = {
      backgroundImage: 'url(' + this.state.background_image + ')',
      backgroundPosition: "center center",
      backgroundSize: "cover",
      position: "relative"

  }

  if(this.state.isLoading){
    return(
      <Loader/>
    )
  }else{
    return (
      
      <React.Fragment>
        <section className="home-bg section h-100vh clip-home" id="home" style={divStyle}>
            <div className="bg-overlay"></div>
            <div className="home-table">
                <div className="home-table-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="text-white text-center">
                                    <h4>{this.state.welcome_title}</h4>
                                    <h1 className="header_title mb-0 mt-3">I Am
                                    <Typical
                                    steps={this.state.animated_text}
                                    loop={Infinity}
                                    wrapper="p"
                                      /></h1>
                                    <ul className="social_home list-unstyled text-center pt-4">
                                        <li className="list-inline-item"><a href={this.state.facebook}><i className="mdi mdi-facebook"></i></a></li>
                                        <li className="list-inline-item"><a href={this.state.linkedin}><i className="mdi mdi-linkedin"></i></a></li>
                                        <li className="list-inline-item"><a href={this.state.youtube}><i className="mdi mdi-youtube-play"></i></a></li>
                                        <li className="list-inline-item"><a href={this.state.twitter}><i className="mdi mdi-twitter"></i></a></li>
                                    </ul>
                                    <div className="header_btn">
                                        <a href={this.state.cv_url} target="_blank" className="btn btn-outline-custom btn-rounded mt-4">Download CV</a>
                                    </div>
                                </div>
                            </div>
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
}

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

export default Home;
