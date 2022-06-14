// Tests unitaires pour mon Projet
const listeDePokemons = [{
    "Abilities": ["Torrent", "Rain Dish"],
    "Against": {
        "Bug": 1,
        "Dark": 1,
        "Dragon": 1,
        "Electric": 2,
        "Fairy": 1,
        "Fight": 1,
        "Fire": 0.5,
        "Flying": 1,
        "Ghost": 1,
        "Grass": 2,
        "Ground": 1,
        "Ice": 0.5,
        "Normal": 1,
        "Poison": 1,
        "Psychic": 1,
        "Rock": 1,
        "Steel": 0.5,
        "Water": 0.5
    },
    "Attack": 103,
    "BaseEggSteps": 5120,
    "BaseHappiness": 70,
    "BaseTotal": 630,
    "CaptureRate": 45,
    "Classification": "",
    "Defense": 120,
    "ExperienceGrowth": 1059860,
    "Generation": 1,
    "HeightM": 1.6,
    "Hp": 79,
    "Images": {
        "Full": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
        "Detail": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png"
    },
    "IsLegendary": 0,
    "JapaneseName": "Kamexカメックス",
    "Name": "Blastoise",
    "PercentageMale": 88.1,
    "PokedexNumber": 9,
    "SpAttack": 135,
    "SpDefense": 115,
    "Speed": 78,
    "Types": ["water"],
    "WeightKg": 85.5
}, {
    "Abilities": ["Swarm", "Sniper"],
    "Against": {
        "Bug": 0.5,
        "Dark": 1,
        "Dragon": 1,
        "Electric": 1,
        "Fairy": 0.5,
        "Fight": 0.25,
        "Fire": 2,
        "Flying": 2,
        "Ghost": 1,
        "Grass": 0.25,
        "Ground": 1,
        "Ice": 1,
        "Normal": 1,
        "Poison": 0.5,
        "Psychic": 2,
        "Rock": 2,
        "Steel": 1,
        "Water": 1
    },
    "Attack": 150,
    "BaseEggSteps": 3840,
    "BaseHappiness": 70,
    "BaseTotal": 495,
    "CaptureRate": 45,
    "Classification": "",
    "Defense": 40,
    "ExperienceGrowth": 1000000,
    "Generation": 1,
    "HeightM": 1,
    "Hp": 65,
    "Images": {
        "Full": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"
        + "015.png",
        "Detail": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
        + "015.png"
    },
    "IsLegendary": 0,
    "JapaneseName": "Spearスピアー",
    "Name": "Beedrill",
    "PercentageMale": 50,
    "PokedexNumber": 15,
    "SpAttack": 15,
    "SpDefense": 80,
    "Speed": 145,
    "Types": ["bug", "poison"],
    "WeightKg": 29.5
}, {
    "Abilities": ["Compoundeyes", "Tinted Lens"],
    "Against": {
        "Bug": 0.5,
        "Dark": 1,
        "Dragon": 1,
        "Electric": 2,
        "Fairy": 1,
        "Fight": 0.25,
        "Fire": 2,
        "Flying": 2,
        "Ghost": 1,
        "Grass": 0.25,
        "Ground": 0,
        "Ice": 2,
        "Normal": 1,
        "Poison": 1,
        "Psychic": 1,
        "Rock": 4,
        "Steel": 1,
        "Water": 1
    },
    "Attack": 45,
    "BaseEggSteps": 3840,
    "BaseHappiness": 70,
    "BaseTotal": 395,
    "CaptureRate": 45,
    "Classification": "",
    "Defense": 50,
    "ExperienceGrowth": 1000000,
    "Generation": 1,
    "HeightM": 1.1,
    "Hp": 60,
    "Images": {
        "Full": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
        "Detail": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png"
    },
    "IsLegendary": 0,
    "JapaneseName": "Butterfreeバタフリー",
    "Name": "Butterfree",
    "PercentageMale": 50,
    "PokedexNumber": 12,
    "SpAttack": 90,
    "SpDefense": 80,
    "Speed": 70,
    "Types": ["bug", "flying"],
    "WeightKg": 32
}, {
    "Abilities": ["Keen Eye", "Tangled Feet", "Big Pecks"],
    "Against": {
        "Bug": 0.5,
        "Dark": 1,
        "Dragon": 1,
        "Electric": 2,
        "Fairy": 1,
        "Fight": 1,
        "Fire": 1,
        "Flying": 1,
        "Ghost": 0,
        "Grass": 0.5,
        "Ground": 0,
        "Ice": 2,
        "Normal": 1,
        "Poison": 1,
        "Psychic": 1,
        "Rock": 2,
        "Steel": 1,
        "Water": 1
    },
    "Attack": 45,
    "BaseEggSteps": 3840,
    "BaseHappiness": 70,
    "BaseTotal": 251,
    "CaptureRate": 255,
    "Classification": "",
    "Defense": 40,
    "ExperienceGrowth": 1059860,
    "Generation": 1,
    "HeightM": 0.3,
    "Hp": 40,
    "Images": {
        "Full": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"
        + "016.png",
        "Detail": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
        + "016.png"
    },
    "IsLegendary": 0,
    "JapaneseName": "Poppoポッポ",
    "Name": "Pidgey",
    "PercentageMale": 50,
    "PokedexNumber": 16,
    "SpAttack": 35,
    "SpDefense": 35,
    "Speed": 56,
    "Types": ["normal", "flying"],
    "WeightKg": 1.8
}];
const liste = ["Keen Eye", "Tangled Feet", "Big Pecks"];

