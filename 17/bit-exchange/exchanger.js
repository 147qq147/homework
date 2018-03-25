const request =  require('request');

let url = 'https://blockchain.info/ru/ticker';


function roundFiveDecimals (amount) {
	return Math.round(amount * 100000) / 100000;
}

	module.exports.bitToUSD = function (cur) {
		request(url, function (error, res, body) {
		    if (!error) {
		        let data = JSON.parse(body);
		        console.log('Today ' +cur+ ' Bitsoins cost ' + roundFiveDecimals(cur * data.USD.buy) + data.USD.symbol);
		    }else{
		    	console.log(error);
		    }
		})
  	}

	module.exports.USDtoBit = function (cur) {
		request(url, function (error, res, body) {
		    if (!error) {
		        let data = JSON.parse(body);
		        return 'The ' +cur+ data.USD.symbol +  ' now is equal ' + roundFiveDecimals(cur / data.USD.sell) + ' Bitcoins';
		    }else{
		    	console.log(error);
		    }
		})
	 }
