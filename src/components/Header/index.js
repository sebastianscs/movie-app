import React, { Component } from 'react';


class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }
    componentDidMount () {
        
    }
    handleClick = () => {
        this.setState({isLoggedIn:true})
    }

    render() {
        return (
            <header>
                
                <h1>{this.props.appName}</h1>
                <button onClick={this.handleClick}>Clickeaaaa</button>
                <p>{this.state.isLoggedIn ? 'Bienvenido :3': 'Aún no has iniciado sesión'}</p>
                
            </header>
        )
    }
}

export default Header;