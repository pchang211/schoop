module.exports = function(router, db) {

	router.get('/students', function(req, res) {
		console.log('GET students');
		
		db.collection('students').find().toArray(function(err, items) {
			res.json(items);
		});

	});

	router.post('/students', function(req, res) {
		// console.log('POST students, name: ' + req.name);

		console.log('route:');
		console.log(req.body);

		var student = req.body;
		// var student = {'name': 'new-student', 'age': 11};

		db.collection('students').insert(student, function(err, result) {
			res.send(
				(err === null) ? {msg: ''} : {msg: err}
			);
		});

	});

	//application routing
	// router.get('*', function(req, res) {
	// 	res.sendfile('./public/index.html'); 
	// });

}