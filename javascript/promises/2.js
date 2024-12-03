//promiseall
const promise1 = Promise.resolve(3);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(1);

Promise.all([promise1, promise2, promise3])
  .then((data) => {
    console.log(data);  // Output: [3, 2, 1]
  })
  .catch((error) => {
    console.error(error);  // This will not be triggered in this case
  });
