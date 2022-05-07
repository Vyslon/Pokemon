// Tests unitaires pour mon Projet
/**
* TODO : à TESTER :
* 
*/

suite("Tests pour la fonction garde_entiers_pairs",
      function() { // la suite est mise en place via un callback

        // Un premier test
        test("On vérifie que le résultat ne contient que des entiers pairs",
             function() { // fonction anonyme qui défini ce que le test va faire
               const t = [1,2,3,4];
               const resultat_attendu = [2,4];
               chai.assert.deepEqual(garde_entiers_pairs(t), resultat_attendu);
             });

        // Un autre test
        test("On vérifie que le résultat ne contient que des nombres",
             function() {
               const t = ["a","2",3,4];
               garde_entiers_pairs(t).forEach(v => chai.assert.isNumber(v));
             });

        // Test de non perte
        test("On vérifie que tous les entiers pairs sont renvoyés",
             function() {
               const t = [2,4,6,8];
               const resultat_attendu = [2,4,6,8];
               chai.assert.deepEqual(garde_entiers_pairs(t), resultat_attendu);
             });
      });

suite("Tests pour la fonction trie_articles_date",
      function() {
        test("On vérifie que les articles sont triés par date",
        function() {
          const donnees_exemple =
      [
          { "titre":"CM3 : programmation fonctionnelle en js",
            "date": "2017-02-27",
            "contenu": `Ce cours introduit les notions de programmation avec des fonctions d'ordre supérieur.

  Après avoir revu la définition de fonction, on abordera les fonctions renvoyées en résultat, ainsi que la l'utilisation de valeurs extérieures à la définition de la fonction.

  Outre la manipulation des fonctions commes objets de première classe, la notion de fermeture est un des principaux concepts à retenir de ce cours.`},

          { "titre": "CM1 : introduction à js (1/2)",
            "date": "2017-01-30",
            "contenu": `Ce cours décrit les bases du langage JavaScript.

  On y verra en particulier les valeurs, les types, les structures de tableau et de dictionnaire. Enfin on abordera la définition des fonctions et les méthodes.` },

          { "titre": "CM2 : introduction à js (2/2)",
            "date": "2017-02-06",
            "contenu": `Ce cours poursuit la présentation du langage Javascript.

  Dans ce cours, on abordera les APIs de chaînes de caractères et de tableaux, ainsi que les fonctions passées en argument.`},

          { "titre": "CM4 : programmation asynchrone",
            "date": "2017-03-06",
            "contenu": `Ce cours aborde les notions de programmation asynchrone.

  Après quelques notions fondamentales sur les fonction introduites via le lamnbda-calcul, ce cours abordera des constructions standard de programmation asynchrone, telle que les callbacks et les promesses.`},

          { "titre": "L'UE LIFAP5 est créée",
            "date": "2016-09-01",
            "contenu": "Création de l'UE LIFAP5: programmation fonctionnelle pour le Web.\n\nCette UE aborde la programmation fonctionnelle à travers Javascript et la programmation Web." }
          ];
          const res = trie_articles_date(donnees_exemple);
          chai.assert.deepEqual(res[0].date, "2016-09-01");
          chai.assert.deepEqual(res.pop().date, "2017-03-06");
      });


});

suite("Tests pour la fonction filtre_mois_annee",
function() {
  test("On vérifie que les articles sont bien filtrés",
  function() {
    const donnees_exemple =
[
    { "titre":"CM3 : programmation fonctionnelle en js",
      "date": "2017-02-27",
      "contenu": `Ce cours introduit les notions de programmation avec des fonctions d'ordre supérieur.

Après avoir revu la définition de fonction, on abordera les fonctions renvoyées en résultat, ainsi que la l'utilisation de valeurs extérieures à la définition de la fonction.

Outre la manipulation des fonctions commes objets de première classe, la notion de fermeture est un des principaux concepts à retenir de ce cours.`},

    { "titre": "CM1 : introduction à js (1/2)",
      "date": "2017-01-30",
      "contenu": `Ce cours décrit les bases du langage JavaScript.

On y verra en particulier les valeurs, les types, les structures de tableau et de dictionnaire. Enfin on abordera la définition des fonctions et les méthodes.` },

    { "titre": "CM2 : introduction à js (2/2)",
      "date": "2017-02-06",
      "contenu": `Ce cours poursuit la présentation du langage Javascript.

Dans ce cours, on abordera les APIs de chaînes de caractères et de tableaux, ainsi que les fonctions passées en argument.`},

    { "titre": "CM4 : programmation asynchrone",
      "date": "2017-03-06",
      "contenu": `Ce cours aborde les notions de programmation asynchrone.

Après quelques notions fondamentales sur les fonction introduites via le lamnbda-calcul, ce cours abordera des constructions standard de programmation asynchrone, telle que les callbacks et les promesses.`},

    { "titre": "L'UE LIFAP5 est créée",
      "date": "2016-09-01",
      "contenu": "Création de l'UE LIFAP5: programmation fonctionnelle pour le Web.\n\nCette UE aborde la programmation fonctionnelle à travers Javascript et la programmation Web." }
    ];
    const res = filtre_mois_annee(donnees_exemple, "03", "2017");
    chai.assert.deepEqual(res[0].date, "2017-03-06");
  });
});

// TODO ajouter des suites de tests pour le 3.3
