import React from 'react'

class pokemonIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAllPokemon()
    }
}