//
// Recibe codigo y lo ejecuta
//

const fs = require('fs');
const { exec, spawn } = require('child_process');

const  generateRandomString = (num) => {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result1= Math.random().toString(36).substring(0,num);       

        return result1;
    }



const ejecuta_codigo_js = async (args) => {

    // Generar un nombre aleatorio para el archivo
    let valor = generateRandomString(12)
    let archivoNombre = "./ejercicios/".concat(valor).concat(".js")
    

    // Crear un archivo con el codigo recibido
    fs.appendFileSync(archivoNombre, args,'utf8')

    exec('node '.concat(archivoNombre), (err, stdout, stderr) => {
        if (err) {
            console.error(err);
        return stderr;
        }

        console.log( stdout )
        fs.unlinkSync(archivoNombre)
        return stdout
    });

}

let codigo = 'let codigo = 1\nconsole.log(codigo)'
ejecuta_codigo_js(codigo).then(value => {console.log(value)})
//console.log(result)

