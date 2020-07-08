import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Blog.styles';
import BlogListComponentTemplate from '../../re-usable-component/BlogListComponent/index';
import Service from '../../api_services/api_services';
import queryString from 'query-string';
import SideBar from '../../re-usable-component/SidebarComponent/SidebarComponent';
//Loader import
import Loader from '../Loader';
class Blog extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      blogList:[],
      isLoading: true
    };
  }

  allInfo(data){
    Service.post_listing(data).then((response)=>{
        if(response.data.success==true){
           this.setState({
            blogList:response.data.data,
            isLoading:false
        });
        }
        console.log('090980909999',this.state.blogList);
    }).catch((error)=>{
        console.log(error)
    })
}

  componentWillMount = () => {
    console.log('Blog will mount');
  }

  componentDidMount = () => {
    console.log('Blog mounted');
    var query={}
    let params = queryString.parse(this.props.location.search);
    if(params.q && params.q!=null){
      var seacrh=params.q;
      query.seacrh=seacrh;
    }
    if(params.category && params.category!=null){
      let category=params.category;
      query.category=category;
    }
    
    this.allInfo(query);
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Blog will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Blog will update', nextProps, nextState);
    
  }

  componentDidUpdate = () => {
    console.log('Blog did update');
    var query={}
    let params = queryString.parse(this.props.location.search);
    if(params.q && params.q!=null){
      var seacrh=params.q;
      query.seacrh=seacrh;
    }
    if(params.category && params.category!=null){
      let category=params.category;
      query.category=category;
    }
    
    this.allInfo(query);
  }

  componentWillUnmount = () => {
    console.log('Blog will unmount');
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
        <section className="section bg-light">
            <div className="container">
              <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="text-center mx-auto section-main-title">
                            <h2>Our <span className="font-weight-bold">Blog</span></h2>
                            <div className="main-title-border">
                                <i className="mdi mdi-asterisk"></i>
                            </div>
                            <p className="text-muted mx-auto mt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                          {this.state.blogList.length==0 && 
                            <div  className="col-lg-12 mt-3">
                              <div className="text-center rounded bg-white p-2">
                                <div className="content_blog pt-3 pb-3">
                                  <h3>No Post Found.</h3>
                                </div>
                              </div>
                            </div>
                          }
                          {this.state.blogList.map((item,id)=>(
                            <BlogListComponentTemplate key={id} data={item} />
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <SideBar />
                    </div>
                </div>
            </div>
        </section>
      </React.Fragment>
    );
   }
 }
}

Blog.propTypes = {
  // bla: PropTypes.string,
};

Blog.defaultProps = {
  // bla: 'test',
};

export default Blog;
