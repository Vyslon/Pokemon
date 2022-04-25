/* ******************************************************************
 * Constantes de configuration
 * ****************************************************************** */
const apiKey = "key1"; //"69617e9b-19db-4bf7-a33f-18d4e90ccab7";
const serverUrl = "http://localhost:8080";

/* ******************************************************************
 * Gestion de la boîte de dialogue (a.k.a. modal) d'affichage de
 * l'utilisateur.
 * ****************************************************************** */

/**
 * Fait une requête GET authentifiée sur /whoami
 * @returns une promesse du login utilisateur ou du message d'erreur
 */
function fetchWhoami() {
  return fetch(serverUrl + "/whoami", { headers: { "Api-Key": apiKey } })
    .then((response) => {
      if (response.status === 401) {
        return response.json().then((json) => {
          console.log(json);
          return { err: json.message };
        });
      } else {
        return response.json();
      }
    })
    .catch((erreur) => ({ err: erreur }));
}

/**
 * Fait une requête sur le serveur et insère le login dans la modale d'affichage
 * de l'utilisateur puis déclenche l'affichage de cette modale.
 *
 * @param {Etat} etatCourant l'état courant
 * @returns Une promesse de mise à jour
 */
function lanceWhoamiEtInsereLogin(etatCourant) {
  return fetchWhoami().then((data) => {
    majEtatEtPage(etatCourant, {
      login: data.user, // qui vaut undefined en cas d'erreur
      errLogin: data.err, // qui vaut undefined si tout va bien
      loginModal: true, // on affiche la modale
    });
  });
}

/**
 * Génère le code HTML du corps de la modale de login. On renvoie en plus un
 * objet callbacks vide pour faire comme les autres fonctions de génération,
 * mais ce n'est pas obligatoire ici.
 * @param {Etat} etatCourant
 * @returns un objet contenant le code HTML dans le champ html et un objet vide
 * dans le champ callbacks
 */
function genereModaleLoginBody(etatCourant) {
  const text =
    etatCourant.errLogin !== undefined
      ? etatCourant.errLogin
      : etatCourant.login;
  return {
    html: `
  <section class="modal-card-body">
    <p>${text}</p>
  </section>
  `,
    callbacks: {},
  };
}

/**
 * Génère le code HTML du titre de la modale de login et les callbacks associés.
 *
 * @param {Etat} etatCourant
 * @returns un objet contenant le code HTML dans le champ html et la description
 * des callbacks à enregistrer dans le champ callbacks
 */
function genereModaleLoginHeader(etatCourant) {
  return {
    html: `
<header class="modal-card-head  is-back">
  <p class="modal-card-title">Utilisateur</p>
  <button
    id="btn-close-login-modal1"
    class="delete"
    aria-label="close"
    ></button>
</header>`,
    callbacks: {
      "btn-close-login-modal1": {
        onclick: () => majEtatEtPage(etatCourant, { loginModal: false }),
      },
    },
  };
}

/**
 * Génère le code HTML du base de page de la modale de login et les callbacks associés.
 *
 * @param {Etat} etatCourant
 * @returns un objet contenant le code HTML dans le champ html et la description
 * des callbacks à enregistrer dans le champ callbacks
 */
function genereModaleLoginFooter(etatCourant) {
  return {
    html: `
  <footer class="modal-card-foot" style="justify-content: flex-end">
    <button id="btn-close-login-modal2" class="button">Fermer</button>
  </footer>
  `,
    callbacks: {
      "btn-close-login-modal2": {
        onclick: () => majEtatEtPage(etatCourant, { loginModal: false }),
      },
    },
  };
}

/**
 * Génère le code HTML de la modale de login et les callbacks associés.
 *
 * @param {Etat} etatCourant
 * @returns un objet contenant le code HTML dans le champ html et la description
 * des callbacks à enregistrer dans le champ callbacks
 */
