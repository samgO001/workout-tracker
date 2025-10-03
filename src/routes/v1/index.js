const express = require('express');
const router = express.Router();

// routes
const usersRoutes = require('./users.routes');

// montar rutas v1
router.use('/users', usersRoutes);

router.get('/', (req, res) => {
	res.json({
		message: 'Workout Tracker API v1',
		endpoints: {
			users: '/api/v1/users'
		}
	});
});

module.exports = router;
