db.animals.insertMany([
    {kind: "tiger", weight: 300, name: "Alan", predatory: true},
    {kind: "penguin", weight: 2, name: "Kovalsky", predatory: true},
    {kind: "chicken", weight: 1, name: "Cipa", predatory: false},
    {kind: "shark", weight: 400, name: "Sharp", predatory: false},
    {kind: "shark", weight: 450, name: "John", predatory: false},
    {kind: "panda", weight: 200, name: "Po", predatory: false},
]);
db.animals.updateMany({ kind: "shark" }, { $set: { predatory: true } });
db.animals.updateMany({}, {$inc: {weight: 3}});
db.animals.updateMany({}, {$rename: {kind: "species"}});
db.animals.updateMany(
    { predatory: true },
    { $set: { foods: ["fish", "squid"] } }
);
db.animals.updateOne(
    {species: "tiger"},
    {$push: {foods: "wolf"}}
);
db.animals.updateOne(
    {species: "tiger"},
    {$pull: {foods: "squid"}}
);

db.animals.updateOne(
    {species: "chicken"},
    {$unset: {predatory: ""}}
);


db.animals.updateOne(
    {_id: ObjectId(db.animals.findOne({name: "Kovalsky 2"})._id)},
    {$set: {name: "Kawasaki"}}
);

db.animals.deleteOne({_id: 
    ObjectId(db.animals.findOne({species: "chicken"})._id)
});


db.animals.find({}, {species: 1, _id: 0});
