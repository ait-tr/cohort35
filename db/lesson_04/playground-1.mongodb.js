// INSERT INTO users (name) VALUES ('Fred');
db.users.insertOne({ name: "Fred"});
// INSERT INTO users (name, age) VALUES ('Anna', 34);
db.users.insertOne({name: "Anna", age: 34});


// INSERT INTO users (name, age, city_id) VALUES ('Davit', 34, 1);
// INSERT INTO cities (id, name) VALUES (1, 'Berlin')
db.users.insertOne({
    name: "Davit",
    age: 34,
    address: { city: "Berlin" }
});
// DROP TABLE users;
db.users.drop();
// SELECT * FROM users;
db.users.find();
/*
INSERT INTO users (name, age) VALUES
('Egor', 25),
('Ded Igor', 76);
*/
db.users.insertMany([
    {name: "Egor", age: 25},
    {name: "Ded Igor", age: 76}
]);

/*
INSERT INTO users (id, name, age) VALUES (1, 'John', 20);
INSERT INTO hobbies (id, hobby_name) VALUES
(1, 'music'),
(2, 'surfing'),
(3, 'video-games'),
(4, 'snowboard');
INSERT INTO users_hobbies (id_user, id_hobby) VALUES 
(1, 1),
(1, 2),
(1, 3),
(1, 4);
*/
db.users.insertOne(
    {
      name: "John",
      age: 20,
      hobbies: ["music", 'surfing', 'video-games', 'snowboard']
    }
);

// SELECT * FROM users LIMIT 3;
db.users.find().limit(3);

// SELECT * FROM users ORDER BY name ASC;
db.users.find().sort({name: 1});

// SELECT * FROM users ORDER BY name DESC;
db.users.find().sort({name: -1});

// SELECT * FROM users ORDER BY name DESC, age ASC;
db.users.find().sort({name: -1, age: 1});

// SELECT * FROM users WHERE age = 34;
db.users.find({age: 34});

// SELECT * FROM users WHERE age = 34 LIMIT 1;
db.users.findOne({age: 34});

// SELECT * FROM users WHERE age > 25;
db.users.find({age: {$gt: 25}});

// SELECT * FROM users WHERE age < 25;
db.users.find({age: {$lt: 25}});

// SELECT * FROM users WHERE age <= 25;
db.users.find({age: {$lte: 25}});

// SELECT * FROM users WHERE name = 'Egor';
db.users.find({ name: { $eq: "Egor" } });
db.users.find({ name: "Egor" });

// SELECT id, name FROM users WHERE age = 34;
db.users.find({age: 34}, {name: 1});

// SELECT name, age FROM users WHERE age = 34;
db.users.find({age: 34}, {name: 1, age: 1, _id: 0});

// не существует аналога
// выводит все поля кроме _id
db.users.find({age: 34}, {_id: 0});

// SELECT * FROM users WHERE name IN ('John', 'Anna');
db.users.find({name: {$in: ["John", "Anna"]}});

// SELECT * FROM users WHERE name NOT IN ('John', 'Anna');
db.users.find({name: {$nin: ["John", "Anna"]}});

// SELECT * FROM user WHERE age = 34 AND name != 'Anna';
db.users.find({$and: [{age: 34}, {name:{$ne: "Anna"}}]});
db.users.find({name:{$ne: "Anna"}, age: 34});

// SELECT * FROM users WHERE age = 25 OR name = 'Ded Igor';
db.user.find({$or: [
    {age: 25}, 
    {name: "Ded Igor"}
]});

// SELECT * FROM users WHERE NOT (age > 70);
db.users.find({age: {$not: {$gt: 70}}});

// самый близкий аналог:
// SELECT * FROM users WHERE age IS NOT NULL;
// выводит только те документы, для которых существует age
db.users.find({age: {$exists: true}});

db.users.insertMany([
    {name: "Fred", salary: 2000, costs: 1500},
    {name: "Kristina", salary: 1300, costs: 2500}
]);

// SELECT * FROM users WHERE salary > costs;
db.users.find({$expr: {$gt: ["$salary", "$costs"]}});

db.users.insertMany([
    {name: "John Snow", hobbies: ["swords", "bows", "wolfs", "red-head"], age: 20},
    {name: "Han Solo", hobbies: ["space", "blasters"], age: 36}
]);


db.users.find({hobbies: {$in: ["space", "snowboard"]}});

