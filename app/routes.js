module.exports = function(router, db) {

	router.get('/students', function(req, res) {
		console.log('GET students');
		
		db.collection('students').find().toArray(function(err, items) {
			res.json(items);
		});

	});

	router.post('/students', function(req, res) {

		var student = req.body;
		console.log('POST student');

		db.collection('students').insert(student, function(err, result) {
			res.send(
				(err === null) ? {msg: ''} : {msg: err}
			);
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

}