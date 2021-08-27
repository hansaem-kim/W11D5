import { connect } from "react-redux";
import { selectAllPokemon } from "../../reducers/selectors";
import { fetchAllPokemon } from "../../util/api_util";
import { pokemonIndex } from './pokemon_index'

const mSTP = (state) => {
    return {
        pokemon: Object.values(state.entities.pokemon)
    }
}

const mDTP = (dispatch) => {
    return {
        fetchAllPokemon: () => {
            dispatch(fetchAllPokemon())
        }
    }
}

export default connect(
    mSTP,
    mDTP
)(pokemonIndex)