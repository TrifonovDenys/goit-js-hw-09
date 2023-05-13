import Notiflix from 'notiflix';

function createPromise(i, promiseDelay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ i, promiseDelay });
      } else {
        reject({ i, promiseDelay });
      }
    }, promiseDelay);
  });
  return promise;
}

const refs = {
  buttn: document.querySelector('button'),
  inputFirstDelay: document.querySelector('[name="delay"]'),
  inputDelayStep: document.querySelector('[name="step"]'),
  inputAmount: document.querySelector('[name="amount"]'),
};

refs.buttn.addEventListener('click', onButtonClick);

function onButtonClick(e) {
  e.preventDefault();
  let promiseDelay = refs.inputFirstDelay.valueAsNumber;
  const delay = refs.inputDelayStep.valueAsNumber;
  const a = refs.inputAmount.valueAsNumber;

  const massage = ['Type First delay','Type Delay step','Type Amount']
  if (refs.inputFirstDelay.value === '') Notiflix.Notify.info(`${massage[0]}`);
  if (refs.inputDelayStep.value === '') Notiflix.Notify.info(`${massage[1]}`);
  if (refs.inputAmount.value === '') Notiflix.Notify.info(`${massage[2]}`);

  for (i = 1; i <= a; i++) {
    createPromise(i, promiseDelay)
      .then(({ i, promiseDelay }) => {
        console.log(`✅ Fulfilled promise ${i} in ${promiseDelay}ms`);
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${i} in ${promiseDelay}ms`
        );
      })
      .catch(({ i, promiseDelay }) => {
        console.log(`❌ Rejected promise ${i} in ${promiseDelay}ms`);
        Notiflix.Notify.failure(
          `❌ Rejected promise ${i} in ${promiseDelay}ms`
        );
      });
    promiseDelay += delay;
  }
}
