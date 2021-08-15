class DataSource {
    static searchPokemon(keyword) {
        return fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.results) {
                    return Promise.resolve(`${keyword}`);
                } else {
                    return Promise.reject(`${keyword} is not found`)
                }
            })
    }
}

export default DataSource;