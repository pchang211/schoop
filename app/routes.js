module.exports = function(router, db) {

	// api routing using router
	router.get('/students', function(req, res) {
		console.log('GET students');
		
		db.collection('students').find().toArray(function(err, items) {
			res.json(items);
		});

	});

	//application routing
	// router.get('*', function(req, res) {
	// 	res.sendfile('./public/index.html'); 
	// });

}