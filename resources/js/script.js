    /*-----------------------------------------------------------*/
    /* ------- Display Pokemon information using its name ----- */
    /*---------------------------------------------------------*/

    function getPokemonInfoByName(name) {

        for (var index in pokemonDataStore.pokemon) {

            // Checki if pokemon exist
            if (pokemonDataStore.pokemon[index].name.toLowerCase() === name.toLowerCase()) {

                console.log('%c          ', 'font-size: 100px; background: url(' + pokemonDataStore.pokemon[index].img + ') no-repeat;');
                console.log('%cPokemon Name: ' + pokemonDataStore.pokemon[index].name, 'font-size:20px; color:black; font-family:cursive;');

                for (var key in pokemonDataStore.pokemon[index]) {

                    if (pokemonDataStore.pokemon[index][key]) {

                        if (key === 'prev_evolution' || key === 'next_evolution') {

                            console.log('%c' + key + ': ' + JSON.stringify(pokemonDataStore.pokemon[index][key]), 'font-size:15px;');
                        } else {

                            console.log('%c' + key + ': ' + pokemonDataStore.pokemon[index][key].toString(), 'font-size:15px;');
                        }
                    }
                }

                return;
            }

        }

        console.log('%c         ', 'font-size: 180px; background: url(https://res.cloudinary.com/gscode/image/upload/v1521799888/pokemon-not-found.png) no-repeat;');
        console.error('%cIncorrect pokemon name or pokemon not found!!', 'font-size:20px;');
    }

    /* ------------------------------------------------------------------ */
    /* ----- Display pre-evolution pokemons of particular pokemon ------ */
    /* ---------------------------------------------------------------- */

    function getPrePokemonsByName(name) {

        for (var index in pokemonDataStore.pokemon) {

            // Check if pokemon exist
            if (pokemonDataStore.pokemon[index].name.toLowerCase() === name.toLowerCase()) {

                if (pokemonDataStore.pokemon[index].prev_evolution) {

                    for (var pokes in pokemonDataStore.pokemon[index].prev_evolution) {

                        console.log('%cPokemon: ' + pokemonDataStore.pokemon[index].prev_evolution[pokes].name, 'font-size:25px; color:black; font-family:cursive;');

                    }
                    console.log('%chas ' + pokemonDataStore.pokemon[index].name + ' as next evolution', 'font-size:20px; color:black; font-family:cursive;');

                } else {

                    console.error('%cNo pokemon has ' + pokemonDataStore.pokemon[index].name + ' as next evolution!!', 'font-size:20px;');
                }

                return;
            }
        }

        console.log('%c         ', 'font-size: 180px; background: url(https://res.cloudinary.com/gscode/image/upload/v1521799888/pokemon-not-found.png) no-repeat;');
        console.error('%cIncorrect pokemon name or pokemon not found!!', 'font-size:20px;');
    }

    /* ------------------------------------------------------------------------------- */
    /* ------------ Display pokemons who have particular weakness ------------------- */
    /* ----------------------------------------------------------------------------- */

    function getPokemonsByWeakness(weakness) {

        console.log('%cPokemons which were found with Weakness ' + weakness + ' are:', 'font-size:25px; color:black; font-family:cursive;');

        for (var index in pokemonDataStore.pokemon) {

            if (pokemonDataStore.pokemon[index].weaknesses) {
                
                for (var particularWeakness in pokemonDataStore.pokemon[index].weaknesses) {
                      
                    if (pokemonDataStore.pokemon[index].weaknesses[particularWeakness].toLowerCase() === weakness.toLowerCase()) {
                       
                        console.log('%c' + pokemonDataStore.pokemon[index].name, 'font-size:20px; color:black; font-family:cursive;');
                        break;
                    }
                }


            }

        }
    }

    /*--------------------------------------*/
    /* ----- SELF INVOKING FUNCTION ------ */
    /*------------------------------------*/

    (function() {
        //getPokemonInfoByName('Charizard');

        //getPrePokemonsByName('metapod');

        getPokemonsByWeakness('Rock');



    })();