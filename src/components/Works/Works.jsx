import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Works.styles';
import PortfolioTemplate from '../../re-usable-component/Portfolio/index';
class Works extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Works will mount');
  }

  componentDidMount = () => {
    console.log('Works mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Works will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Works will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Works did update');
  }

  componentWillUnmount = () => {
    console.log('Works will unmount');
  }

  render () {
      const work_list=[{
        'id':1,
        'slide_image':['images/works/2.jpg','images/works/3.jpg','images/works/4.jpg','images/works/5.jpg','images/works/6.jpg'],
        'bg_image':'images/works/1.jpg',
        'project_name':'UI Elements, Icons'
      },
      {
        'id':2,
        'slide_image':['images/works/2.jpg','images/works/3.jpg','images/works/4.jpg','images/works/5.jpg','images/works/6.jpg'],
        'bg_image':'images/works/2.jpg',
        'project_name':'Illustrations'
      },
      {
        'id':3,
        'slide_image':['images/works/2.jpg','images/works/3.jpg','images/works/4.jpg','images/works/5.jpg','images/works/6.jpg'],
        'bg_image':'images/works/3.jpg',
        'project_name':'Media, Icons'
      },
      {
        'id':4,
        'slide_image':['images/works/2.jpg','images/works/3.jpg','images/works/4.jpg','images/works/5.jpg','images/works/6.jpg'],
        'bg_image':'images/works/4.jpg',
        'project_name':'Graphics, UI Elements'
      },
      {
        'id':5,
        'slide_image':['images/works/2.jpg','images/works/3.jpg','images/works/4.jpg','images/works/5.jpg','images/works/6.jpg'],
        'bg_image':'images/works/5.jpg',
        'project_name':'Illustrations, Graphics'
      },
      {
        'id':6,
        'slide_image':['images/works/2.jpg','images/works/3.jpg','images/works/4.jpg','images/works/5.jpg','images/works/6.jpg'],
        'bg_image':'images/works/6.jpg',
        'project_name':'UI Elements, Icons'
      }
    ]
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <React.Fragment>
        <section className="section text-center" id="work">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="text-center mx-auto section-main-title">
                            <h2>Our <span className="font-weight-bold">Work</span></h2>
                            <div className="main-title-border">
                                <i className="mdi mdi-asterisk"></i>
                            </div>
                            <p className="text-muted mx-auto mt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>
                
                <div className="row mt-5 work-filter">
                    {work_list.map(item=>
                    <PortfolioTemplate key={item.id} data={item} />
                        )}
                    
                </div>
            </div>
        </section>
      </React.Fragment>
    );
  }
}

Works.propTypes = {
  // bla: PropTypes.string,
};

Works.defaultProps = {
  // bla: 'test',
};

export default Works;
