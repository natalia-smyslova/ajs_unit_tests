// TODO: write your code here

export function heroes({ health }) {
  // условная конструкция
  if (health === 100) {
    return 'healthy';
  }
  if (health < 100 && health > 15) {
    return 'wounded';
  }
  return 'critical';
}


export function orderOfHeroes(heroesList) {
  const result = heroesList.sort((a, b) => {
    if (a.health > b.health) {
      return -1;
    }
    if (a.health < b.health) {
      return 1;
    }
    // a должно быть равным b
    return 0;
  });
  return result;
}
