// import package hapi
const hapi = require('@hapi/hapi');
const routes = require('./routes');

//membuat server menggunakan hapi dengan fungsi init
const init = async () => {
    //menginisialisasikan server dengan hapi dengan argumen port dan host
    const server = hapi.server({
        port : 5000,
        host : 'localhost',
    });

    //create route server with hapi
    server.route(routes)

    //server start
    await server.start();
    console.log(`server sedang berjalan di ${server.info.uri}`);
}

init();