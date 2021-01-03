CREATE TABLE users (
	uid SERIAL PRIMARY KEY,
	username VARCHAR(80) UNIQUE,
	email VARCHAR(150),
	everified BOOLEAN,
	creation DATE,
	last_login DATE
);

CREATE TABLE posts (
	pid SERIAL PRIMARY KEY,
	title VARCHAR(255),
	body VARCHAR,
	user_id INT REFERENCES users(uid),
	author VARCHAR REFERENCES users(username),
	date_created TIMESTAMP,
	like_user_id INT[] DEFAULT ARRAY[]::INT[],
	likes INT DEFAULT 0
);

CREATE TABLE comments (
	cid SERIAL PRIMARY KEY,
	comment VARCHAR(255),
	author VARCHAR REFERENCES users(username),
	user_id INT REFERENCES users(uid),
	post_id INT REFERENCES posts(pid),
	date_created TIMESTAMP
);