function genereModaleLogin(etatCourant) {
  const header = genereModaleLoginHeader(etatCourant);
  const footer = genereModaleLoginFooter(etatCourant);
  const body = genereModaleLoginBody(etatCourant);
  const activeClass = etatCourant.loginModal ? "is-active" : "is-inactive";
  return {
    html: `
      <div id="mdl-login" class="modal ${activeClass}">
        <div class="modal-background"></div>
        <div class="modal-card">
          ${header.html}
          ${body.html}
          ${footer.html}
        </div>
      </div>`,
    callbacks: { ...header.callbacks, ...footer.callbacks, ...body.callbacks },
  };
}

/* ************************************************************************
 * Gestion de barre de navigation contenant en particulier les bouton Pokedex,
 * Combat et Connexion.
 * ****************************************************************** */

/**
 * Déclenche la mise à jour de la page en changeant l'état courant pour que la
 * modale de login soit affichée
 * @param {Etat} etatCourant
 */
function afficheModaleConnexion(etatCourant) {
  lanceWhoamiEtInsereLogin(etatCourant);
}

/**
 * Génère le code HTML et les callbacks pour la partie droite de la barre de
 * navigation qui contient le bouton de login.
 * @param {Etat} etatCourant
 * @returns un objet contenant le code HTML dans le champ html et la description
 * des callbacks à enregistrer dans le champ callbacks
 */
function genereBoutonConnexion(etatCourant) {
  const html = `
  <div class="navbar-end">
    <div class="navbar-item">
      <div class="buttons">
        <a id="btn-open-login-modal" class="button is-light"> Connexion </a>
      </div>
    </div>
  </div>`;
  return {
    html: html,
    callbacks: {
      "btn-open-login-modal": {
        onclick: () => afficheModaleConnexion(etatCourant),
      },
    },
  };
}

/**
 * Génère le code HTML de la barre de navigation et les callbacks associés.
 * @param {Etat} etatCourant
 * @returns un objet contenant le code HTML dans le champ html et la description
 * des callbacks à enregistrer dans le champ callbacks
 */
function genereBarreNavigation(etatCourant) {
  const connexion = genereBoutonConnexion(etatCourant);
  return {
    html: `
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar">
      <div class="navbar-item"><div class="buttons">
          <a id="btn-pokedex" class="button is-light"> Pokedex </a>
          <a id="btn-combat" class="button is-light"> Combat </a>
      </div></div>
      ${connexion.html}
    </div>
  </nav>`,
    callbacks: {
      ...connexion.callbacks,
      "btn-pokedex": { onclick: () => console.log("click bouton pokedex") },
    },
  };
}

/**
 * Génére le code HTML de la page ainsi que l'ensemble des callbacks à
 * enregistrer sur les éléments de cette page.
 *
 * @param {Etat} etatCourant
 * @returns un objet contenant le code HTML dans le champ html et la description
 * des callbacks à enregistrer dans le champ callbacks
 */
function generePage(etatCourant) {
  const barredeNavigation = genereBarreNavigation(etatCourant);
  const modaleLogin = genereModaleLogin(etatCourant);
  // remarquer l'usage de la notation ... ci-dessous qui permet de "fusionner"
  // les dictionnaires de callbacks qui viennent de la barre et de la modale.
  // Attention, les callbacks définis dans modaleLogin.callbacks vont écraser
  // ceux définis sur les mêmes éléments dans barredeNavigation.callbacks. En
  // pratique ce cas ne doit pas se produire car barreDeNavigation et
  // modaleLogin portent sur des zone différentes de la page et n'ont pas
  // d'éléments en commun.
  return {
    html: barredeNavigation.html + modaleLogin.html,
    callbacks: { ...barredeNavigation.callbacks, ...modaleLogin.callbacks },
  };
}

/* ******************************************************************
 * Initialisation de la page et fonction de mise à jour
 * globale de la page.
 * ****************************************************************** */

