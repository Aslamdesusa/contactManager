'use strict';

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const Path = require('path');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    // register hapi swagger documentation
    await server.register([
        Inert,
        Vision
    ]);

    if (process.env.NODE_ENV !== 'production') {

        // Static Folder
        await server.route({
            method: 'GET',
            path: '/{p*}',
            handler: {
                directory: {
                    path: Path.join(__dirname, './dist')
                }
            }
        });

        // handle SPA
        await server.route({
            method: 'GET',
            path: '/.*/',
            handler: {
                file: './dist/index.html'
            }});
    }

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();