const http = require('http');
const event = require('events').EventEmitter; 
const evt = new event();
const date = new Date();
const time = date.toTimeString();


evt.on('login', function(login){
	console.log('Пользователь вошел в ' + time);
});
evt.on('someAction', function(someAction){
	console.log('Пользователь перешел на страницу в ' + time);
})
evt.on('logout', function(logout){
	console.log('Пользователь вышел в ' + time);
});

http.createServer(function(req, res){
	if (req.url === '/') {
		evt.emit('login');
		res.write('HEllo')
		res.end()
	}else if(req.url === '/some-page'){
		evt.emit('someAction')
		res.write('Some PAge')
		res.end()
	}else if(req.url === '/exit'){
		evt.emit('logout')
		res.write('Logout')
		res.end()
	}
}).listen(3000, function(){
	console.log('Server is started')
})