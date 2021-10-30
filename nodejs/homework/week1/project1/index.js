const { readFile } = require('fs/promises');

async function test(){
    try {
        const controller = new AbortController();
        const { signal } = controller;
        
        const promise = readFile("homework1.json", {signal});

        controller.abort();
        /*
        const promise = readFile("homework1.json", {signal})
            .then(function(result){
                console.log(""+result);
            })
            .catch(function(error){
                console.log(error);
            });
            */
            
        await promise;
    }catch (err) {
        console.error(err);
    }
}

test();
