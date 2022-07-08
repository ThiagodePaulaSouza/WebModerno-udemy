const timeOut = 1000
const finished = () => console.log('done')

//timeout
const timer = setTimeout(finished, timeOut);
timer
console.log("asincronismo :C");

// para o timeout
clearTimeout(timer)

// roda indefinidamente com intervalos
const interval = setInterval(finished, timeOut)

// para o interval
clearInterval(interval)

setTimeout( () => clearInterval(interval), 3000)