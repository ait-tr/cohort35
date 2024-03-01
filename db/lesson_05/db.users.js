db.users.aggregate();

db.animals.aggregate([
    {$match: {predatory: true}}
]);

db.animals.aggregate([
    {$match: {predatory: true}},
    {$sort: {weight: -1}},
    {$limit: 1}
]);
   
db.animals.aggregate([
    {$match: {predatory: true}},
    {$sort: {weight: -1}},
    {$skip: 2},
    {$limit: 1}
]);

db.animals.aggregate([
    {$match: {weight: 5}},
    {$project: {name: 1, foods: 1, _id: 0}}
]);

db.animals.aggregate([
    {$match: {predatory: false}},
    {$count: 'number_of_planteaters'}
]);

db.animals.aggregate([
    {$sample: { size: 1 }}
]);

db.animals.aggregate([
    { $match: { weight: { $gt: 100 } } },
    { $sample: { size: 1 } },
]);




