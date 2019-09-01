import App from 'next/app';
import React from 'react';
import { CSSTransition } from 'react-transition-group';

const routes = ["/", "/a", "/b"];
export default class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    console.log(this.props.router.route)
    return (
      <div>
        {
          routes.map(route => {
            return (
              <CSSTransition
                key={route}
                in={this.props.router.route == route}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="pages">
                  <Component {...pageProps} />
                </div>
              </CSSTransition>
            )
          })
        }
      </div>
    )
  }
}