//~import modules
import { gql } from 'apollo-server-express';

//~resolve __dirname
import { readFileSync } from 'fs';
const __dirname = `./app/schemas`;

//~read files
const restaurant = readFileSync(`${__dirname}/tables_schema/restaurant.gql`);
const city = readFileSync(`${__dirname}/tables_schema/city.gql`);
const manager = readFileSync(`${__dirname}/tables_schema/manager.gql`);
const cookingStyle = readFileSync(`${__dirname}/tables_schema/cookingStyle.gql`);
const weather = readFileSync(`${__dirname}/other_API_schema/weather.gql`);
const scalars = readFileSync(`${__dirname}/scalars.gql`);

const query = readFileSync(`${__dirname}/query.gql`);

const schema = gql`

    ${scalars}

    ${restaurant}
    ${cookingStyle}
    ${city}
    ${manager}
    ${weather}

    ${query}
`;

export {schema};