/**
 * Créée un nouvel état basé sur les champs de l'ancien état, mais en prenant en
 * compte les nouvelles valeurs indiquées dans champsMisAJour, puis déclenche la
 * mise à jour de la page et des événements avec le nouvel état.
 *
 * @param {Etat} etatCourant etat avant la mise à jour
 * @param {*} champsMisAJour objet contenant les champs à mettre à jour, ainsi
 * que leur (nouvelle) valeur.
 */
function majEtatEtPage(etatCourant, champsMisAJour) {
  const nouvelEtat = { ...etatCourant, ...champsMisAJour };
  majPage(nouvelEtat);
}

/**
 * Prend une structure décrivant les callbacks à enregistrer et effectue les
 * affectation sur les bon champs "on...". Par exemple si callbacks contient la
 * structure suivante où f1, f2 et f3 sont des callbacks:
 *
 * { "btn-pokedex": { "onclick": f1 },
 *   "input-search": { "onchange": f2,
 *                     "oninput": f3 }
 * }
 *
 * alors cette fonction rangera f1 dans le champ "onclick" de l'élément dont
 * l'id est "btn-pokedex", rangera f2 dans le champ "onchange" de l'élément dont
 * l'id est "input-search" et rangera f3 dans le champ "oninput" de ce même
 * élément. Cela aura, entre autres, pour effet de délclencher un appel à f1
 * lorsque l'on cliquera sur le bouton "btn-pokedex".
 *
 * @param {Object} callbacks dictionnaire associant les id d'éléments à un
 * dictionnaire qui associe des champs "on..." aux callbacks désirés.
 */
function enregistreCallbacks(callbacks) {
  Object.keys(callbacks).forEach((id) => {
    const elt = document.getElementById(id);
    if (elt === undefined || elt === null) {
      console.log(
        `Élément inconnu: ${id}, impossible d'enregistrer de callback sur cet id`
      );
    } else {
      Object.keys(callbacks[id]).forEach((onAction) => {
        elt[onAction] = callbacks[id][onAction];
      });
    }
  });
}

/**
 * Mets à jour la page (contenu et événements) en fonction d'un nouvel état.
 *
 * @param {Etat} etatCourant l'état courant
 */
function majPage(etatCourant) {
  console.log("CALL majPage");
  const page = generePage(etatCourant);
  document.getElementById("root").innerHTML = page.html;
  charge_donnees('https://lifap5.univ-lyon1.fr/pokemon', majListePokemons);
  enregistreCallbacks(page.callbacks);
}

/**
 * Appelé après le chargement de la page.
 * Met en place la mécanique de gestion des événements
 * en lançant la mise à jour de la page à partir d'un état initial.
 */
function initClientPokemons() {
  console.log("CALL initClientPokemons");
  const etatInitial = {
    loginModal: false,
    login: undefined,
    errLogin: undefined,
  };

  majPage(etatInitial);
}

/**
 * PROJET
 */

/* Appel de la fonction init_client_duels au après chargement de la page */
document.addEventListener("DOMContentLoaded", () => {
  console.log("Exécution du code après chargement de la page");
  initClientPokemons();
});

/* Fonction générique qui transforme un array en énumération HTML */
function liste_vers_html(liste)
{
    const liste_html = liste.map((element) =>
        `<li>${element}</li>`).join('\n');
    return `<ul>\n${liste_html}</ul>\n`;
}

/** transforme un pokemon en une ligne de tableau à partir de :
 *son numéro dans le pokédex, son nom, ses capacités, son type et l'URL
 * de son logo */
function formate_titre(urlImage, nom, pNumero, capacites, types)
{
    return `<tr class="pokemon" id="${pNumero}">
      <td>
        <img
          alt="${nom}"
          src="${urlImage}"
          width="64"
        />
      </td>
      <td><div class="content">${pNumero}</div></td>
      <td><div class="content">${nom}</div></td>
      <td>
        ${capacites}
      </td>
      <td>
        ${types}
      </td>
    </tr>`;
}

