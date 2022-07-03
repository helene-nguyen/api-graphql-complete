-- Deploy oresto:oresto_v1 to pg

BEGIN;


CREATE DOMAIN "postal_code_fr" AS text CHECK(
    value ~ '^\d{5}$' -- code postaux metropole de 01 a 09
    /*value ~ '^0[1-9]\d{3}$' -- code postaux metropole de 01 a 09
     OR value ~ '^20[1-2]\d{2}$|^20300$' -- code postaux de la Corse
     OR value ~ '^[13-8]\d{4}$' -- code postaux les plus génériques
     OR value ~ '^9[0-6]\d{3}$' -- code postaux metropole commencant par 9
     OR value ~ '^97[1-6]\d{2}$' -- code postaux DOM
     OR value ~ '^98[4678]\d{2}$' -- code postaux TOM
     OR value ~ '^9{5}$' -- code postal de la poste
     */
);

CREATE DOMAIN "email" AS text CHECK(
    value ~ '(?:[a-z0-9!#$%&''*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&''*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])'
);

CREATE TABLE "manager" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" email NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "cooking_style" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "city" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "postal_code" postal_code_fr NOT NULL UNIQUE,
    "geopos" point NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "restaurant" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "description" TEXT NOT NULL,
    "terrace" BOOLEAN NOT NULL DEFAULT FALSE,
    "manager_id" INT NOT NULL REFERENCES "manager" ("id"),
    "city_id" INT NOT NULL REFERENCES "city" ("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "restaurant_has_cooking_style" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "restaurant_id" INT NOT NULL REFERENCES "restaurant" ("id"),
    "cooking_style_id" INT NOT NULL REFERENCES "cooking_style" ("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

COMMIT;
