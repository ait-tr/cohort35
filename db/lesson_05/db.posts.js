db.posts.insertOne({
    _id: ObjectId("65c6096e0451b42a2273e13c"),
    likes: 10,
    text: "Hi, I am glad to be on likedin",
});

db.comments.insertMany([
    {
      email: "fish@mail.com",
      message: "Oh, you are here! Wonderful!",
      post_id: ObjectId("65c6096e0451b42a2273e13c"),
    },
    {
      email: "eidelman@mail.com",
      message: "Hey, man!",
      post_id: ObjectId("65c6096e0451b42a2273e13c"),
    },
    {
      email: "eidelman@mail.com",
      message: "P.S. love you so!",
      post_id: ObjectId("65c6096e0451b42a2273e13c"),
    },
]);
   // SELECT * FROM comments, posts LEFT JOIN ON post_id = _id;
db.comments.aggregate([
    {$lookup: {
        // куда будем подсматривать - коллекция
      from: "posts",
       // как называется в колл. комменте
      localField: "post_id",
       // как называется в колл. посте
      foreignField: "_id",  
      as: 'post_info'
    }}
]);

db.posts.aggregate([
    {$lookup: {
      from: "comments",
      localField: "_id",
      foreignField: "post_id",
      as: "comments"
    }}
]);


db.kids.insertMany([
    { name: "John", age: 5, gender: "boy" },
    { name: "Anna", age: 6, gender: "girl" },
    { name: "Leyla", age: 4, gender: "girl" },
    { name: "Frieda", age: 3, gender: "boy" },
    { name: "Bob", age: 5, gender: "boy" },
]);
   
db.kids.aggregate([
    { $group: { _id: "$gender", averageAge: { $avg: "$age" }}}
]);

db.kids.aggregate([
    {$group: {_id: "$gender", minAge: {$min: "$age"}}}
]);



   