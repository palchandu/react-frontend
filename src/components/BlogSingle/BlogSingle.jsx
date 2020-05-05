import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './BlogSingle.styles';
import Service from '../../api_services/api_services';
import EncodeDecode from '../../library/encode_decode';
import queryString from 'query-string';
import moment from 'moment'
import { Redirect, Link } from 'react-router-dom';
import Disqus from "disqus-react"
import SidebarComponent from '../../re-usable-component/SidebarComponent/SidebarComponent';

class BlogSingle extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      blog_details:'',
      created_by:'',
      disqusShortname:'',
      disqusConfig:{
      url: '',
      identifier: '', 
      title: '' },
      
    }
    
  }
  
  getPostDetails(title,post_id){
    Service.post_single(title,post_id).then((response)=>{
        if(response.data.success==true){
           this.setState({
            blog_details:response.data.data,
            created_by:response.data.data.meta_data.created_by.fullname,
            created:response.data.data.meta_data.created,
            disqusShortname:'getwebsoftware',
            disqusConfig:{
                url: 'http://localhost:3000',
                identifier: response.data.data._id, 
                title: response.data.data.title}
        });
        }else{
            this.setState({hasError:true});
        }
        console.log('post detail',this.state)
    }).catch((error)=>{
        console.log(error)
    })
  }
 
  componentWillMount = () => {
    console.log('BlogSingle will mount');
  }

  componentDidMount = () => {
    console.log('BlogSingle mounted');
    let title=this.props.match.params.title;
    let params = queryString.parse(this.props.location.search);
    let pid=EncodeDecode.string_decode(params.q);
    this.getPostDetails(title,pid);
    
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('BlogSingle will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('BlogSingle will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('BlogSingle did update');
  }

  componentWillUnmount = () => {
    console.log('BlogSingle will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <Redirect to="/blog" />
    }
  
    return (
    <React.Fragment>
      <section className="section bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="blog_box bg-white rounded p-2 mt-3">
                                   
                                    <div className="blog_detail rounded m-2 p-4 bg-white">
                                        <h4 className="font-weight-bold">{this.state.blog_details.title}.</h4>
                                        <p dangerouslySetInnerHTML={{__html: this.state.blog_details.post_content}}></p>
                                        <div className="blog_detail_devider"></div>
                                        <div className="clearfix mt-3">
                                            <p className="text-muted float-left mb-0">By <a href="" className="text-custom font-weight-bold">{this.state.created_by}</a></p>
                                            <span className="text-muted float-right">{moment.unix(this.state.created).format("MMM Do YYYY") }</span>
                                        </div>
                                        <div className="blog_detail_devider mt-3"></div>

                                        <div className="comments-form mt-5">
                                            <div className="comment-form-input mt-4">    
                                                <Disqus.DiscussionEmbed
                                                    shortname={this.state.disqusShortname}
                                                    config={this.state.disqusConfig}
                                                    />
                                            </div>
                                        </div>
                                    </div>
                                </div>                        
                            </div>                          
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <SidebarComponent />
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
    );
  }
}

BlogSingle.propTypes = {
  // bla: PropTypes.string,
};

BlogSingle.defaultProps = {
  // bla: 'test',
};

export default BlogSingle;
