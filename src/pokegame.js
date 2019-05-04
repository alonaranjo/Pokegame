import React, {Component} from 'react';
import Pokedex from './pokedex';
import './pokegame.css';

class Pokegame extends Component{
    static defaultProps = {
        pokemon : [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
    }
    render(){
        let hand1 = [], 
            hand2 = [...this.props.pokemon], 
            index,
            expHand1,
            expHand2;
        while(hand1.length < hand2.length){
            index = Math.floor(Math.random() * hand2.length);
            var poke = hand2.splice(index, 1)[0];
            hand1.push(poke);
        }    
        expHand1 = hand1.reduce((accumulator, current) => accumulator + current.base_experience, 0);
        expHand2 = hand2.reduce((accumulator, current) => accumulator + current.base_experience, 0);
        return(
            <div className="pokegame">
                <Pokedex pokes={hand1} exp={expHand1} isWinner={expHand1 > expHand2}/>
                <Pokedex pokes={hand2} exp={expHand2} isWinner={expHand2 > expHand1}/>
            </div>
        )
    }
}

export default Pokegame;