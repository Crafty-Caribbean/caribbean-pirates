CREATE TYPE skill_level AS ENUM ('Beginner', 'Novice', 'Intermediate', 'Advanced', 'Expert');
CREATE TYPE craft_type AS ENUM ('Crochet', 'Knitting');
CREATE SEQUENCE user_id_seq;
CREATE SEQUENCE patterns_id_seq;
CREATE SEQUENCE comments_id_seq;
CREATE SEQUENCE project_id_seq;
CREATE SEQUENCE token_id_seq;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INT DEFAULT nextval('user_id_seq') NOT NULL PRIMARY KEY,
  email VARCHAR(60) NOT NULL UNIQUE,
  username VARCHAR(60) NOT NULL UNIQUE,
  age INT NOT NULL,
  password VARCHAR(60) NOT NULL,
  image TEXT DEFAULT ''
);

DROP TABLE IF EXISTS patterns;
CREATE TABLE patterns (
  id INT DEFAULT nextval('patterns_id_seq') NOT NULL PRIMARY KEY,
  author_id INT NOT NULL,
  title VARCHAR(60) NOT NULL UNIQUE,
  craft_type craft_type NOT NULL,
  skill_level skill_level NOT NULL,
  price DECIMAL NOT NULL DEFAULT 0.0,
  description TEXT NULL,
  likes INT NOT NULL DEFAULT 0,
  reported BOOLEAN NOT NULL DEFAULT 'false',
  purchased_times INT NOT NULL DEFAULT 0,
  images TEXT[6] NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	deleted BOOLEAN NOT NULL DEFAULT 'false',
  FOREIGN KEY (author_id)
  REFERENCES users(id)
);

DROP TABLE IF EXISTS comments;
CREATE TABLE comments (
	id INT DEFAULT nextval('comments_id_seq') NOT NULL PRIMARY KEY,
	pattern_id INT NOT NULL,
	username VARCHAR(60) DEFAULT 'Anonymous',
	content VARCHAR(1400) NOT NULL,
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (pattern_id) REFERENCES patterns(id)
);

DROP TABLE IF EXISTS user_projects;
CREATE TABLE user_projects (
	id INT DEFAULT nextval('project_id_seq') PRIMARY KEY,
  user_id INTEGER NOT NULL,
  pattern_id INT NOT NULL,
  progress INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  completed_at TIMESTAMP DEFAULT NULL,
  deleted BOOLEAN NOT NULL DEFAULT 'false',
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (pattern_id) REFERENCES patterns(id)
);

DROP TABLE IF EXISTS user_favorite;
CREATE TABLE user_favorite (
  user_id INT NOT NULL,
  pattern_id INT NOT NULL,
  created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, pattern_id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (pattern_id) REFERENCES patterns(id)
);

