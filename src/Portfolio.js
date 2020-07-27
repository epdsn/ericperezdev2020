import React, { Component } from 'react';
import MainMenu from './MainMenu';
import Hero from './Hero';

class Portfolio extends Component{
    render(){
        return <div>
            <MainMenu />
            <Hero />
        
        </div>;
    }
}

export default Portfolio;