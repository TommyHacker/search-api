const app = require('./app');
// process.env.port incase hosted later on
// must include .env file and include PORT="chosenport"
// heroku for example will automatically use this code even without specifying a port
const port = process.env.port || 3000;

// show port in console if connected correctly.
app.listen(port, () => console.log(`server port: ${port}`));
