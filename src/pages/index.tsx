import {useEffect} from 'react';
import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  
  useEffect(() => {
    // Redirect to /intro page
    // Construct path with baseUrl (e.g., /docs/intro if baseUrl is /docs)
    const baseUrl = siteConfig.baseUrl || '/';
    const introPath = `${baseUrl}intro`.replace(/\/\//g, '/'); // Remove double slashes
    window.location.replace(introPath);
  }, [siteConfig.baseUrl]);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <div style={{textAlign: 'center', padding: '2rem'}}>
          <p>Redirecting to documentation...</p>
          <p>
            <a href={`${siteConfig.baseUrl || '/'}intro`}>
              Click here if you are not redirected
            </a>
          </p>
        </div>
      </main>
    </Layout>
  );
}
