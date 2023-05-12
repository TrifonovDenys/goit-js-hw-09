function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setInterval(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

createPromise(2, 1000)
  .then(({ position, delay }) => {
      setTimeout(() => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);      
      },delay)  
  })


  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
