import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ServiceComponent.styles';

const ServiceComponent = (props) => (
  <React.Fragment>
    <div className="col-lg-4">
      <div className="lan_box_ser text-center rounded p-4 mt-3">
          <div className="ser_icon">
              <img style={{"width": "100px","height": "auto"}} src={props.data.service_icon} />
          </div>
          <div className="service-content mt-4">
              <h5 className="font-weight-bold">{props.data.service_name}</h5>
<             p className="mt-3 text-muted mb-0">{props.data.about_service}</p>
          </div>
      </div>
  </div>
  </React.Fragment>
);

ServiceComponent.propTypes = {
  // bla: PropTypes.string,
};

ServiceComponent.defaultProps = {
  // bla: 'test',
};

export default ServiceComponent;
