let usr_inp = document.getElementById('usr_inp');
let img = document.getElementById('img');
let stats = document.getElementById('stats');

async function fetching_img(){
    let pokemonName = usr_inp.value.toLowerCase();
    try{
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok || pokemonName === ''){
            throw new Error('Could not fetch data🥺');
        }else{
            let data = await response.json();
            let pokemonSprite = data.sprites.front_default;
            let Name = data.species.name;
            let weight = data.weight;
            let experience = data.base_experience;

            img.src = pokemonSprite;
            img.style.display = 'block';
            console.log(data)
            stats.textContent = `Name: ${Name} || Weigth: ${weight} || Experience: ${experience}`
        } 
    }
    catch(error){
        console.log(`Please enter a valid pokemon name. ${pokemonName} this is not a pokemon.`);
    };
};