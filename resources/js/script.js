    /*-----------------------------------------------------------*/
    /* ------- Display Pokemon information using its name ----- */
    /*---------------------------------------------------------*/

    function getPokemonInfoByName(name) {
        
        // Looping through each pokemons
        for (var index in pokemonDataStore.pokemon) {

            // Check if pokemon exist for the argument passed.
            if (pokemonDataStore.pokemon[index].name.toLowerCase() === name.toLowerCase()) {

                // Log Picture and the Name of the Pokemon with particular styles
                console.log('%c          ', 'font-size: 100px; background: url(' + pokemonDataStore.pokemon[index].img + ') no-repeat;');
                console.log('%cPokemon Name: ' + pokemonDataStore.pokemon[index].name, 'font-size:20px;  font-family:cursive;');

                // Log remaining characteristic of Pokemon using for loop
                for (var key in pokemonDataStore.pokemon[index]) {

                    // Check if the characteristic is a truty value
                    if (pokemonDataStore.pokemon[index][key]) {

                        // Logging prev_evolution and next_evolution using Json.stringify since its a object array
                        if (key === 'prev_evolution' || key === 'next_evolution') {

                            console.log('%c' + key + ': ' + JSON.stringify(pokemonDataStore.pokemon[index][key]), 'font-size:15px;');
                        } else {

                            console.log('%c' + key + ': ' + pokemonDataStore.pokemon[index][key].toString(), 'font-size:15px;');
                        }
                    }
                }

                console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

                // Once pokemon is found and logged come out of the loop and the function
                return;
            }

        }

        // If pokemon is not found log a picture and a error message.
        console.log('%c         ', 'font-size: 180px; background: url(https://res.cloudinary.com/gscode/image/upload/v1521799888/pokemon-not-found.png) no-repeat;');
        console.error('%cIncorrect pokemon name or pokemon not found!!', 'font-size:20px;');
    }

    /* ----------------------------------------------------------------------- */
    /* ------- Display pre-evolution pokemons of particular pokemon --------- */
    /* --------------------------------------------------------------------- */

    function getPrePokemonsByName(name) {

        // Looping through each pokemons
        for (var index in pokemonDataStore.pokemon) {

            // Check if pokemon exist for the argument passed.
            if (pokemonDataStore.pokemon[index].name.toLowerCase() === name.toLowerCase()) {

                // Check if pokemon has previous evolution 
                if (pokemonDataStore.pokemon[index].prev_evolution) {

                    // Loop through each previous evolution
                    for (var pokes in pokemonDataStore.pokemon[index].prev_evolution) {

                        console.log('%cPokemon: ' + pokemonDataStore.pokemon[index].prev_evolution[pokes].name, 'font-size:25px;  font-family:cursive;');

                    }
                    console.log('%chas ' + pokemonDataStore.pokemon[index].name + ' as next evolution!!', 'font-size:20px; font-family:cursive;');

                } else {

                    console.error('%cNo pokemon has ' + pokemonDataStore.pokemon[index].name + ' as next evolution!!', 'font-size:20px;');
                }

                // Once pokemon is found and logged come out of the loop and the function
                return;
            }
        }

        // If pokemon is not found log a picture and a error message
        console.log('%c         ', 'font-size: 180px; background: url(https://res.cloudinary.com/gscode/image/upload/v1521799888/pokemon-not-found.png) no-repeat;');
        console.error('%cIncorrect pokemon name or pokemon not found!!', 'font-size:20px;');
    }

    /* ------------------------------------------------------------------------------- */
    /* ------------ Display pokemons who have particular weakness ------------------- */
    /* ----------------------------------------------------------------------------- */

    function getPokemonsByWeakness(weakness) {

        console.log('%cPokemons which were found with Weakness ' + weakness + ' are:', 'font-size:25px;  font-family:cursive;');

        // Looping through each pokemons
        for (var index in pokemonDataStore.pokemon) {

            // Check if pokemon has weaknesses
            if (pokemonDataStore.pokemon[index].weaknesses) {

                // Loop through weaknesses of pokemon
                for (var particularWeakness in pokemonDataStore.pokemon[index].weaknesses) {

                    // Check if weakness of pokemon matches with the argument passed
                    if (pokemonDataStore.pokemon[index].weaknesses[particularWeakness].toLowerCase() === weakness.toLowerCase()) {

                        console.log('%c' + pokemonDataStore.pokemon[index].name, 'font-size:20px;  font-family:cursive;');

                        // Once pokemon is found with particular weakness come out of the inner loop and continue with outer loop
                        break;
                    }
                }
            }
        }
    }


    /* ------------------------------------------------------------------------------- */
    /* ---------------------------- Display all pokemons ---------------------------- */
    /* ----------------------------------------------------------------------------- */

    function displayAllPokemons() {
        
		// Looping through each pokemons
        for (var index in pokemonDataStore.pokemon) {

            // Pass the name of each pokemon to getPokemonInfoByName to get full detail
            getPokemonInfoByName(pokemonDataStore.pokemon[index].name);
        }

        console.log('%cKindly refresh if all pokemons were not logged!!','color:red; font-size:30px; font-family:cursive;');
    }

    /*--------------------------------------*/
    /* ----- SELF INVOKING FUNCTION ------ */
    /*------------------------------------*/

    (function() {

        //getPokemonInfoByName('pikachu');

        //getPrePokemonsByName('Raticate');

        //getPokemonsByWeakness('ground');

        displayAllPokemons();

    })();