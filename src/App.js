import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            readyToAdd: false,
            successfullyInstalled: false,
            acceptedInstall: false,
            declinedInstall: false,
        };
        this.addToHome = this.addToHome.bind(this);
        this.shouldShowAddButton = this.shouldShowAddButton.bind(this);
        this.openWindowOrTab = this.openWindowOrTab.bind(this);
    }
    componentDidMount() {
        // check if user is already running app from home screen
        if (window.matchMedia('(display-mode: standalone)').matches) {
            console.log('App is already installed and running in standalone');
            this.setState({
                successfullyInstalled: true,
            });
        } else {
            window.addEventListener('beforeinstallprompt', e => {
                console.log('beforeinstallprompt has fired', e);
                // Prevent Chrome 67 and earlier from automatically showing the prompt
                e.preventDefault();
                // Stash the event so it can be triggered later.
                window.deferredPrompt = e;
                this.setState({
                    readyToAdd: true,
                });
            });
            // this event fires only when app is installed
            window.addEventListener('appinstalled', evt => {
                console.log('App was successfully installed');
                this.setState({
                    successfullyInstalled: true,
                });
            });
        }
        this.addToHome();
    }
    addToHome() {
        // Show the prompt
        let { deferredPrompt } = window;
        if (deferredPrompt) {
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            deferredPrompt.userChoice.then(choiceResult => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                    this.setState({
                        acceptedInstall: true,
                    });
                } else {
                    console.log('User dismissed the A2HS prompt');
                    this.setState({
                        declinedInstall: true,
                    });
                }
                deferredPrompt = null;
            });
        }
    }
    shouldShowAddButton() {
        let shouldShow =
            this.state.readyToAdd &&
            !this.state.successfullyInstalled &&
            !this.state.acceptedInstall &&
            !this.state.declinedInstall;
        console.log('Should show add button', shouldShow);
        return shouldShow;
    }
    openWindowOrTab(url = window.location.href) {
        window.open(url, '_blank');
    }
    render() {
        return (
            <div className="App">
                <div className="bg"><div className="image"></div></div>
                <div className="content">
                    <ul>
                        <li><a href="#" onClick={() =>
                                this.openWindowOrTab('https://github.com/alexup71rus')
                            }>Github</a></li>
                        <li><a href="#" onClick={() =>
                                this.openWindowOrTab('https://codepen.io/5ubjpogqdv6dcjz/')
                            }>CodePen</a></li>
                        <li><a href="#" onClick={() =>
                                this.openWindowOrTab('https://stackblitz.com/@alexup71rus')
                            }>StackBlitz</a></li>
                        <li><a href="#" onClick={() =>
                                this.openWindowOrTab('https://www.youtube.com/channel/UC9TnazUh1CaQZWrpSf33XZA')
                            }>YouTube</a></li>
                        <li><a href="#" onClick={() =>
                                this.openWindowOrTab('https://kwork.ru/user/alexup71rus')
                            }>Kwork</a></li>
                        <li><a href="#" onClick={() =>
                                this.openWindowOrTab('https://t-do.ru/alexup71rus')
                            }>Телеграм</a></li>
                        <li><a href="#" onClick={() =>
                                this.openWindowOrTab('mailto:admin@khodyr.ru')
                            }>Почта</a></li>
                    </ul>
                    {this.shouldShowAddButton() ? (
                        <button onClick={this.addToHome}>
                            Add to Home Screen
                        </button>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default App;
