const promessa = new Promise( (resolve, reject) => resolve('ok') )

async function start() {
    try{
        const result = await promessa
        console.log(result);
    }
    catch( e ){
        console.log(e);
    }
    finally {
        console.log("Rodar sempre");
    }
}

start()

// promessa
// .then((response) => console.log(response))
// .catch((err) => console.log(err))
// .finally(() => console.log('sempre irei executar'))