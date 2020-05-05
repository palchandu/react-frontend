import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './SidebarComponent.styles';
import Service from '../../api_services/api_services';
import EncodeDecode from '../../library/encode_decode';
import queryString from 'query-string';
import moment from 'moment'
import { Redirect, Link } from 'react-router-dom';
class SidebarComponent extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      latest_post:[]
    };
  }

  getLatestPost(){
    Service.post_latest().then((response)=>{
        if(response.data.success==true){
           this.setState({
            latest_post:response.data.data,
        });
        }else{
            this.setState({hasError:true});
        }
        console.log('post latest',this.state.latest_post)
    }).catch((error)=>{
        console.log(error)
    })
  }

  componentWillMount = () => {
    console.log('SidebarComponent will mount');
  }

  componentDidMount = () => {
    console.log('SidebarComponent mounted');
    this.getLatestPost();
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('SidebarComponent will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('SidebarComponent will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('SidebarComponent did update');
  }

  componentWillUnmount = () => {
    console.log('SidebarComponent will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <React.Fragment>
        <div className="mt-3 blog_sidebar rounded">
                            <div className="bg-white p-4">
                               
                                <div className="widget side_widget_search">
                                    <div className="sidebar_widget_title font-weight-bold text-uppercase">Search</div>
                                    <img src="images/divider.html" alt="" className="d-block mt-2 mb-4"/>
                                    <form>
                                        <input className="form-control" type="search" placeholder="Search..."/>
                                        <button className="search_icon" type="submit">
                                            <span className="mdi mdi-magnify"></span>
                                        </button>
                                    </form>
                                </div>

                                
                                <div className="widget mt-5">
                                    <div className="sidebar_widget_title font-weight-bold text-uppercase">Categories</div>
                                    <img src="images/divider.html" alt="" className="d-block mt-2 mb-3"/>
                                    <ul className="list-unstyled widget_list">
                                        <li><a href="#"><i className="mdi mdi-chevron-double-right"></i> Journey</a></li>
                                        <li><a href="#"><i className="mdi mdi-chevron-double-right"></i> Photography</a></li>
                                        <li><a href="#"><i className="mdi mdi-chevron-double-right"></i> Lifestyle</a></li>
                                        <li><a href="#"><i className="mdi mdi-chevron-double-right"></i> Food & Drinks</a></li>
                                    </ul>
                                </div>

                               
                                <div className="widget mt-5 widget_recent_entries_custom">
                                    <div className="sidebar_widget_title font-weight-bold text-uppercase">Recent Post</div>
                                    <img src="images/divider.html" alt="" className="d-block mt-2 mb-4"/>
                                    <ul className="list-unstyled">
                                        {this.state.latest_post.length==0 &&
                                        <li>No Recent Post</li>
                                        }
                                        {this.state.latest_post.map((item,id)=>(
                                            <li className="clearfix">
                                            <div className="re_post_img">
                                                <a href="#">
                                                    <img src={item.featured_image} alt="" className="img-fluid rounded"/>
                                                </a>
                                            </div>
                                            <div className="re_post_desc">
                                            <Link  className="font-weight-bold" to={"/"+item.title+"?q="+EncodeDecode.string_encode(item._id)}>{item.title}</Link>
                                                <span className="post-date fonts-italic">{item.created}</span>
                                            </div>
                                        </li>
                                        ))}
                                        
                                        
                                    </ul>
                                </div>

                            </div>
                        </div>
      </React.Fragment>
    );
  }
}

SidebarComponent.propTypes = {
  // bla: PropTypes.string,
};

SidebarComponent.defaultProps = {
  // bla: 'test',
};

export default SidebarComponent;