suite("Tests pour la fonction listeVersHtml",
    function() {
        test("On vérifie que le résultat est bien une chaîne de caractères",
            function() {
                chai.assert.deepEqual(typeof(listeVersHtml(liste)), "string");
            });

        test("On vérifie que la liste HTML est correctement générée",
            function() {
                const resultat_attendu = "<ul>\n<li>Keen Eye</li>\n" +
                    "<li>Tangled Feet</li>\n<li>Big Pecks</li></ul>\n";
                chai.assert.deepEqual(listeVersHtml(liste), resultat_attendu);
            });
    });

suite("Tests pour la fonction formateTitre",
    function() {
        test("On vérifie que le résultat est bien une chaîne de caractères",
            function() {
                chai.assert.deepEqual(typeof(formateTitre(liste)), "string");
            });

        test(`On vérifie que la ligne du pokemon a été est correctement
                générée`,
        function() {
            const resultat_attendu = `<tr class='pokemon' id='9'>
                      <td>
                        <img
                          alt='Blastoise'
                          src='https://assets.pokemon.com/assets/cms2/img/
                          pokedex/detail/009.png'
                          width='64'
                        />
                      </td>
                      <td><div class='content'>9</div></td>
                      <td><div class='content'>Blastoise</div></td>
                      <td>
                        <ul>
                <li>Torrent</li>
                <li>Rain Dish</li></ul>

                      </td>
                      <td>
                        <ul>
                <li>water</li></ul>

                      </td>
                    </tr>`;

            chai.assert.deepEqual(
                formateTitre("https://assets.pokemon.com/assets/cms2/"
                + "img/pokedex/detail/009.png", "Blastoise", 9,
                "<ul>\n<li>Torrent</li>\n<li>Rain Dish</li></ul>\n",
                "<ul>\n<li>water</li></ul>\n").replace(/\s/g, ""),
                resultat_attendu.replace(/\s/g, ""));
        });
    });

suite("Tests pour la fonction genererDetailsPokemon",
    function() {
        test("On vérifie que le résultat est bien une chaîne de caractères",
            function() {
                chai.assert.deepEqual(typeof(
                    genererDetailsPokemon(listeDePokemons[0])), "string");
            });

        test("On vérifie que les détails du pokemon sont correctement générés",
            function() {
                const resultat_attendu = `<div class='card'>
                  <div class='card-header'>
                    <div class='card-header-title'>
                    Kamexカメックス (#9)</div>
                  </div>
                      <div class='card-content'>
                        <article class='media'>
                          <div class='media-content'>
                            <h1 class='title'>Blastoise</h1>
                          </div>
                        </article>
                      </div>
                      <div class='card-content'>
                        <article class='media'>
                          <div class='media-content'>
                            <div class='content has-text-left'>
                              <p>Hit points: 79</p>
                              <h3>Abilities</h3>
                                <ul>
                                <li>Torrent</li>
                                <li>Rain Dish</li></ul>

                              <h3>Resistant against</h3>
                                <ul>
                                <li>Fire</li>
                                <li>Ice</li>
                                <li>Steel</li>
                                <li>Water</li></ul>

                              <h3>Weak against</h3>
                                <ul>
                                <li>Electric</li>
                                <li>Grass</li></ul>

                            </div>
                          </div>
                          <figure class='media-right'>
                            <figure class='image is-475x475'>
                              <img
                                class=''
                                src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png'
                                alt='Blastoise'
                              />
                            </figure>
                          </figure>
                        </article>
                      </div>
                      <div class='card-footer'>
                      </div>
                    </div>`;
                chai.assert.deepEqual(genererDetailsPokemon(
                    listeDePokemons[0]).replace(/\s/g, ""),
                resultat_attendu.replace(/\s/g, ""));
            });
    });

