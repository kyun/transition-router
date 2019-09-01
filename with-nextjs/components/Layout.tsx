import React from 'react';
import Head from 'next/Head';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Layout: React.FC<any> = ({ title = "default title", children }) => {
  const Router = useRouter();
  console.log(Router);
  return (
    <div className="Layout">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
      </Head>
      <header>
        <Link href="/"><a>Home</a></Link>
        <Link href="/a"><a>a</a></Link>
        <Link href="/b"><a>b</a></Link>
      </header>
      <main>

        {children}

      </main>
      <footer>

      </footer>
      <style jsx global>
        {`
          header > a{
            margin: 16px;
          }
          .page-enter-active {
            opacity: 1;
            transform: scale(1);
            transition: opacity 300ms, transform 300ms;
          }
          
          .page-exit {
            opacity: 1;
            transform: scale(1);
          }
          
          .page-exit-active {
            opacity: 0;
            transform: scale(0.9);
            transition: opacity 300ms, transform 300ms;
          }
          
        `}
      </style>
    </div>

  )
}

export default Layout;