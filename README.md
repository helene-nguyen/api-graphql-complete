# GraphQL

Author: Yumicode

Developing a GraphQL API during the training at [O'clock](https://oclock.io/formations) in Data & API specialization with @Benjamin Nougadère

## Apollo Server Express & Datasources / Dataloaders

## Introduction

We will be using Apollo Server Express to connect GraphQL to the Express server for its usage.

GraphQL (Graph Query Language) is a query language and execution environment that is open source.

It offers an alternative to RESTful APIs, which are an architecture that allows querying the URI (Uniform Resource Identifier) of a resource, returning a response with the `body` mostly formatted as JSON.

In both cases, and as is the case for most situations, the HTTP transfer protocol is used with its methods **GET, HEAD, POST, PUT, PATCH, DELETE, CONNECT, OPTIONS, and TRACE**.

With GraphQL, there will only be a single URI used, and the method will be `POST`. Everything is centralized, and with [Apollo Server Express](https://www.apollographql.com/docs/apollo-server), we will optimize the queries and, by extension, the performance of our API.

## Project Setup

For this project, we will be using the Express server and connecting the Apollo Server to be able to use GraphQL.

```
npm init
```

And the dependencies we will need are as follows:

```
npm i  express pg dotenv apollo-server-express apollo-datasource-rest dataloader datasource-sql graphql-scalars
```

## Setting up the Database and Connection

Details [here](./__docs__/01-database.md)

## Creating Queries

## Datasources and Dataloaders

### Datasources

### Third-party API Datasource

## Resolvers

## Schemas

---

Various sources:

[GraphQL: What is it?](https://www.redhat.com/fr/topics/api/what-is-graphql)

[RESTful: What is it?](https://fr.wikipedia.org/wiki/Representational_state_transfer)
