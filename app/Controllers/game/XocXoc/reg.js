
module.exports = function(client){
	let xocxoc = client.redT.game.xocxoc;
	if (xocxoc.clients[client.UID]) {
		// Bạn hoặc ai đó đang chơi Xóc Xóc bằng tài khoản này
		client.red({notice:{title:'CẢNH BÁO', text:'Bạn hoặc ai đó đang chơi Xóc Xóc bằng tài khoản này...', load: false}});
	}else{
		// Vào Phòng chơi
		xocxoc.clients[client.UID] = client;
		console.log("Sdfsadfsdf");
		client.red({
			toGame:'XocXoc'
		});



		//joinData:xocxoc.join(client.UID)
		Object.values(xocxoc.clients).forEach(function(users){
			if (client !== users) {
				users.red({xocxoc:{ingame:{client:Object.keys(xocxoc.clients).length+xocxoc.botCount}}});
			}
		});
	}
	xocxoc = null;
	client = null;
};
