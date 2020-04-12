import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './BlogListComponent.styles';
import { Link } from "react-router-dom";
const BlogListComponent = (props) => (
  <React.Fragment>
    <div className="col-lg-4 mt-3">
        <div className="text-center rounded bg-white p-2">
            <div className="img_blog">
                <img src={props.data.featured_image} alt="" className="img-fluid rounded mx-auto d-block"/>
            </div>
            <div className="content_blog pt-3 pb-3">
                <div>
                    <h5 className="font-weight-bold mb-0"><Link  className="text-dark" to={"/"+props.data.title}>{props.data.title}</Link></h5>
                </div>
                <div className="mt-3">
                    <p className="font-weight-bold h6 mb-3"><a href="javascript::void(0)" className="text-custom">{props.data.categories}</a></p>
                    <p className="h6 text-muted date_blog mb-0">{props.data.created_date}<a href="javascript::void(0)" className="text-dark font-weight-bold">{props.data.created_by}</a></p>
                    <p className="mt-3 desc_blog pl-2 pr-2 text-muted">{props.data.short_text}</p>
                    <p className="h6 mb-0"><Link  className="text-muted font-weight-bold" to={"/"+props.data.title}>Read More...</Link> </p>
                </div>
            </div>
        </div>
    </div>
  </React.Fragment>
);

BlogListComponent.propTypes = {
  // bla: PropTypes.string,
};

BlogListComponent.defaultProps = {
  // bla: 'test',
};

export default BlogListComponent;
