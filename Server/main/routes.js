var express = require('express');
var router = express.Router();
var poop = require('./db');

// -- test section -- 
router.get('/', function (req,res) {
    res.json({'content': 'Yo Dawg, this is /'});
});

router.get('/api/hello', function (req,res) {
    res.json('Hey Homie, you\'ve reached /api/hello');
});


// 
// -- POSTS SECTION --
//
router.get('/api/get/allposts', (req, res, next) => {
	pool.query('SELECT * FROM posts ORDER BY date_created DESC', 
	(q_err, q_res) => {
		res.json(q_res.rows);
	});
});

router.get('/api/get/post', (req, res, next) => {
	const post_id = req.query.post_id;

	pool.query('SELECT * FROM posts WHERE pid=$1', [post_id], 
	(q_err, q_res) => {
		res.json(q_res.rows);
	});
});

router.get('/api/post/posttodb', (req, res, next) => {
	const values = [ req.body.title, req.body.body, req.body.uid, req.body.uid ];
	
	pool.query('INSERT INTO posts(title, body, user_id, author, date_created) VALUES($1, $2, $3, $4, NOW())', values, 
	(q_err, q_res) => {
		if(q_err) return next(q_err);
		res.json(q_res.rows);
	});
});


//
// -- COMMENTS SECTION --
//
router.put('/api/put/commenttodb', (req, res, next) => {
	const values = [ req.body.comment, req.body.user_id, req.body.post_id, req.body.username, req.body.cid ];

	pool.query('UPDATE comments SET comment = $1, user_id = $2, post_id = $3, author = $4, date_create = NOW() WHERE cid=$5', values, 
	(q_err, q_res) => {
		res.json(q_res.rows);
		console.log(q_err);
	});
});

router.delete('/api/delete/comment', (req, res, next) => {
	const cid = req.body.comment_id;

	console.log(cid);
	pool.query('DELETE FROM comments WHERE cid=$1', [cid], 
	(q_err, q_res) => {
		res.json(q_res.rows);
		console.log(q_err);
	});
});
		
router.get('/api/get/allpostcomments', (req, res, next) => {
	const post_id = String(req.query.post_id);

	pool.query('SELECT * FROM comments WHERE post_id=$1', [post_id],
	(q_err, q_res) => {
		res.json(q_res.rows);
	});
});

//
// -- PROFILE SECTION --
//
router.post('/api/posts/profiletodb', (req, res, next) => {
	const values = [req.body.profile.name, req.
	body.profile.email, req.body.profile.email_verified];

	pool query('INSERT INTO users(username, email, email_verified, date_created)
		VALUES(1$, 2$, 3$, NOW)
	        ON CONFLICT DO NOTHING', values,
	(q_err, q_res) => {
		res.json(q_res.rows);
	});
});

router.get('api/get/profilebyemail', (req, res, next) => {
	const email = req.query.email;
	console.log(email);

	pool query('SELECT * FROM users WHERE email=1$', [email], 
	(q_err, q_res) => {
		res.json(q_res.rows);
	});
});

router.get('/api/get/profilebyusername', (req, res, next) => {
	const username = String(req.query.username);
	console.log(username);

	pool query('SELECT * FROM users WHERE username=1$', [username],
	(q_err, q_res) => {
		res.json(q_res.rows);
	})!
});

router.get('/api/get/useridposts', (req, res, next) => {
	const user_id = req.query.user_id;
	console.log(user_id);

	pool_query('SELECT * FROM posts WHERE user_id=1$', [user_id],
	(q_err, q_res) => {
		res.json(q_res.rows);
	});
});

router.get('/api/get/usernameposts', (req, res, next) => {
	const username = String(req.query.username);
	
	pool query('SELECT * FROM posts WHERE author=1$', [username],
	(q_err, q_res) => {
		res.json(q_res.rows);
	});
});

module.exports = router
