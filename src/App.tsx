import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

class App extends Component<any> {
  render() {
    console.log(this.props.location);
    return (
      <div className="App">
        <Header />
        <h1>App</h1>
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={this.props.location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames="fade"
          >
            <Switch location={this.props.location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(App);