/* Fonction permettant de charger des données depuis une ressource séparée */
function charge_donnees(url, callback) {
  return fetch(url)
    .then((response) => response.text())
    .then((txt) => JSON.parse(txt))
    // .then((response) => { console.log(response); return response.text() })
    // .then((txt) => {console.log(txt); return JSON.parse(txt)})
    .then(callback);
}

/**
 * Met à jour la liste des pokemons
 */
function majListePokemons(donnees)
{
    document.getElementById('body').innerHTML = genereHtmlPokemons(donnees);
    enregistreCallbacksPokemons();
}

/**
 * Génère le code HTML pour l'affichage de tous les pokemons
 */
function genereHtmlPokemons(pokemons)
{
    return pokemons.map(pokemon => formate_titre(pokemon.Images.Detail,
        pokemon.Name, pokemon.PokedexNumber,
        liste_vers_html(pokemon.Abilities),
        liste_vers_html(pokemon.Types))).join('\n');
}

/**
 * Enregistre un callback onClick à chaque pokemon (faire différemment et
 * utiliser enregistreCallbacks?)
 */
function enregistreCallbacksPokemons()
{
    const nbPokemons = document.getElementsByClassName('pokemon').length;
    const tab = Array.from({length: nbPokemons}, (_, i) => i + 1);
    tab.forEach(n => document.getElementById(n).onclick = function(){
            detailsPokemon(n)});
}

/**
 * Récupère les détails d'un pokémon à partir d'un numéro de pokédex puis
 * affiche ses détails
 */
function detailsPokemon(pNumero)
{
    if (document.getElementsByClassName('is-selected').length > 0)
    {
        document.getElementsByClassName('is-selected').item(0).classList
            .remove('is-selected');
    }
    document.getElementById(pNumero).classList.add('is-selected');
    charge_donnees(`https://lifap5.univ-lyon1.fr/pokemon/${pNumero}`,
        afficherDetailsPokemon);
}


function afficherDetailsPokemon(details)
{
    document.getElementsByClassName('card').item(0).innerHTML =
        genererDetailsPokemon(details);
}

/**
 * Génère les détails (HTML) d'un pokemon
 */
function genererDetailsPokemon(details)
{
    const capacites = liste_vers_html(details.Abilities);
    const resistances = liste_vers_html(Object.keys(details.Against)
        .filter(key => details.Against[key] < 1));
    const faiblesses = liste_vers_html(Object.keys(details.Against)
        .filter(key => details.Against[key] > 1));
    // TODO : est-ce que la chaine de caractère est comptée dans la taille
    // de la fonction ? (demander au prof ?) Si oui, trouver une solution
    return `<div class="card">
      <div class="card-header">
        <div class="card-header-title">
        ${details.JapaneseName} (#${details.PokedexNumber})</div>
      </div>
      <div class="card-content">
        <article class="media">
          <div class="media-content">
            <h1 class="title">${details.Name}</h1>
          </div>
        </article>
      </div>
      <div class="card-content">
        <article class="media">
          <div class="media-content">
            <div class="content has-text-left">
              <p>Hit points: ${details.Hp}</p>
              <h3>Abilities</h3>
                ${capacites}
              <h3>Resistant against</h3>
                ${resistances}
              <h3>Weak against</h3>
                ${faiblesses}
            </div>
          </div>
          <figure class="media-right">
            <figure class="image is-475x475">
              <img
                class=""
                src="${details.Images.Full}"
                alt="${details.Name}"
              />
            </figure>
          </figure>
        </article>
      </div>
      <div class="card-footer">
        <article class="media">
          <div class="media-content">
            <button class="is-success button" tabindex="0">
              Ajouter à mon deck
            </button>
          </div>
        </article>
      </div>
    </div>`;
}
