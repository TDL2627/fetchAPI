fetch('https://pokeapi.co/api/v2/pokemon/130').then(res =>{
    return res.json();
}).then(data => {
    console.log(data);
    document.querySelector("#load").innerHTML= `
        <h1>${ data.name }</h1>
        <div>
        <img src="${ data.sprites.front_default }">
        <img src="${ data.sprites.back_default }">
        <img src="${ data.sprites.front_shiny }">
        <img src="${ data.sprites.back_shiny }">
        </div>
        <ul>
            <li>${ data.abilities[0].ability.name }</li>
            <li>${ data.abilities[1].ability.name }</li>
         
        </ul>
        <h3>MOVES</h3>
        <ul>
        <li>${ data.moves[5].move.name }</li>
        <li>${ data.moves[21].move.name }</li>
        <li>${ data.moves[7].move.name }</li>
        <li>${ data.moves[8].move.name }</li>
        </ul>
    `

}).catch(err => {
    console.log(err)
})