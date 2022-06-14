//var example
const varFuncs = []
for (var i = 0; i < 10; i++) {
    varFuncs.push(function() {
        console.log(i)
    })
    
}
varFuncs[2]()
varFuncs[8]()

const letFuncs = []
for (let i = 0; i < 10; i++) {
    letFuncs.push(function() {
        console.log(i)
    })
    
}

letFuncs[2]()
letFuncs[8]()