import App from 'next/app';
import React from 'react';
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';

const routes = ["/", "/a", "/b"];
export default class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    console.log(this.props.router.route)
    return (
      <div>
        <header>
        <Link href="/"><a>Home</a></Link>
        <Link href="/a"><a>a</a></Link>
        <Link href="/b"><a>b</a></Link>
      </header>
        {
          routes.map(route => {
            return (
              <CSSTransition
                key={route}
                in={this.props.router.route === route}
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
         <style jsx global>
        {`
        header{
          width: 100%;
          max-width: 768px;
          margin: auto;
        }
          header > a{
            
            margin: 16px;
            position: relative;
            z-index: 99;
          }
          .pages{
            position: fixed;
            width: 100%;
            max-width: 768px;
            height: 100vh;
            top: 56px;
            left: 0;
            right: 0;
            background-color: rgba(0,0,0,0.1);
            margin: auto;
          }
          .page-enter{
            transform: translateX(-100px);
            // transition: transform 300ms;
          }
          .page-enter-active {
            opacity: 1;
            transform: translateX(-0px);
            transition: opacity 300ms, transform 300ms;
          }
          
          .page-exit {
            opacity: 1;
            transform: translateX(0px);
          }
          
          .page-exit-active {
            opacity: 0;
            transform: translateX(100px);
            transition: opacity 300ms, transform 300ms;
          }
          
        `}
      </style>
      </div>
    )
  }
}