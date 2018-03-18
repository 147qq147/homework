const http = require('http');
const fs = require('fs');
const remote = require('remote-json');
const file = fs.createWriteStream('file.jpg')
const port = 3000;

http.createServer(function (req,res) {
	if(req.url === '/'){
		res.write('Hello World!');
		res.end();
	} else if(req.url === '/about'){
		console.log(req);
		res.end();
	}else if(req.url === '/file'){
		fs.readFile('drams.mp3', function(err, data){
			res.write(data);		
	   		res.end();
		})
	}else if(req.url === '/currency'){
	remote('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3')
    .get(function (err, res, body) {
        console.log(body);
    });
	}else if(req.url === '/stop'){
		server.close();
	}
}).listen(3000, function() {
	console.log('Server is started')
});