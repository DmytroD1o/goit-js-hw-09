
const form = document.querySelector('form');

form.addEventListener('submit', onSubmit)


function createPromise(position, delay) {

   const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    const obj = {
      position,
      delay,
    };
    
 setTimeout(() => {

    if (shouldResolve) {
      resolve (obj);
    } else {
      reject (obj);
    }
  
  }, delay);

  });

  return promise;
}


function onSubmit (evt) {
  evt.preventDefault();
  const  amount = parseInt(form.elements.amount.value);
   const step = parseInt(form.elements.step.value);
    const delay = parseInt(form.elements.delay.value);
    form.reset();

for ( let i = 0; i < amount; i+=1) {

createPromise(i+1,  delay + i * step)
.then(({ position, delay }) => {
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
})
.catch(({ position, delay }) => {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
});
}  
}
   


