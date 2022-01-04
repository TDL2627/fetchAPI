fetch('https://pokeapi.co/api/v2/pokemon/7').then(res =>{
    return res.json();
}).then(data => {
    console.log(data);
    document.querySelector("#card").innerHTML= `
   
        <h1>${ data.name }</h1>
        <div>
        <img src="${ data.sprites.front_default }">
        <img src="${ data.sprites.back_default }">
        <img src="${ data.sprites.front_shiny }">
        <img src="${ data.sprites.back_shiny }">
        </div>
        <h3>Ability<h3>
        
            <p>${ data.abilities[0].ability.name }</p>
         
        
        <h3>MOVES</h3>
        <ul>
        <li>${ data.moves[5].move.name }</li>
        <li>${ data.moves[21].move.name }</li>
        <li>${ data.moves[7].move.name }</li>
        <li>${ data.moves[8].move.name }</li>
        </ul>
        <br>
        <h3>Details</h3>

    `

}).catch(err => {
    console.log(err)
})