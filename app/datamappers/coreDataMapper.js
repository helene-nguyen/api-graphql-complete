class CoreDataMapper {
    tableName;

    constructor(client) {
        this.client = client;
    }

    /**
     * Get by id
     * @param {number|number[]} id id or list
     * @returns one or multiple infos
     */
    //~ Find one 
    async findByPk(id) {
        const preparedQuery = {
            text: `SELECT * FROM "${this.tableName}" WHERE "id" = $1;`,
            values: [id],
        };

        const result = await this.client.query(preparedQuery);

        if (!result.rows[0]) {
            return null;
        }

        return result.rows[0];
    }

    //~Find all records in database
    async findAll(params) {
        let filter = '';
        const values = [];

        //! condition only if you are in GraphQL structure
        if (params?.$where) {
            const filters = [];
            let indexPlaceholder = 1;

            Object.entries(params.$where).forEach(([param, value]) => {
                if (param === '$or') {
                    const filtersOr = [];
                    Object.entries(value).forEach(([key, val]) => {
                        filtersOr.push(`"${key}" = $${indexPlaceholder}`);
                        values.push(val);
                        indexPlaceholder += 1;
                    });
                    filters.push(`(${filtersOr.join(' OR ')})`);
                } else {
                    filters.push(`"${param}" = $${indexPlaceholder}`);
                    values.push(value);
                    indexPlaceholder += 1;
                }
            });
            filter = `WHERE ${filters.join(' AND ')}`;
        }

        const preparedQuery = {
            text: `
                SELECT * FROM "${this.tableName}"
                ${filter};
            `,
            values,
        };

        const result = await this.client.query(preparedQuery);

        return result.rows;
    }

    //~Create new entry
    async create(inputData) {
        const fields = [];
        const placeholders = [];
        const values = [];
        let indexPlaceholder = 1;

        Object.entries(inputData).forEach(([prop, value]) => {
            fields.push(`"${prop}"`);
            placeholders.push(`$${indexPlaceholder}`);
            indexPlaceholder += 1;
            values.push(value);
        });

        const preparedQuery = {
            text: `
                INSERT INTO "${this.constructor.tableName}"
                (${fields})
                VALUES (${placeholders})
                RETURNING *;
            `,
            values,
        };

        const result = await this.constructor.client.query(preparedQuery);
        const row = result.rows[0];

        return row;
    }

    //~ Update
    async update({ id }, inputData) {
        const fieldsAndPlaceholders = [];
        let indexPlaceholder = 1;
        const values = [];

        Object.entries(inputData).forEach(([prop, value]) => {
            fieldsAndPlaceholders.push(`"${prop}" = $${indexPlaceholder}`);
            indexPlaceholder += 1;
            values.push(value);
        });

        values.push(id);

        const preparedQuery = {
            text: `
                UPDATE "${this.constructor.tableName}" SET
                ${fieldsAndPlaceholders},
                "updated_at" = now()
                WHERE "id" = $${indexPlaceholder}
                RETURNING *;
            `,
            values,
        };

        const result = await this.constructor.client.query(preparedQuery);
        const row = result.rows[0];

        return row;
    }

    async delete(id) {
        await this.constructor.client.query(`DELETE FROM "${this.constructor.tableName}" WHERE "id" = $1;`, [id]);
    }
}

//~export module
export { CoreDataMapper };
