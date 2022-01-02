export const numberOfPokemons = async () => {

    const url = `https://pokeapi.co/api/v2/generation/1/`;

    const resp = await fetch(url);

    const { pokemon_species }  = await resp.json();
  
    let pokemons = [];

    for (let id = 1; id < pokemon_species.length; id++){ 
        const pokemon = await getPokemons(id)

        pokemons.push(pokemon);
        
    }   

    return pokemons
}

export const getPokemons = async ( id ) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const resp = await fetch(url);

    const  data  = await resp.json();
    
    return {
        id: data.id,
        name: data.name,
        img: data.sprites.front_default,
        type: data.types[0]
    }
  
}

export const typesColor = (type) => {

    switch (type) {
        case type = 'grass':
            return 'grass-backgroud';
        case type = 'fire':
            return 'fire-backgroud';    
        case type = 'bug':
            return 'bug-backgroud';  
        case type = 'dragon':
            return 'dragon-backgroud';  
        case type = 'electric':
            return 'electric-backgroud';  
        case type = 'fighting':
            return 'fighting-backgroud';  
        case type = 'flying':
            return 'flying-backgroud';  
        case type = 'ghost':
            return 'ghost-backgroud';  
        case type = 'ground':
            return 'ground-backgroud';  
        case type = 'ice':
            return 'ice-backgroud';  
        case type = 'normal':
            return 'normal-backgroud';  
        case type = 'poison':
            return 'poison-backgroud';  
        case type = 'psychic':
            return 'psychic-backgroud';  
        case type = 'rock':
            return 'rock-backgroud';  
        case type = 'water':
            return 'water-backgroud';      
        default:
            return type
    }
}

export const padNumber = (num = 0, size = 3) => {
    let str = num.toString();
    while (str.length < size) {
      str = '0' + str;
    }
    return str;
};

export const toUpper = (name = '') => {
    // return name.chartAt(0).toUpperCase() + name.slice(1);
    return name[0].toUpperCase() + name.slice(1);
}

export const getPokemonByName = async (name) => {

    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

        const resp = await fetch(url);

        const  data  = await resp.json();

        if( data ) {
            return {
                id: data.id,
                namePoke: data.name,
                img: data.sprites.front_default,
                types: data.types,
                weight: data.weight,
                height: data.height,
                abilities: data.abilities
            }
        }

    } catch (error) {
        console.log(error)
    }
    
}




