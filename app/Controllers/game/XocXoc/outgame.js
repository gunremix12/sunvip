
module.exports = function(client){
	let xocxoc = client.redT.game.xocxoc;
	if (xocxoc.clients[client.UID] === client) {
		delete xocxoc.clients[client.UID];
		xocxoc.out(client.UID,client.avatar);
		let clients = Object.keys(xocxoc.clients).length + xocxoc.botCount;
		Object.values(xocxoc.clients).forEach(function(users){
			if (client !== users) {
				users.red({xocxoc:{ingame:{client:clients,'out':client.UID}}});
			}
		});
	}
	xocxoc = null;
	client = null;
};