suite("Tests pour la fonction trierPokemonsAscendant (tri croissant)",
    function() {
        test(`On vérifie que la liste de pokemons est correctement triée par
            numéro de pokédex`,
        function() {
            const resultat_attendu = [9, 12, 15, 16];

            chai.assert.deepEqual(Array.from(trierPokemonsAscendant(
                listeDePokemons, "#"), pokemon => pokemon.PokedexNumber),
            resultat_attendu);
        });
        test(`On vérifie que la liste de pokemons est correctement triée par
            nom`,
        function() {
            const resultat_attendu = ["Beedrill", "Blastoise",
                "Butterfree", "Pidgey"];

            chai.assert.deepEqual(Array.from(trierPokemonsAscendant(
                listeDePokemons, "Name"), pokemon => pokemon.Name),
            resultat_attendu);
        });
        test(`On vérifie que la liste de pokemons est correctement triée par
            abilities`,
        function() {
            const resultat_attendu = [["Compoundeyes",
                "Tinted Lens"], ["Keen Eye", "Tangled Feet", "Big Pecks"],
            ["Swarm", "Sniper"], ["Torrent", "Rain Dish"]];

            chai.assert.deepEqual(Array.from(trierPokemonsAscendant(
                listeDePokemons, "Abilities"),
            pokemon => pokemon.Abilities),
            resultat_attendu);
        });
        test(`On vérifie que la liste de pokemons est correctement triée par
            types`,
        function() {
            const resultat_attendu = [["bug", "flying"], ["bug",
                "poison"], ["normal", "flying"], ["water"]];

            chai.assert.deepEqual(Array.from(trierPokemonsAscendant(
                listeDePokemons, "Types"), pokemon => pokemon.Types),
            resultat_attendu);
        });
    });

suite("Tests pour la fonction trierPokemonsDescendant (tri décroissant)",
    function() {
        test(`On vérifie que la liste de pokemons est correctement triée par
            numéro de pokédex`,
        function() {
            const resultat_attendu = [16, 15, 12, 9];

            chai.assert.deepEqual(Array.from(trierPokemonsDescendant(
                listeDePokemons, "#"), pokemon => pokemon.PokedexNumber),
            resultat_attendu);
        });
        test(`On vérifie que la liste de pokemons est correctement triée par
            nom`,
        function() {
            const resultat_attendu = ["Pidgey", "Butterfree", "Blastoise",
                "Beedrill"];

            chai.assert.deepEqual(Array.from(trierPokemonsDescendant(
                listeDePokemons, "Name"), pokemon => pokemon.Name),
            resultat_attendu);
        });
        test(`On vérifie que la liste de pokemons est correctement triée par
            abilities`,
        function() {
            const resultat_attendu = [["Torrent", "Rain Dish"], ["Swarm",
                "Sniper"], ["Keen Eye", "Tangled Feet", "Big Pecks"],
            ["Compoundeyes", "Tinted Lens"]];

            chai.assert.deepEqual(Array.from(trierPokemonsDescendant(
                listeDePokemons, "Abilities"),
            pokemon => pokemon.Abilities),
            resultat_attendu);
        });
        test(`On vérifie que la liste de pokemons est correctement triée par
            types`,
        function() {
            const resultat_attendu = [["water"], ["normal", "flying"],
                ["bug", "poison"], ["bug", "flying"]];

            chai.assert.deepEqual(Array.from(trierPokemonsDescendant(
                listeDePokemons, "Types"), pokemon => pokemon.Types),
            resultat_attendu);
        });
    });

suite("Tests pour la fonction filtrerPokemons",
    function() {
        test("On vérifie que la liste de pokemons est correctement filtrée",
            function() {
                const resultat_attendu_1 = ["Beedrill", "Butterfree"];

                chai.assert.deepEqual(Array.from(filtrerPokemons(
                    listeDePokemons, "ee"), pokemon => pokemon.Name),
                resultat_attendu_1);

                const resultat_attendu_2 = ["Pidgey"];

                chai.assert.deepEqual(Array.from(filtrerPokemons(
                    listeDePokemons, "pi"), pokemon => pokemon.Name),
                resultat_attendu_2);

                const resultat_attendu_3 = ["Blastoise"];

                chai.assert.deepEqual(Array.from(filtrerPokemons(
                    listeDePokemons, "toise"), pokemon => pokemon.Name),
                resultat_attendu_3);
            });
    });
