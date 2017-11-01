var express = require('express');
var router = express.Router();


var sacredHeart = [
	'J.D.',
	'Turk',
	'Elliot',
	'Carla',
	'Dr. Cox',
	'Jordan',
	'Dr. Kelso',
	'Janitor',
	'The Todd',
	'Laverne',
	'Ted',
	'Dr. Mickhead',
	'Dr. Beardface',
	'Hooch',
	'Dr. Kim Briggs'
];

console.log(sacredHeart);

/* GET home page. */
router.get('/', function(req, res, next) {
	if(sacredHeart.length > 5){
		var long = true;
	}else{
		var long = false;
	}
  res.render('index', {
  	bigBand: long,
  	theStaff: sacredHeart
  });
});

router.get('/remove/:member',(req, res)=>{
	var memberToRemove = req.params.member;
	var indexToSplice = sacredHeart.indexOf(decodeURI(memberToRemove))
	if(indexToSplice > -1){
		sacredHeart.splice(indexToSplice,1);
	}
	res.redirect('/');
	// res.send(memberToRemove);
});

// router.post('/search',(req, res)=>{
// 	var userName = req.body.userName;
// 	if(sacredHeart.indexOf(userName) > -1){
// 		res.send("Rock on, Crue!");
// 	}else{
// 		res.send("What kind of music do you like?");
// 	}
	
// });

router.get('/search',(req,res)=>{
	res.send(req.query.userName);
});

router.post('/addNew',(req, res)=>{
	var newMember = req.body.newMember;
	sacredHeart.push(newMember);
	res.redirect('/')
});

module.exports = router;

