

//Le but : faire la somme de chaque sous array et le ranger de ceuc qui ont la somme la plus grange a ceux qui ont la somme la plus petite


/**
 * sort array of array
 * @param {Array<Array<Number>>} array 
 * @returns {Array<Array<Number>>} sorted array
 */
export function traitement(array) {
  const arraySourc = array.slice();
  let resultatCel1;
  let resultatCel2;

  for (let i = 0; i < arraySourc.length; i++) {
    resultatCel1 = arraySourc[i].reduce((acc, curr) => {
      return acc + curr;
    });
    if (i != arraySourc.length - 1) {
      resultatCel2 = arraySourc[i + 1].reduce((acc, curr) => {
        return acc + curr;
      });
    }
    if (resultatCel1 > resultatCel2) {
       [arraySourc[i], arraySourc[i + 1]] = [arraySourc[i+1], arraySourc[i]];   
      i = -1;
    }
  }

  return arraySourc;
}
