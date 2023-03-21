import React, { Component } from 'react'
import './Pokecard.css'
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number)

class Pokecard extends Component{
    render(){
        const prop = this.props
        let imgscr = `${POKE_API}${padToThree(prop.id)}.png`
        return(
            <div className='Pokecard'>
                <h1 className="Pokecard-title">{prop.name}</h1>
                <div className='Pokecard-image'>
                    <img src={imgscr} alt={prop.name} />
                </div>
                <div className='Pokecard-data'>Type: {prop.type}</div>
                <div className='Pokecard-data'v>Base experience: {prop.exp}</div>
            </div>
        )
    }
}

export default Pokecard