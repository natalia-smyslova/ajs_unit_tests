// TODO: write your code here

export function heroes({ name: name, health: health }) {
    //условная конструкция
    if (health === 100) {
        return "healthy"
    }
    if (health < 100 && health > 15) {
        return "wounded"
    }
    else return "critical"

};



export function orderOfHeroes(heroesList) {
    let result = heroesList.sort(function (a, b) {
        if (a.health > b.health) {
            return -1;
        }
        if (a.health < b.health) {
            return 1;
        }
        // a должно быть равным b
        return 0 ;
    })
    return result
};
