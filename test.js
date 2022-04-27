        webSocket = new WebSocket("ws://localhost:2700")
webSocket.onopen = event => {
console.log('info: connected to server');

navigator.mediaDevices
  .getUserMedia({ audio: true, video: false })
  .then(stream => {
    const mediaRecorder = new MediaRecorder(stream, {
      mimeType: 'audio/webm',
    });

    mediaRecorder.addEventListener('dataavailable', event => {
      if (event.data.size > 0) {
        webSocket.send(event.data);
      }
    });

    mediaRecorder.start(1000);
  });
};
webSocket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});
