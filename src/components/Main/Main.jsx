import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import About from '../About/About';
import Services from '../Services/Services';
import Educations from '../Educations/Educations';
import Work from '../Works/Works';
import Client from '../Client/Client';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import { createBrowserHistory } from "history";
import BlogSingle from '../BlogSingle/BlogSingle';
//import { Test } from './Main.styles';

class Main extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };

    
  }
  
  componentWillMount = () => {
    console.log('Main will mount');
  }

  componentDidMount = () => {
    console.log('Main mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Main will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Main will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Main did update');
  }

  componentWillUnmount = () => {
    console.log('Main will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <React.Fragment>
        <Router>
          <Header/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/about' component={About} />
              <Route path='/services' component={Services} />
              <Route path='/education' component={Educations} />
              <Route path='/work' component={Work} />
              <Route path='/client' component={Client} />
              <Route path='/blog' component={Blog} />
              <Route path='/contact' component={Contact} />
              <Route path='/:title' component={BlogSingle} />
            </Switch>
          <Footer/>
        </Router>
      </React.Fragment>
    );
  }
}

Main.propTypes = {
  // bla: PropTypes.string,
};

Main.defaultProps = {
  // bla: 'test',
};

export default Main;
