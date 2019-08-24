export default function getData() {
  return new Promise((resolve, reject) => {
      resolve('ok');
  })
}

// export default {
//   getData: () => {
//     return new Promise((resolve, reject) => {
//         resolve('ok');
//     })
//   }
// }