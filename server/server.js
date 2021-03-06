import express from 'express'
const app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname + '/../view'));

app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});