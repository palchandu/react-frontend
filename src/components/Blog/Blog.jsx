import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Blog.styles';
import BlogListComponentTemplate from '../../re-usable-component/BlogListComponent/index';
class Blog extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Blog will mount');
  }

  componentDidMount = () => {
    console.log('Blog mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Blog will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Blog will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Blog did update');
  }

  componentWillUnmount = () => {
    console.log('Blog will unmount');
  }

  render () {
      const blogList=[
          {
              "featured_image":"images/blog/blog-1.jpg",
              "title":"There are many variations",
              "created_date":"13 February 2018",
              "created_by":"By Envato",
              "short_text":"Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies.",
              "categories":"Lifestyle"
          },
          {
            "featured_image":"images/blog/blog-1.jpg",
            "title":"There are many variations",
            "created_date":"13 February 2018",
            "created_by":"By Envato",
            "short_text":"Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies.",
            "categories":"Lifestyle"
        },
        {
            "featured_image":"images/blog/blog-1.jpg",
            "title":"There are many variations",
            "created_date":"13 February 2018",
            "created_by":"By Envato",
            "short_text":"Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies.",
            "categories":"Lifestyle"
        },
        {
            "featured_image":"images/blog/blog-1.jpg",
            "title":"There are many variations",
            "created_date":"13 February 2018",
            "created_by":"By Envato",
            "short_text":"Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies.",
            "categories":"Lifestyle"
        },
        {
            "featured_image":"images/blog/blog-1.jpg",
            "title":"There are many variations",
            "created_date":"13 February 2018",
            "created_by":"By Envato",
            "short_text":"Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies.",
            "categories":"Lifestyle"
        },
        {
            "featured_image":"images/blog/blog-1.jpg",
            "title":"There are many variations",
            "created_date":"13 February 2018",
            "created_by":"By Envato",
            "short_text":"Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies.",
            "categories":"Lifestyle"
        }
      ];
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <React.Fragment>
        <section className="section bg-light" id="blog">
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
                <div className="row mt-4 pt-4">
                    {blogList.map(item=>
                    <BlogListComponentTemplate data={item} />
                    )}
                </div>
            </div>
        </section>
      </React.Fragment>
    );
  }
}

Blog.propTypes = {
  // bla: PropTypes.string,
};

Blog.defaultProps = {
  // bla: 'test',
};

export default Blog;
