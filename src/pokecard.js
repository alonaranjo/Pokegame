import React, {Component} from 'react';
import './pokecard.css';

class Pokecard extends Component{
    render(){
        const {id, name, type, base_experience} = this.props.poke;
        const idStr = id < 10 ? `00${id}` : id < 99 ? `0${id}` : id;
        const imgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idStr}.png`
        return(
            <div className="pokecard">
                <h1 className="pokecard-name">{name}</h1>
                <div className="pokecard-container-img">
                    <img className="pokecard-img" src={imgSrc} alt={name}/>
                </div>
                <h2 className="pokecard-info">{type}</h2>
                <h2 className="pokecard-info">{base_experience}</h2>
            </div>
        )
    }
}

export default Pokecard;