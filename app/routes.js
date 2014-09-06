module.exports = function(router, db) {

	router.get('/students', function(req, res) {
		console.log('GET students query: ');
		console.log(req.query);
		
		db.collection('students').find(req.query).toArray(function(err, items) {
			res.json(items);
		});

	});

	router.post('/students', function(req, res) {

		var student = req.body;
		console.log('POST student: ');
		console.log(student);

		db.collection('students').insert(student, function(err, result) {
			res.send(
				(err === null) ? {msg: ''} : {msg: err}
			);
		});

	});

	router.get('/students/:id', function(req, res) {

		console.log('GET ' + req.params.id);

		db.collection('students').findById(req.params.id, function(err, result) {
			res.json(result);
		});

	});

	router.delete('/students/:id', function(req, res) {

		console.log('DELETE ' + req.params.id);

		db.collection('students').removeById(req.params.id, function(err, result) {
			res.send(
				(err === null) ? {msg: ''} : {msg: err}
			);
		});

	});


//=======================================================================================================================

	router.get('/years', function(req, res) {

		console.log('GET years');

		db.collection('students').distinct('year', function(err, result) {
			res.send(
				(err === null) ? result : {msg: err}
			);
		});

	})

}