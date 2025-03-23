import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>AgentQ Admin</title>
        <meta name="description" content="Administrative panel for AgentQ" />
      </Head>
      <div style={{
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1>AgentQ Admin Panel</h1>
        <p>Welcome to the AgentQ Admin Panel. This is a simplified version.</p>
        
        <div style={{ marginTop: '20px' }}>
          <a
            href="/auth/login"
            style={{
              display: 'inline-block',
              padding: '10px 15px',
              backgroundColor: '#FF4E00',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: 'bold'
            }}
          >
            Go to Login
          </a>
        </div>
      </div>
    </>
  );
}

