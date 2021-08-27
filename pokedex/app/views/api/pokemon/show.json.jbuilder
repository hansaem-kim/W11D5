json.pokemon do
    json.set! @pokemon.id do
        json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type, :image_url
    end
end

json.moves do
    json.set! @pokemon.id do
        json.extract! @pokemon.moves, :id, :name
    end
end