import { cutMergeConcat } from './trie_fusion.js';
import { traitement } from './trie_array_de_array.js';
import { triage } from './algo_a_tirroir.js';

const arrayTest = [2, 3, 1, 5, 8, 7, 6, 9, 8, 10];
const array_de_array = [[10, 2], [2, 1, 1], [100, 50], [12, 15]];

console.log(triage(arrayTest));
/*[
  1, 2, 3, 5,  6,
  7, 8, 8, 9, 10
]*/

console.log(cutMergeConcat(arrayTest));
/*[
  1, 2, 3, 5,  6,
  7, 8, 8, 9, 10
]*/

console.log(traitement(array_de_array));
/*[ [ 2, 1, 1 ], [ 10, 2 ], [ 12, 15 ], [ 100, 50 ] ]*/