
const formSubmit = document.querySelector('form');

formSubmit.addEventListener('submit', createPromise)



function createPromise(event,position, delay) {
  event.preventDefault();

  const amount = formSubmit.elements.amount.value;
  const step = formSubmit.elements.step.value;
  const currentDelay = formSubmit.elements.delay.value;


  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

      for ( let i = 0; i < amount; i+=1) {
    const position = i;
    const delay = currentDelay + position * step; 
  }

    const obj = {
      position: position,
      delay,
    }
    
  const intervalId = setTimeout(() => {
    if(amount === 0 || position === amount) {
      clearInterval(intervalId)
    }


    if (shouldResolve) {
      resolve (obj)
    } else {
      reject (obj)
    }
  
  }, delay);

  });

  return promise;

}

  
createPromise(obj)
.then(({ position, delay }) => {
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
})
.catch(({ position, delay }) => {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
});

