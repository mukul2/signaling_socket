const server = require('http').createServer()
const io = require('socket.io')(server)
const onlineUers = new Map();
io.on('connection', function (client) {

  console.log('client connect...', client.id);
  io.emit('mkl', "asd");


  client.on('setInCall', function  name(data) {
    //onlineUers[client.id] = data.userId;
    
    //console.log(onlineUers);
    io.emit("inCall",data.userId);
    // console.log(onlineUers);
  })




  client.on('calldial', function  name(data) {
    //onlineUers[client.id] = data.userId;
     
    //console.log(onlineUers);
    io.emit("callincome"+data.partner,data);
     console.log("callincome "+data.partner);
  })




  client.on('ringing', function  name(data) {
    //onlineUers[client.id] = data.userId;
     io.emit("any","any");
    //console.log(onlineUers);
    io.emit("ringing"+data.id,data.id);
     console.log("ringing "+data.id);
  })




  client.on('callerCandidates', function  name(data) {
    //onlineUers[client.id] = data.userId;
     io.emit("any","any");
    //console.log(onlineUers);
    io.emit("callerCandidates"+data.id,data.cand);
     console.log("callerCandidates "+data.id);
  })



  client.on('calleeCandidates', function  name(data) {
    //onlineUers[client.id] = data.userId;
     io.emit("any","any");
    //console.log(onlineUers);
    io.emit("calleeCandidates"+data.id,data.cand);
     console.log("calleeCandidates "+data.id);
  })

  client.on('offer', function  name(data) {
    //onlineUers[client.id] = data.userId;
     io.emit("any","offer");
    //console.log(onlineUers);
    io.emit("offer"+data.id,data.offer);
     console.log("offer "+data.offer);
  })

  client.on('answer', function  name(data) {
    //onlineUers[client.id] = data.userId;
     io.emit("any","any");
    //console.log(onlineUers);
    io.emit("answer"+data.id,data.answer);
     console.log("answer "+data.answer);
  })





  client.on('offerN', function  name(data) {
    //onlineUers[client.id] = data.userId;
     io.emit("any","offerN");
    //console.log(onlineUers);
    io.emit("offerN"+data.id,data.offer);
     console.log("offer N "+data.offer);
  })

  client.on('answerN', function  name(data) {
    //onlineUers[client.id] = data.userId;
     io.emit("any","answerN");
    //console.log(onlineUers);
    io.emit("answerN"+data.id,data.answer);
     console.log("answerN "+data.answer);
  })





  client.on('accept', function  name(data) {
    //onlineUers[client.id] = data.userId;
     io.emit("any","any");
    //console.log(onlineUers);
    io.emit("accept"+data.id,data.id);
     console.log("accept "+data.id);
  })

  client.on('reject', function  name(data) {
    //onlineUers[client.id] = data.userId;
     io.emit("any","any");
    //console.log(onlineUers);
    io.emit("reject"+data.id,data.id);
     console.log("reject "+data.id);
  })


  client.on('connect', function () {
  })
  client.on('setOnline', function  name(data) {
    //onlineUers[client.id] = data.userId;
     onlineUers.set(client.id,data.userId);
    //console.log(onlineUers);
    io.emit("online",data.userId);
    // console.log(onlineUers);
  })
  // client.on('getOnline', function  name(data) {
  //   //onlineUers[client.id] = data.userId;
  //   onlineUers.set(client.id,data.userId);
  //   //console.log(onlineUers);
  //   io.emit('OS',onlineUers.has(data.userId));
  //    console.log(onlineUers);
  // })
  client.on('disconnect', function () {
    console.log('client disconnect...', client.id)
    // handleDisconnect()
   // delete onlineUers[client.id];
    onlineUers.delete(client.id);
  })

  client.on('error', function (err) {
    console.log('received error from client:', client.id)
    console.log(err)
  })
  client.on('checkOnline', function  name(data) {
    //onlineUers[client.id] = data.userId;
    //console.log(onlineUers);
    //onlineUers.has(data.userId)
    //io.emit('OS'+data.userId,true);
  })
})

var server_port = process.env.PORT || 3000;
server.listen(server_port, function (err) {
  if (err) throw err
  console.log('Listening on port %d', server_port);
});