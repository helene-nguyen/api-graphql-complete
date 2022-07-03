//~relations

const Manager = {
    restaurants(parent, _, { dataSources }) {
        return dataSources.orestoDB.restaurants.findAll({$where: {manager_id: parent.id} });
    }
}

export { Manager };