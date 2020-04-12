import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../ModalComponent/index';
//import { Test } from './Portfolio.styles';
import './style.css';

const Portfolio = (props) => (
  <React.Fragment>
    <div className="col-lg-4 works">
        <div className="work_img_box rounded">
            {/* <a className="img-zoom" href="javascript::void(0)"></a> */}
            <Modal images={props.data.slide_image} />
            <div key={props.data.id} className="work_images">
                <img src={props.data.bg_image} alt="image" className="img-fluid mx-auto d-block"/>
                <div className="work_overlay">
                <h4 className="mb-0">{props.data.project_name}</h4>
                    {/*<h6 className="mb-0">Studio &amp; Art</h6>*/}
                </div>
            </div>
        </div>
    </div>
  </React.Fragment>
);

Portfolio.propTypes = {
  // bla: PropTypes.string,
};

Portfolio.defaultProps = {
  // bla: 'test',
};

export default Portfolio;
