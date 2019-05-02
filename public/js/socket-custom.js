
    var socket = io();
    socket.on('connect', function() {

    console.log('Conectado al servidor');
    });
    //escuchar
    socket.on('disconnect', function(){

    console.log('Perdimos coneccion con el servidor');
    });

    // enviar informacion del cliente al servidor
    socket.emit('enviarMensaje',{
        usuario: 'Augusto Vogt',
        mensaje: 'Hola mundo'
    }, function(data){
        console.log('Se disparo un callback',data);
    });

    socket.on('enviarMensaje', function(data){

    console.log('Info servidor:',data);
    });

