
let TaiXiu_User  = require('../Models/TaiXiu_user');
let TaiXiu_event = require('../Models/TaiXiu/TaiXiu_event');
let HU          = require('../Models/HU');
let UserInfo    = require('../Models/UserInfo');
let Message     = require('../Models/Message');
let numberWithCommas = require('../Helpers/Helpers').numberWithCommas;
let numberPad        = require('../Helpers/Helpers').numberPad;

let cronDay = function(day){
	if (day < 0) {
		return 6;
	}else if (day > 6) {
		return 0;
	}
	return day;
}
let createMess = function(uid, bet, top, day){
	Message.create({'uid': uid, 'title':'Triệu Hồi Rồng Thần ', 'text':'Xin Chúc Mừng!!' + '\n\n' + 'Bạn nhận được ' + numberWithCommas(bet) + ' R, từ sự kiện Triệu Hồi Rồng Thần.' + '\n' + 'Vị trí của bạn: TOP ' + top + ' - ' + day, 'time':new Date()});
}

module.exports = function(){
	/**
	 * AngryBirds
	*/
	// 100 Angrybird
	HU.findOne({game:'arb', type:100}, 'bet min toX balans x', function(err, arb100){
		let timeNow = new Date();
		timeNow     = timeNow.getDay();
		let homQua  = cronDay(timeNow-1);
		let arb100bet = arb100.bet;
		let file_angrybird = require('../../config/angrybird.json');
		if (file_angrybird[homQua] && arb100.toX < 1 && arb100.balans > 0) {
			arb100bet = arb100bet-(arb100.min*(arb100.x-1));
		}
		if (file_angrybird[timeNow]) {
			HU.updateOne({game:'arb', type:100}, {$set:{'bet': arb100bet, 'toX': file_angrybird['100'].toX, 'balans': file_angrybird['100'].balans, 'x': file_angrybird['100'].x}}).exec();
		}else{
			HU.updateOne({game:'arb', type:100}, {$set:{'toX': 0, 'balans': 0, 'bet': arb100bet}}).exec();
		}
	});

	// 1000 Angrybird
	HU.findOne({game:'arb', type:1000}, 'bet min toX balans x', function(err, arb1000){
		let timeNow = new Date();
		timeNow     = timeNow.getDay();
		let homQua  = cronDay(timeNow-1);
		let arb1000bet = arb1000.bet;
		let file_angrybird = require('../../config/angrybird.json');
		if (file_angrybird[homQua] && arb1000.toX < 1 && arb1000.balans > 0) {
			arb1000bet = arb1000bet-(arb1000.min*(arb1000.x-1));
		}
		if (file_angrybird[timeNow]) {
			HU.updateOne({game:'arb', type:1000}, {$set:{'bet': arb1000bet, 'toX': file_angrybird['1000'].toX, 'balans': file_angrybird['1000'].balans, 'x': file_angrybird['1000'].x}}).exec();
		}else{
			HU.updateOne({game:'arb', type:1000}, {$set:{'toX': 0, 'balans': 0, 'bet': arb1000bet}}).exec();
		}
	});

	// 10000 Angrybird
	HU.findOne({game:'arb', type:10000}, 'bet min toX balans x', function(err, arb10000){
		let timeNow = new Date();
		timeNow     = timeNow.getDay();
		let homQua  = cronDay(timeNow-1);
		let arb10000bet = arb10000.bet;
		let file_angrybird = require('../../config/angrybird.json');
		if (file_angrybird[homQua] && arb10000.toX < 1 && arb10000.balans > 0) {
			arb10000bet = arb10000bet-(arb10000.min*(arb10000.x-1));
		}
		if (file_angrybird[timeNow]) {
			HU.updateOne({game:'arb', type:10000}, {$set:{'bet': arb10000bet, 'toX': file_angrybird['10000'].toX, 'balans': file_angrybird['10000'].balans, 'x': file_angrybird['10000'].x}}).exec();
		}else{
			HU.updateOne({game:'arb', type:10000}, {$set:{'toX': 0, 'balans': 0, 'bet': arb10000bet}}).exec();
		}
	});

	/**
	 * BigBabol
	*/
	// 100 BigBabol
	HU.findOne({game:'bigbabol', type:100}, 'bet min toX balans x', function(err, bbb100){
		let timeNow = new Date();
		timeNow     = timeNow.getDay();
		let homQua  = cronDay(timeNow-1);
		let bbb100bet = bbb100.bet;
		let file_bigbabol  = require('../../config/bigbabol.json');
		if (file_bigbabol[homQua] && bbb100.toX < 1 && bbb100.balans > 0) {
			bbb100bet = bbb100bet-(bbb100.min*(bbb100.x-1));
		}
		if (file_bigbabol[timeNow]) {
			HU.updateOne({game:'bigbabol', type:100}, {$set:{'bet': bbb100bet, 'toX': file_bigbabol['100'].toX, 'balans': file_bigbabol['100'].balans, 'x': file_bigbabol['100'].x}}).exec();
		}else{
			HU.updateOne({game:'bigbabol', type:100}, {$set:{'toX': 0, 'balans': 0, 'bet': bbb100bet}}).exec();
		}
	});

	// 1000 BigBabol
	HU.findOne({game:'bigbabol', type:1000}, 'bet min toX balans x', function(err, bbb1000){
		let timeNow = new Date();
		timeNow     = timeNow.getDay();
		let homQua  = cronDay(timeNow-1);
		let bbb1000bet = bbb1000.bet;
		let file_bigbabol  = require('../../config/bigbabol.json');
		if (file_bigbabol[homQua] && bbb1000.toX < 1 && bbb1000.balans > 0) {
			bbb1000bet = bbb1000bet-(bbb1000.min*(bbb1000.x-1));
		}
		if (file_bigbabol[timeNow]) {
			HU.updateOne({game:'bigbabol', type:1000}, {$set:{'bet': bbb1000bet, 'toX': file_bigbabol['1000'].toX, 'balans': file_bigbabol['1000'].balans, 'x': file_bigbabol['1000'].x}}).exec();
		}else{
			HU.updateOne({game:'bigbabol', type:1000}, {$set:{'toX': 0, 'balans': 0, 'bet': bbb1000bet}}).exec();
		}
	});

	// 10000 BigBabol
	HU.findOne({game:'bigbabol', type:10000}, 'bet min toX balans x', function(err, bbb10000){
		let timeNow = new Date();
		timeNow     = timeNow.getDay();
		let homQua  = cronDay(timeNow-1);
		let bbb10000bet = bbb10000.bet;
		let file_bigbabol  = require('../../config/bigbabol.json');
		if (file_bigbabol[homQua] && bbb10000.toX < 1 && bbb10000.balans > 0) {
			bbb10000bet = bbb10000bet-(bbb10000.min*(bbb10000.x-1));
		}
		if (file_bigbabol[timeNow]) {
			HU.updateOne({game:'bigbabol', type:10000}, {$set:{'bet': bbb10000bet, 'toX': file_bigbabol['10000'].toX, 'balans': file_bigbabol['10000'].balans, 'x': file_bigbabol['10000'].x}}).exec();
		}else{
			HU.updateOne({game:'bigbabol', type:10000}, {$set:{'toX': 0, 'balans': 0, 'bet': bbb10000bet}}).exec();
		}
	});

	/**
	 * MiniPoker
	*/
	// 100 MiniPoker
	HU.findOne({game:'minipoker', type:100}, 'bet min toX balans x', function(err, mpk100){
		let timeNow = new Date();
		timeNow     = timeNow.getDay();
		let homQua  = cronDay(timeNow-1);
		let mpk100bet = mpk100.bet;
		let file_minipoker = require('../../config/minipoker.json');
		if (file_minipoker[homQua] && mpk100.toX < 1 && mpk100.balans > 0) {
			mpk100bet = mpk100bet-(mpk100.min*(mpk100.x-1));
		}
		if (file_minipoker[timeNow]) {
			HU.updateOne({game:'minipoker', type:100}, {$set:{'bet': mpk100bet, 'toX': file_minipoker['100'].toX, 'balans': file_minipoker['100'].balans, 'x': file_minipoker['100'].x}}).exec();
		}else{
			HU.updateOne({game:'minipoker', type:100}, {$set:{'toX': 0, 'balans': 0, 'bet': mpk100bet}}).exec();
		}
	});

	// 1000 MiniPoker
	HU.findOne({game:'minipoker', type:1000}, 'bet min toX balans x', function(err, mpk1000){
		let timeNow = new Date();
		timeNow     = timeNow.getDay();
		let homQua  = cronDay(timeNow-1);
		let mpk1000bet = mpk1000.bet;
		let file_minipoker = require('../../config/minipoker.json');
		if (file_minipoker[homQua] && mpk1000.toX < 1 && mpk1000.balans > 0) {
			mpk1000bet = mpk1000bet-(mpk1000.min*(mpk1000.x-1));
		}
		if (file_minipoker[timeNow]) {
			HU.updateOne({game:'minipoker', type:1000}, {$set:{'bet': mpk1000bet, 'toX': file_minipoker['1000'].toX, 'balans': file_minipoker['1000'].balans, 'x': file_minipoker['1000'].x}}).exec();
		}else{
			HU.updateOne({game:'minipoker', type:1000}, {$set:{'toX': 0, 'balans': 0, 'bet': mpk1000bet}}).exec();
		}
	});

	// 10000 MiniPoker
	HU.findOne({game:'minipoker', type:10000}, 'bet min toX balans x', function(err, mpk10000){
		let timeNow = new Date();
		timeNow     = timeNow.getDay();
		let homQua  = cronDay(timeNow-1);
		let mpk10000bet = mpk10000.bet;
		let file_minipoker = require('../../config/minipoker.json');
		if (file_minipoker[homQua] && mpk10000.toX < 1 && mpk10000.balans > 0) {
			mpk10000bet = mpk10000bet-(mpk10000.min*(mpk10000.x-1));
		}
		if (file_minipoker[timeNow]) {
			HU.updateOne({game:'minipoker', type:10000}, {$set:{'bet': mpk10000bet, 'toX': file_minipoker['10000'].toX, 'balans': file_minipoker['10000'].balans, 'x': file_minipoker['10000'].x}}).exec();
		}else{
			HU.updateOne({game:'minipoker', type:10000}, {$set:{'toX': 0, 'balans': 0, 'bet': mpk10000bet}}).exec();
		}
	});


	/**
	 * Tài Xỉu
	*/
	var topWin = TaiXiu_User.aggregate([
		{$match:{tLineWinRedH:{$gt:0}}},
		{$project: {
			uid:   '$uid',
			top:   '$tLineWinRedH',
			first: '$first',
			last:  '$last',
		}},
		{$sort: {'top': -1, 'last': -1}},
		{$limit: 20}
	]).exec();

	var topLost = TaiXiu_User.aggregate([
		{$match:{tLineLostRedH:{$gt:0}}},
		{$project: {
			uid:   '$uid',
			top:   '$tLineLostRedH',
			first: '$first',
			last:  '$last',
		}},
		{$sort: {'top': -1, 'last': -1}},
		{$limit: 20}
	]).exec();

	Promise.all([topWin, topLost])
	.then(result => {
		Promise.all(result[0].map(function(users, index){
			if (index == 0) {
				createMess(users.uid, 500000, index+1, 'Dây Thắng');
				UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':500000}}).exec(function(err, user){
					let date = new Date();
					date.setDate(date.getDate()-1);
					let stringTime = numberPad(date.getDate(), 2) + '/' + numberPad(date.getMonth()+1, 2) + '/' + date.getFullYear();
					TaiXiu_event.create({date:stringTime, top:index+1, name:user.name, line:users.top, win:true, first:users.first, last:users.last, reward:500000});
					user = null;
					index = null;
					date = null;
					stringTime = null;
				});
			}else if (index == 1) {
				createMess(users.uid, 400000, index+1, 'Dây Thắng');
				UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':400000}}).exec(function(err, user){
					let date = new Date();
					date.setDate(date.getDate()-1);
					let stringTime = numberPad(date.getDate(), 2) + '/' + numberPad(date.getMonth()+1, 2) + '/' + date.getFullYear();
					TaiXiu_event.create({date:stringTime, top:index+1, name:user.name, line:users.top, win:true, first:users.first, last:users.last, reward:400000});
					user = null;
					index = null;
					date = null;
					stringTime = null;
				});
			}else if (index == 2) {
				createMess(users.uid, 300000, index+1, 'Dây Thắng');
				UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':300000}}).exec(function(err, user){
					let date = new Date();
					date.setDate(date.getDate()-1);
					let stringTime = numberPad(date.getDate(), 2) + '/' + numberPad(date.getMonth()+1, 2) + '/' + date.getFullYear();
					TaiXiu_event.create({date:stringTime, top:index+1, name:user.name, line:users.top, win:true, first:users.first, last:users.last, reward:300000});
					user = null;
					index = null;
					date = null;
					stringTime = null;
				});
			}else if (index == 3) {
				createMess(users.uid, 200000, index+1, 'Dây Thắng');
				UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':200000}}).exec(function(err, user){
					let date = new Date();
					date.setDate(date.getDate()-1);
					let stringTime = numberPad(date.getDate(), 2) + '/' + numberPad(date.getMonth()+1, 2) + '/' + date.getFullYear();
					TaiXiu_event.create({date:stringTime, top:index+1, name:user.name, line:users.top, win:true, first:users.first, last:users.last, reward:200000});
					user = null;
					index = null;
					date = null;
					stringTime = null;
				});
			}else if (index == 4) {
				createMess(users.uid, 100000, index+1, 'Dây Thắng');
				UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':100000}}).exec(function(err, user){
					let date = new Date();
					date.setDate(date.getDate()-1);
					let stringTime = numberPad(date.getDate(), 2) + '/' + numberPad(date.getMonth()+1, 2) + '/' + date.getFullYear();
					TaiXiu_event.create({date:stringTime, top:index+1, name:user.name, line:users.top, win:true, first:users.first, last:users.last, reward:100000});
					user = null;
					index = null;
					date = null;
					stringTime = null;
				});
			}else if (index >= 5 && index < 10) {
				createMess(users.uid, 50000, index+1, 'Dây Thắng');
				UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':50000}}).exec(function(err, user){
					let date = new Date();
					date.setDate(date.getDate()-1);
					let stringTime = numberPad(date.getDate(), 2) + '/' + numberPad(date.getMonth()+1, 2) + '/' + date.getFullYear();
					TaiXiu_event.create({date:stringTime, top:index+1, name:user.name, line:users.top, win:true, first:users.first, last:users.last, reward:50000});
					user = null;
					index = null;
					date = null;
					stringTime = null;
				});
			}else if (index >= 10 && index < 20) {
				createMess(users.uid, 20000, index+1, 'Dây Thắng');
				UserInfo.findOneAndUpdate({'id': users.uid}, {$inc:{'red':20000}}).exec(function(err, user){
					let date = new Date();
					date.setDate(date.getDate()-1);
					let stringTime = numberPad(date.getDate(), 2) + '/' + numberPad(date.getMonth()+1, 2) + '/' + date.getFullYear();
					TaiXiu_event.create({date:stringTime, top:index+1, name:user.name, line:users.top, win:true, first:users.first, last:users.last, reward:20000});
					user = null;
					index = null;
					date = null;
					stringTime = null;
				});
			}
		}));

		Promise.all(result[1].map(function(usersL, indexL){
			if (indexL == 0) {
				createMess(usersL.uid, 500000, indexL+1, 'Dây Thua');
				UserInfo.findOneAndUpdate({'id': usersL.uid}, {$inc:{'red':500000}}).exec(function(err, user){
					let date = new Date();
					date.setDate(date.getDate()-1);
					let stringTime = numberPad(date.getDate(), 2) + '/' + numberPad(date.getMonth()+1, 2) + '/' + date.getFullYear();
					TaiXiu_event.create({date:stringTime, top:indexL+1, name:user.name, line:usersL.top, win:false, first:usersL.first, last:usersL.last, reward:500000});
					user = null;
					index = null;
					date = null;
					stringTime = null;
				});
			}else if (indexL == 1) {
				createMess(usersL.uid, 400000, indexL+1, 'Dây Thua');
				UserInfo.findOneAndUpdate({'id': usersL.uid}, {$inc:{'red':400000}}).exec(function(err, user){
					let date = new Date();
					date.setDate(date.getDate()-1);
					let stringTime = numberPad(date.getDate(), 2) + '/' + numberPad(date.getMonth()+1, 2) + '/' + date.getFullYear();
					TaiXiu_event.create({date:stringTime, top:indexL+1, name:user.name, line:usersL.top, win:false, first:usersL.first, last:usersL.last, reward:400000});
					user = null;
					index = null;
					date = null;
					stringTime = null;
				});
			}else if (indexL == 2) {
				createMess(usersL.uid, 300000, indexL+1, 'Dây Thua');
				UserInfo.findOneAndUpdate({'id': usersL.uid}, {$inc:{'red':300000}}).exec(function(err, user){
					let date = new Date();
					date.setDate(date.getDate()-1);
					let stringTime = numberPad(date.getDate(), 2) + '/' + numberPad(date.getMonth()+1, 2) + '/' + date.getFullYear();
					TaiXiu_event.create({date:stringTime, top:indexL+1, name:user.name, line:usersL.top, win:false, first:usersL.first, last:usersL.last, reward:300000});
					user = null;
					index = null;
					date = null;
					stringTime = null;
				});
			}else if (indexL == 3) {
				createMess(usersL.uid, 200000, indexL+1, 'Dây Thua');
				UserInfo.findOneAndUpdate({'id': usersL.uid}, {$inc:{'red':200000}}).exec(function(err, user){
					let date = new Date();
					date.setDate(date.getDate()-1);
					let stringTime = numberPad(date.getDate(), 2) + '/' + numberPad(date.getMonth()+1, 2) + '/' + date.getFullYear();
					TaiXiu_event.create({date:stringTime, top:indexL+1, name:user.name, line:usersL.top, win:false, first:usersL.first, last:usersL.last, reward:200000});
					user = null;
					index = null;
					date = null;
					stringTime = null;
				});
			}else if (indexL == 4) {
				createMess(usersL.uid, 100000, indexL+1, 'Dây Thua');
				UserInfo.findOneAndUpdate({'id': usersL.uid}, {$inc:{'red':100000}}).exec(function(err, user){
					let date = new Date();
					date.setDate(date.getDate()-1);
					let stringTime = numberPad(date.getDate(), 2) + '/' + numberPad(date.getMonth()+1, 2) + '/' + date.getFullYear();
					TaiXiu_event.create({date:stringTime, top:indexL+1, name:user.name, line:usersL.top, win:false, first:usersL.first, last:usersL.last, reward:100000});
					user = null;
					index = null;
					date = null;
					stringTime = null;
				});
			}else if (indexL >= 5 && indexL < 10) {
				createMess(usersL.uid, 50000, indexL+1, 'Dây Thua');
				UserInfo.findOneAndUpdate({'id': usersL.uid}, {$inc:{'red':50000}}).exec(function(err, user){
					let date = new Date();
					date.setDate(date.getDate()-1);
					let stringTime = numberPad(date.getDate(), 2) + '/' + numberPad(date.getMonth()+1, 2) + '/' + date.getFullYear();
					TaiXiu_event.create({date:stringTime, top:indexL+1, name:user.name, line:usersL.top, win:false, first:usersL.first, last:usersL.last, reward:50000});
					user = null;
					index = null;
					date = null;
					stringTime = null;
				});
			}else if (indexL >= 10 && indexL < 20) {
				createMess(usersL.uid, 20000, indexL+1, 'Dây Thua');
				UserInfo.findOneAndUpdate({'id': usersL.uid}, {$inc:{'red':20000}}).exec(function(err, user){
					let date = new Date();
					date.setDate(date.getDate()-1);
					let stringTime = numberPad(date.getDate(), 2) + '/' + numberPad(date.getMonth()+1, 2) + '/' + date.getFullYear();
					TaiXiu_event.create({date:stringTime, top:indexL+1, name:user.name, line:usersL.top, win:false, first:usersL.first, last:usersL.last, reward:20000});
					user = null;
					index = null;
					date = null;
					stringTime = null;
				});
			}
		}));

		TaiXiu_User.updateMany({}, {$set:{'tWinRed':0, 'tLostRed':0, 'totall':0, 'tRedPlay':0,'tLineWinRedH':0,'tLineLostRedH':0,'tLineWinXuH':0,'tLineLostXuH':0,'cLineWinRedH':0,'cLineLostRedH':0,'cLineWinXuH':0,'cLineLostXuH':0}}).exec();
	});
};
