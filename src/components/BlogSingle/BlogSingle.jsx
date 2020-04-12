import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './BlogSingle.styles';

class BlogSingle extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('BlogSingle will mount');
  }

  componentDidMount = () => {
    console.log('BlogSingle mounted');
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
      return <h1>Something went wrong.</h1>;
    }
    return (
    <React.Fragment>
      <section class="section bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="blog_box bg-white rounded p-2 mt-3">
                                    <div class="img_blog">
                                        <img src="images/blog/blog-5.jpg" alt="" class="img-fluid rounded mx-auto d-block"/>
                                    </div>
                                    <div class="blog_detail rounded m-2 p-4 bg-white">
                                        <h4 class="font-weight-bold">Top WordPress Themes and Plugins for Travel, ...</h4>
                                        <p class="mt-3 text-muted">Vivamus. Commodo varius tellus nisl tellus pulvinar netus fames a, neque suspendisse tincidunt auctor penatibus taciti lorem mus penatibus quisque, fusce curae;, rutrum. Sit.</p>
                                        <p class="mt-3 text-muted">Molestie cras tempus. Accumsan maecenas enim pretium malesuada aenean tristique malesuada leo tristique sapien vitae molestie, at amet elementum facilisis amet integer. Lobortis quam venenatis ad condimentum felis phasellus eleifend erat vehicula est pede arcu facilisi ultrices ut. </p>
                                        <p class="blockquote">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                                        <p class="mt-3 text-muted">Non eros. Laoreet netus, sodales phasellus, enim consectetuer morbi accumsan egestas Pede montes molestie sollicitudin augue nec. Sapien, dui eget sociosqu viverra. Rutrum cras parturient, tellus, diam. Donec potenti ante ultrices lacus </p>
                                        <div class="blog_detail_devider"></div>
                                        <div class="clearfix mt-3">
                                            <p class="text-muted float-left mb-0">By <a href="#" class="text-custom font-weight-bold">John Doe</a></p>
                                            <span class="text-muted float-right">8 November</span>
                                        </div>
                                        <div class="blog_detail_devider mt-3"></div>
                                        <div class="blog_tag mt-3">
                                            <a href="#">Dragon</a>
                                            <a href="#">agency</a>
                                            <a href="#">corporate</a>
                                            <a href="#">e-commerce</a>
                                            <a href="#">business</a>
                                            <a href="#">responsive</a>
                                        </div>

                                        <div class="comment_blog mt-5">
                                            <div>
                                                <h4>Comments</h4>
                                                <img src="images/divider.html" alt="" class="d-block mt-2 mb-3"/>
                                            </div>

                                            <div class="comment_read mt-5">
                                                <div class="comment_img">
                                                    <img src="images/comment/1.jpg" alt="" class="img-fluid rounded-circle"/>
                                                </div>
                                                <div class="comment_data">
                                                    <h6><a href="#" class="text-dark d-block">David Little</a> <span class="text-muted font-weight-normal">Aug 15, 2018</span></h6>
                                                    <p class="text-muted mb-0">Faucibus nunc. Justo et phasellus sociosqu. Rutrum senectus ultrices facilisis egestas rutrum litora, luctus ac tincidunt.</p>

                                                    <div class="comment_reply">
                                                        <a href="#" class="text-custom">
                                                            <i class="mdi mdi-reply" aria-hidden="true"></i>
                                                            Reply
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="comment_read">
                                                <div class="comment_img">
                                                    <img src="images/comment/2.jpg" alt="" class="img-fluid rounded-circle"/>
                                                </div>
                                                <div class="comment_data">
                                                    <h6><a href="#" class="text-dark d-block">Sylvia Mercado</a>  <span class="text-muted font-weight-normal">Aug 15, 2018</span></h6>
                                                    <p class="text-muted mb-0">Potenti rutrum accumsan eleifend cubilia dis est dolor curabitur tempor pharetra laoreet, placerat facilisi.</p>

                                                    <div class="comment_reply">
                                                        <a href="#" class="text-custom">
                                                            <i class="mdi mdi-reply" aria-hidden="true"></i>
                                                            Reply
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="comment_read">
                                                <div class="comment_img">
                                                    <img src="images/comment/3.jpg" alt="" class="img-fluid rounded-circle"/>
                                                </div>
                                                <div class="comment_data">
                                                    <h6><a href="#" class="text-dark d-block">Kristina Collman</a>  <span class="text-muted font-weight-normal">Aug 15, 2018</span></h6>
                                                    <p class="text-muted mb-0">Tempus ut nonummy volutpat maecenas nonummy augue pharetra. Class nullam Orci. Porttitor egestas habitant pretium tristique.</p>

                                                    <div class="comment_reply">
                                                        <a href="#" class="text-custom">
                                                            <i class="mdi mdi-reply" aria-hidden="true"></i>
                                                            Reply
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="comments-form mt-5">
                                            <div>
                                                <h4>Leave A Comment</h4>
                                                <img src="images/divider.html" alt="" class="d-block mt-2 mb-3"/>
                                            </div>

                                            <div class="comment-form-input mt-4">
                                                <form>
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <div class="form-group mt-3">
                                                                <input name="name" id="name" type="text" class="form-control" placeholder="Your name..." required=""/>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-group mt-3">
                                                                <input name="email" id="email" type="email" class="form-control" placeholder="Your email..."  required=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <div class="form-group mt-3">
                                                                <textarea name="comments" id="comments" rows="4" class="form-control" placeholder="Your message..." required=""></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-lg-12 text-center">
                                                            <input type="submit" class="btn btn-custom" value="Send Comment"/>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>                        
                            </div>                          
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="mt-3 blog_sidebar rounded">
                            <div class="bg-white p-4">
                               
                                <div class="widget side_widget_search">
                                    <div class="sidebar_widget_title font-weight-bold text-uppercase">Search</div>
                                    <img src="images/divider.html" alt="" class="d-block mt-2 mb-4"/>
                                    <form>
                                        <input class="form-control" type="search" placeholder="Search..."/>
                                        <button class="search_icon" type="submit">
                                            <span class="mdi mdi-magnify"></span>
                                        </button>
                                    </form>
                                </div>

                                
                                <div class="widget mt-5">
                                    <div class="sidebar_widget_title font-weight-bold text-uppercase">Categories</div>
                                    <img src="images/divider.html" alt="" class="d-block mt-2 mb-3"/>
                                    <ul class="list-unstyled widget_list">
                                        <li><a href="#"><i class="mdi mdi-chevron-double-right"></i> Journey</a></li>
                                        <li><a href="#"><i class="mdi mdi-chevron-double-right"></i> Photography</a></li>
                                        <li><a href="#"><i class="mdi mdi-chevron-double-right"></i> Lifestyle</a></li>
                                        <li><a href="#"><i class="mdi mdi-chevron-double-right"></i> Food & Drinks</a></li>
                                    </ul>
                                </div>

                               
                                <div class="widget mt-5 widget_recent_entries_custom">
                                    <div class="sidebar_widget_title font-weight-bold text-uppercase">Recent Post</div>
                                    <img src="images/divider.html" alt="" class="d-block mt-2 mb-4"/>
                                    <ul class="list-unstyled">
                                        <li class="clearfix">
                                            <div class="re_post_img">
                                                <a href="#">
                                                    <img src="images/blog/blog-1.jpg" alt="" class="img-fluid rounded"/>
                                                </a>
                                            </div>
                                            <div class="re_post_desc">
                                                <a href="#" class="font-weight-bold">Top Things To San Francisco</a> 
                                                <span class="post-date fonts-italic">Aug 10, 2018</span>
                                            </div>
                                        </li>
                                        <li class="clearfix">
                                            <div class="re_post_img">
                                                <a href="#">
                                                    <img src="images/blog/blog-2.jpg" alt="" class="img-fluid rounded"/>
                                                </a>
                                            </div>
                                            <div class="re_post_desc">
                                                <a href="#" class="font-weight-bold">Venenatis vol utpat ele ifend</a> 
                                                <span class="post-date fonts-italic">Aug 18, 2018</span>
                                            </div>
                                        </li>
                                        <li class="clearfix">
                                            <div class="re_post_img">
                                                <a href="#">
                                                    <img src="images/blog/blog-3.jpg" alt="" class="img-fluid rounded"/>
                                                </a>
                                            </div>
                                            <div class="re_post_desc">
                                                <a href="#" class="font-weight-bold">Mattis felis nonummy cras.</a> 
                                                <span class="post-date fonts-italic">Aug 22, 2018</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                
                                <div class="widget mt-5">
                                    <div class="sidebar_widget_title font-weight-bold text-uppercase">Archives</div>
                                    <img src="images/divider.html" alt="" class="d-block mt-2 mb-3"/>
                                    <ul class="list-unstyled widget_list">
                                        <li><a href="#"><i class="mdi mdi-chevron-double-right"></i> January 2018</a></li>
                                        <li><a href="#"><i class="mdi mdi-chevron-double-right"></i> February 2018</a></li>
                                        <li><a href="#"><i class="mdi mdi-chevron-double-right"></i> March 2018</a></li>
                                        <li><a href="#"><i class="mdi mdi-chevron-double-right"></i> April 2018</a></li>
                                    </ul>
                                </div>

                                
                                <div class="widget mt-5">
                                    <div class="sidebar_widget_title font-weight-bold text-uppercase">Tags</div>
                                    <img src="images/divider.html" alt="" class="d-block mt-2 mb-4"/>
                                    <div class="blog_tag">
                                        <a href="#">Dragon</a>
                                        <a href="#">agency</a>
                                        <a href="#">corporate</a>
                                        <a href="#">e-commerce</a>
                                        <a href="#">business</a>
                                        <a href="#">responsive</a>
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

BlogSingle.propTypes = {
  // bla: PropTypes.string,
};

BlogSingle.defaultProps = {
  // bla: 'test',
};

export default BlogSingle;
