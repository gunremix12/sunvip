
var Bank_history = require('../../../../Models/Bank/Bank_history');
var UserInfo     = require('../../../../Models/UserInfo');
let Push  = require('../../../../Models/Push');
module.exports = function (client, data) {
	if (data.id && data.status) {
		var status = data.status>>0;
		Bank_history.findOne({'_id':data.id}, {}, function(err, history){
			if (history) {
				if (history.status !== status) {
					var update = {};
					if (status === 2) {
						update.red = history.money;  // trả lại
					}else if(history.status === 2){
						update.red = -history.money; // trừ tiền
					}
					UserInfo.updateOne({'id':history.uid}, {$inc:update}).exec();
				}

				history.status = status;
				if (data.info) {
					var info = ''+data.info+'';
					if (info.length < 32) {
						history.info = data.info;
					}
				}
				history.save();
				client.red({banklist:{updateRut:history._doc}});
				Push.create({
					type:"Admin_Update_Bank_Rut",
					data:JSON.stringify({type:status,sale:0,username:client.username,uid:history.uid,money:history.money,name:history.name,bank:history.bank,number:history.number})
				});
			}else{
				client.red({notice:{title:'LỖI',text:'Phiên không được tìm thấy.'}});
			}
		});
	}
}
