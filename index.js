// import express from 'express'; // EcmaScript Import

// export default []; // EcmaScript Export

// module.exports = []; // CommonJS Export

const express = require('express'); // CommonJS Import

const app = express();

console.log('Test');

app.use(express.static('./public'));

app.listen(3000, () => console.log('Open http://localhost:3000'));
