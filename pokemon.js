fetch('https://pokeapi.co/api/v2/pokemon/charizard').then(pokemon => {
    return pokemon.json();
}).then(monster => {
    for (let i=0; i<monster.length; i++){
        document.getElementById('load').innerHTML += "<h1 class='namee'>"+ monster[i].abilities.ability.name + "</h1>" + '<br>';
        
    }

}).catch((err) => {
    console.log('wrong', err);
});
