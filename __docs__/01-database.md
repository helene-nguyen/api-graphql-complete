# Mise en place de la base de données et connexion

## Création de la base de données

## Utilisation de Sqitch pour le versioning

## Seeding

Attention, pour le seeding, on utilise les informations de connexion venant de notre fichier `pg.js` qui à son tour utilise les variables d'environnement stockées dans le fichier `.env`.

Erreur rencontrée :

```sh
error: la relation « manager » n''existe pas
```

Afin de lancer le fichier `seeding.js` pour le remplissage de nos tables, il ne faudra pas oublier de se positionner là où le fichier `.env` se trouve et on peut alors rentrer la commande

```sh
node data/seeding.js
```

Dans notre cas, on va chercher le fichier dans `data`.
