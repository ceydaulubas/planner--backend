const app = require('./app');
const http = require('http');

// Server Listener
const PORT = process.env.PORT || 5052;
const server = http.createServer(app);
//Listen
server.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
