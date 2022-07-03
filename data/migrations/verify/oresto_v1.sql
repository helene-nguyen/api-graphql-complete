-- Verify oresto:oresto_v1 on pg

BEGIN;

SELECT id FROM "manager" WHERE false;

SELECT id FROM "cooking_style" WHERE false;

SELECT id FROM "city" WHERE false;

SELECT id FROM "restaurant" WHERE false;

SELECT id FROM "restaurant_has_type" WHERE false;

ROLLBACK;
