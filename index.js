var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);

app.get('/', (req, res) => {
    const data={"A":10,"B":20};
    io.emit('New-Message', data);
    res.send('<h1>Hello world</h1>');
});

server.listen(PORT, function () {
    console.log('listening on *:' + PORT);
}
);

var io = require('socket.io')(server);

io.on('connect', function (socket) {

    console.log('a user connected');

    io.emit('message', "hello");

    socket.on('message', function (data) {
        console.log(data);
       
    });  
io.on('connection',(socket)=>{
    socket.on('event_name',(data)=>{   
        const user=JSON.stringify(data)
        console.log(data.Name);
        console.log(data.Age);
    })
})

});

    io.emit('message', "hello");

    socket.on('message', function (data) {
        console.log(data);
        io.emit('message', data);
    });  
io.on('connection',(socket)=>{
    socket.on('event_name',(data)=>{
        console.log(data)
    })
})

});
