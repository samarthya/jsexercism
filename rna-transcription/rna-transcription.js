/**
    G -> C
    C -> G
    T -> A
    A -> U
 */
export const G = 'C';
export const C = 'G';
export const T = 'A';
export const A = 'U';

// export const toRna = (dna) => {
//   if (dna === null || dna.length == 0) {
//     return ""
//   } else {
//     var rnaRep = "";

//     for (var x of dna) {
//       switch (x) {
//         case 'G':
//           rnaRep += G;
//           break;
//         case 'C':
//           rnaRep += C;
//           break;
//         case 'T':
//           rnaRep += T;
//           break;
//         case 'A':
//           rnaRep += A;
//           break;
//         default:
//           rnaRep += ""
//           break;
//       }
//     }

//     return rnaRep;
//   }
// };


export const toRna = strain => [...strain].map(toComplement).join('');

const toComplement = nucleotide => complements[nucleotide];

const complements = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
};