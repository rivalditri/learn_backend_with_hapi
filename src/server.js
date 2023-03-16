// import package hapi
const hapi = require('@hapi/hapi');

//membuat server menggunakan hapi dengan fungsi init
const init = async () => {
    //menginisialisasikan server dengan hapi dengan argumen port dan host
    const server = hapi.server({
        port : 5000,
        host : 'localhost',
    });

    //server start
    await server.start();
    console.log(`server sedang berjalan di ${server.info.uri}`);
}

init();