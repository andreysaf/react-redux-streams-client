import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMout() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: `133886623875-pgjlomrrv135ale6lrvoamer9e0j13pe.apps.googleusercontent.com`,
                scope: 'email'
            })
        });
    }

    render() {
        return <div>Google Auth</div>;
    }
}

export default GoogleAuth;