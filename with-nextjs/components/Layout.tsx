import React from 'react';
import Head from 'next/head';

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
      
      <main>

        {children}

      </main>
      <footer>

      </footer>
     
    </div>

  )
}

export default Layout;