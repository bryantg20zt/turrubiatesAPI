window.onload =  () => {
    
    function getData () {
        fetch('https://pokeapi.co/api/v2/pokemon/charmander')
        .then(response => response.json())
        .then(data => {
            let newImage = document.createElement('img');
            newImage.src = data.sprites.other.home.front_default;
            newImage.className = 'pokemonStyle';
            document.querySelector('#cardContainer').appendChild(newImage);
            let newP = document.createElement('p');
            let name = data.name;
            newP.innerText = name.toUpperCase();
            newP.className = 'pokemonStyleP';
            document.querySelector('#cardContainer').appendChild(newP);
        })
    }

    getData();
}