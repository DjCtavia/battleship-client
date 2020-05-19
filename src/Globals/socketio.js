import socketIOClient from 'socket.io-client';
const ENDPOINT = "http://127.0.0.1:3001";
const socket = socketIOClient(ENDPOINT);

socket.on('test', data =>{
    console.log("Data received:", data);
});

export const IoContext = socket;