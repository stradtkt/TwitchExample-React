import React, {Component} from 'react';

class GoogleAuth extends Component {
    state = {isSignedIn: null};
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '720592590669-c7j2v737pdfpkgljvn4k65oli5r2tojo.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
    };
    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return <div>I do not know if we are signed in.</div>;
        } else if(this.state.isSignedIn) {
            return (
                <button className="ui red google button">
                    <i className="google icon"></i>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button className="ui green google button">
                    <i className="google icon"></i>
                    Sign In
                </button>
            );
        }
    }
    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
}

export default GoogleAuth;