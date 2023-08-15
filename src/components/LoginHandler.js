import React, { useEffect } from 'react';

function LoginHandler() {
    useEffect(() => {
        handleLogin();
    }, []);

    async function handleLogin() {
    console.log('handleLogin is being executed');
    // Parse the URL to get the authorization code
  const urlParams = new URLSearchParams(window.location.search);
  const authorizationCode = urlParams.get('code');
  console.log('Authorization Code:', authorizationCode); 

  if (authorizationCode) {
    try {
      // Send a request to the token endpoint to exchange the authorization code for an access token
      const response = await fetch('https://api.preview.platform.athenahealth.com/oauth2/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code: authorizationCode,
          redirect_uri: 'http://localhost:3000/appointments', 
          client_id: '0oahqcmimiyUvkkAp297',
          client_secret: 'ZCufN-rpSn-UeelFoW0NUgiTzxE7-smaGS9EcQzF',
        }),
      });

      if (response.ok) {
        // Parse the response JSON
        const data = await response.json();
        console.log('Access Token and ID Token Data:', data);

        // Store the access token in local storage
        localStorage.setItem('access_token', data.access_token);
        console.log('Access Token stored:', localStorage.getItem('access_token'));
      } else {
        console.error('Failed to exchange the authorization code for an access token:', response);
      }
    } catch (error) {
      console.error('Error occurred while exchanging the authorization code for an access token:', error);
    }
  }
    }
    return null;
}

export default LoginHandler 