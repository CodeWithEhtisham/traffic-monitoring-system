const sio = io('http://' + document.domain + ':' + location.port);

sio.on('connect', () => {
  console.log('connected clint js');
//   sio.emit('sum', {numbers: [1, 2]});
});

sio.on('disconnect', () => {
  console.log('disconnected');
});

sio.on('image', (data) => {
    console.log("image data recieved website")
    console.log(data)
    
});

sio.on("imagedata",(data) => {
    console.log("image data")
    console.log(data)

});
