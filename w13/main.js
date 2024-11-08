const FORM = document.getElementById("form");
const OUT = document.getElementById("output");

function updateDOM(message, el) {
    return new Promise((resolve, reject) => {
        if(message) {
            const newEl = document.createElement(el);
            newEl.textContent = message
            OUT.appendChild(newEl);
            resolve("Sucess");
        } else {
            reject("Error");
        }
    });
}

function onSuccess (data) {
    console.log(`Success: ${data}`)
}
function onError (data) {
    console.log(`Error: ${data}`)
}
function onFinally () {
    console.log(Complete)
}

const startWorkout = (type, reps, time, fn) => {
    return new Promise((resolve, reject) => {
     if (reps > 0 && time > 0) {    //rejects if number of reps or minutes is negative
        fn(`Start ${type} <> Goal reps is ${reps} <> complete in ${time} min!`, "p");
        setTimeout(()=>{
            fn(`Stop ${type}`, "h1");
            resolve(`workout complete`)
            }, time * 3000)
        } else {
            reject(`message for error`)
            fn(`Error: Invalid numbers`, "h1");
        }
    })

}

FORM.addEventListener("submit", e => {
    e.preventDefault();
    const type = e.target.type.value
    const reps = parseInt(e.target.reps.value)
    const time = parseFloat(e.target.time.value)

    startWorkout(type, reps, time, updateDOM)
    .then(onSuccess)
    .catch(onError)
    .finally(onFinally)
    FORM.reset()
});


    