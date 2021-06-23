var usuario = "matias";

function decirHolaAlUsuario(usuario) {
    return 'hola ' + usuario + '!';
}

function decirAdiosAlUsuario(usuario) {
    return 'chau ' + usuario + '!';
}

function crearSaludo(usuario, cb) {
    return cb(usuario)
}

console.log(crearSaludo(usuario, decirAdiosAlUsuario))