# GraphQL

Author: Yumicode

Développement d'une API GraphQL lors de la formation chez [O'clock](https://oclock.io/formations) en spécialisation Data & API avec @Benjamin Nougadère

## Apollo Server Express & Datasources / Dataloaders

## Introduction

Nous allons utiliser Apollo Server Express pour lier le GraphQL au serveur Express pour son utilisation.

GraphQL (Graph Query Language) est un langage de requêtes et un environnement d'exécution open source. 

Il propose une alternative aux API REST (ou RESTful) qui sont eux une architecture qui permettent de faire des requêtes sur l'URI(Uniform Resource Identifier) d'une ressource qui renvoie une réponse dont le `body` est formaté pour la plupart en JSON.

Dans les deux cas, et comme pour la plupart des cas, le protocole de transfert HTTP est utilisé avec ses méthodes **GET, HEAD, POST, PUT, PATCH, DELETE, CONNECT, OPTIONS et TRACE**.

Grâce à GraphQL, il n'y aura qu'un seul URI utilisé et la méthode sera `POST`. Tout est centralisé et grâce à [Apollo Server Express](https://www.apollographql.com/docs/apollo-server), nous allons optimiser les requêtes et par extension la performance de notre API.

## Initialisation du projet

Pour ce projet, nous allons utiliser le serveur Express et lier le serveur Apollo Server pour pouvoir utiliser GraphQL.

```
npm init
```

Et les dépendances dont ont aura besoin sont les suivantes :

```
npm i  express pg dotenv apollo-server-express apollo-datasource-rest dataloader datasource-sql graphql-scalars
```

## Mise en place de la base de données et connexion

Détails [ici](./__docs__/01-database.md)

## Création des requêtes

## Datasources et Dataloaders

### Datasources

### Datasource API tierce

## Resolvers

## Schemas


___

Sources diverses :

[GraphQL : qu'est-ce que c'est ?](https://www.redhat.com/fr/topics/api/what-is-graphql)

[RESTful : qu'est-ce que c'est ?](https://fr.wikipedia.org/wiki/Representational_state_transfer)