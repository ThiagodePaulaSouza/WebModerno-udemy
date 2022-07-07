const { EventEmitter } = require('events')

ev = new EventEmitter()

ev.on('DigaAlgo', (mensagem) => {
    console.log('eu ouvi você ' + mensagem)
})

ev.emit('DigaAlgo', 'bunitão')
ev.emit('DigaAlgo', 'Horroroso')