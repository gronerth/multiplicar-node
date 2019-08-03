const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

//let base = 6;
//let argv2 = process.argv;

console.log(argv);
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        console.log('Listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log("Archivo creado:" + " " + `${archivo}`.red))
            .catch(e => console.log(e));
        console.log('crear');
        break;
    default:
        console.log('comando no reconocido');

}


//let parametro = argv[2];
//let base = parametro.split('=')[1]
/*
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));*/