DROP TABLE IF EXISTS user_purchased;
CREATE TABLE user_purchased (
  user_id INT NOT NULL,
  pattern_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  deleted BOOLEAN NOT NULL DEFAULT 'false',
  PRIMARY KEY (user_id, pattern_id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (pattern_id) REFERENCES patterns(id)
);

DROP TABLE IF EXISTS user_token;
CREATE TABLE user_token (
  id INT DEFAULT nextval('token_id_seq') PRIMARY KEY,
  user_id INT NOT NULL,
  token TEXT NOT NULL
);

--------------------- INDEX ----------------------------------
CREATE INDEX patterns_id_index ON patterns(id);
CREATE INDEX patterns_delete_index ON patterns(deleted);
CREATE INDEX users_id_index ON users(id);
CREATE INDEX user_projects_id_index ON user_projects(id);
CREATE INDEX user_favorite_user_id_index ON user_favorite(user_id);
CREATE INDEX user_favorite_pattern_id_index ON user_favorite(pattern_id);

--------------------- TRIGGERS ---------------------------------

--- TRIGGER for adding favorite
CREATE OR REPLACE FUNCTION add_likes()
  RETURNS TRIGGER
  LANGUAGE PLPGSQL
  AS
$$
BEGIN
     UPDATE patterns
     SET likes = likes + 1
     FROM user_favorite
     WHERE patterns.id = NEW.pattern_id;
     RETURN NEW;
END;
$$;

CREATE TRIGGER add_likes AFTER INSERT
    ON user_favorite
    FOR EACH ROW
    EXECUTE PROCEDURE add_likes();

--- TRIGGER for deleting favorite
CREATE OR REPLACE FUNCTION subtract_likes()
  RETURNS TRIGGER
  LANGUAGE PLPGSQL
  AS
$$
BEGIN
     UPDATE patterns
     SET likes = likes - 1
     FROM user_favorite
     WHERE patterns.id = OLD.pattern_id;
	   RETURN OLD;
END;
$$;

CREATE TRIGGER subtract_likes AFTER DELETE
    ON user_favorite
		FOR EACH ROW
    EXECUTE PROCEDURE subtract_likes();

CREATE OR REPLACE FUNCTION add_purchase_time()
  RETURNS TRIGGER
  LANGUAGE PLPGSQL
  AS
$$
BEGIN
     UPDATE patterns
     SET purchased_times = purchased_times + 1
     FROM user_purchased
     WHERE patterns.id = NEW.pattern_id;
     RETURN NEW;
END;
$$;

CREATE TRIGGER tr_add_purchase_time AFTER INSERT
    ON user_purchased
    FOR EACH ROW
    EXECUTE PROCEDURE add_purchase_time();


-------------- Searching Queries ------------------------------
-- SELECT json_build_object(
-- 	'users', (SELECT COALESCE(json_agg(users), '[]'::json)
-- 	          FROM (SELECT id, username
-- 				    FROM users
-- 				    WHERE username LIKE '%pe%') AS users),

-- 	'patterns', (SELECT COALESCE(json_agg(patterns), '[]'::json)
-- 	             FROM (SELECT id, title
-- 				       FROM patterns
-- 				       WHERE title LIKE '%pe%') AS patterns)
-- )

-- SELECT u.id,
--        u.image,
--        u.username,
-- 	   json_build_object(
-- 	           'favorites', (SELECT COALESCE(json_agg(favorites), '[]'::json)
-- 							 FROM (SELECT p.id,
-- 											p.title,
-- 											p.craft_type,
-- 											p.skill_level AS difficulty,
-- 											p.images,
-- 										   (SELECT username FROM users WHERE users.id=p.author_id) AS author,
-- 								            uf.created_at AS like_at
-- 									FROM patterns p, user_favorite uf
-- 									WHERE p.id=uf.pattern_id
-- 									AND uf.user_id=u.id) AS favorites),
-- 		        'projects', (SELECT COALESCE(json_agg(projects), '[]'::json)
-- 							 FROM (SELECT p.id,
-- 										  p.title,
-- 										  p.craft_type,
-- 										  p.skill_level AS difficulty,
-- 										  p.images,
-- 										 (SELECT username FROM users WHERE users.id=p.author_id) AS author,
-- 								          up.progress,
-- 								          up.created_at AS started_at,
-- 								          up.completed_at
-- 									FROM patterns p, user_projects up
-- 									WHERE p.id=up.pattern_id
-- 									AND up.user_id=u.id) AS projects),
-- 		         'created', (SELECT COALESCE(json_agg(created), '[]'::json)
-- 							 FROM (SELECT p.id,
-- 										  p.title,
-- 										  p.craft_type,
-- 										  p.skill_level AS difficulty,
-- 										  p.images,
-- 										 (SELECT username FROM users WHERE users.id=p.author_id) AS author,
-- 								         p.created_at
-- 									FROM patterns p
-- 									WHERE u.id=p.author_id) AS created)
-- 	         ) patterns
-- FROM users u
-- WHERE u.id=2;


-- SELECT p.id,
--        p.title AS name,
-- 	   json_build_object(
-- 	   	'id', (SELECT u.id FROM users u WHERE u.id=p.author_id),
-- 		'username', (SELECT u.username FROM users u WHERE u.id=p.author_id)
-- 	   ) AS author,
-- 	   p.skill_level,
-- 	   p.craft_type,
-- 	   p.description,
-- 	   p.price,
-- 	   p.images
-- FROM patterns p
-- WHERE p.id=3;