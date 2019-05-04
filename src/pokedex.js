import React, {Component} from 'react';
import Pokecard from './pokecard';
import './pokedex.css';

class Pokedex extends Component{
    render(){
        const {isWinner} = this.props;
        return(
            <div className="pokedex">
                <h1 className="pokedex-status pokedex-info" 
                    style={{color: isWinner? 'green': 'red'}}>
                        {isWinner? 'Winner': 'Looser'}
                </h1>
                <h2 className="pokedex-exp pokedex-info">{this.props.exp}</h2>
                <div className="pokedex-container">
                    {this.props.pokes.map((poke, index) => (
                        <Pokecard key={index} poke={poke}/>
                    ))}
                </div>                
            </div>
        )
    }
}

export default Pokedex;