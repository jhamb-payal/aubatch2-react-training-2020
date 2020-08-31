import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: true,
        light: {syntax: "#333", ui:"#555", bg:"#ddd"},
        dark: {syntax: "#555", ui: "#ddd", bg: "#333"}
     }

    //  handletoggle = () => {
    //      this.setState({isLightTheme: !this.state.isLightTheme});
    //  }
    render() { 
        console.log(ThemeContext)
        return <ThemeContext.Provider value = {{...this.state}}>
            {this.props.children}
    </ThemeContext.Provider>
    }
}
 
export default ThemeContextProvider;