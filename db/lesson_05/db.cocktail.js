db.cocktail.insertMany([
    {name: "Margarita", price: 150, volume: 15, tag: "dessert"},
    {name: "Gin tonic", price: 180, volume: 25, tag: "cocktail"},
    {name: "Mulled wine", price: 120, volume: 10, tag: "hot"},
    {name: "Whiskey Cola", price: 200, volume: 25, tag: "cocktail"},
    {name: "Long Iceland", price: 250, volume: 35, tag: "cocktail"},
    {name: "Negroni", price: 160, volume: 20, tag: "cocktail"}
])

//найти самый дорогой напиток
db.cocktail.find().sort({price: -1}).limit(1)

db.cocktail.aggregate([
    {$group: { _id: "", maxPrice: {$max: "$price"}}}
])
//найти 3 самых дешевых
db.cocktail.find().sort({price: 1}).limit(3)
db.cocktail.aggregate([
    {$sort: {price: 1}},
    {$limit: 3},
    {$project: {name: 1, price: 1, _id: 0}}
])

//найти один самый крепкий и отобразить его имя
db.cocktail.find({}, {name:1}).sort({volume: -1}).limit(1)

/*
var a = db.cocktail.aggregate([
    {$group: { _id: "", maxVolume: {$max: "$volume"}}}
]).maxVolume

db.cocktail.find({volume: a})


db.cocktails.aggregate([
    {
        $group: {
            _id: null,
            minAlcohol: { $min: "$volume" }
        }
    },
    {
        $match: {
            volume: "$volume"
        }
    },
    {
        $project: {
            _id: 0,
            name: 1
        }
    }
])
*/

//найти все коктейли с тегом cocktail и отобразить только их имена
db.cocktail.find({tag: "cocktail"}, {name:1})

db.cocktail.aggregate([
    {$match: {tag: "cocktail"}},
    {$project: {
      name: 1, _id: 0
    }}
])