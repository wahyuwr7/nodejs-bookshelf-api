import hapi from '@hapi/hapi';
 
const init = async () => {
    const server = hapi.server({
        port: 5000,
        host: 'localhost',
    });
 
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}
 
init();