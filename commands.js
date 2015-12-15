// https://egghead.io/lessons/nodejs-first-api-with-node-js-express-and-mongodb
// http://docs.mongodb.org/manual/tutorial/getting-started-with-the-mongo-shell/
// https://docs.mongodb.org/manual/reference/mongo-shell/

// Insert some data.
mongoimport --db StudentDb --collection student --jsonArray student.json

// Connect to mongo.
mongo

// Show DBs
show dbs

// Connect to db.
use StudentDb

// Check currently selected db
db

// Show all collections
show collections

// Get count.
db.student.count()

// Query all
db.student.find()

// Query all (formatted)
db.student.find().pretty()

// Find one.
db.student.findOne()

// Query.
db.student.find({Id: '67687'}).sort({name: 1}).pretty() // -1 for desc.

// Query with and operator.
db.student.find({
  Id: '67687',
  $and: [{"name": /.*And.*/}]
}).pretty() // -1 for desc.

// Insert.
db.student.insert({
  "name": "Maryland",
  "Id": "67687",

})

// Update.
db.student.update(                  // collection
  {Id: '67687'},           // update criteria
  {$set: {Id: '785442'}},// update action
  {multi: true})                   // update option

// See last insert.
db.student.find().sort({_id: -1}).limit(1)

// Remove all.
db.student.remove({})

// Get count.
db.student.count()

// Exit mongo shell.
quit()

// Drop database.
db.dropDatabase()

// Show DBs
show dbs

// Insert data again.
mongoimport --db StudentDb --collection student --jsonArray student.json

// Connect to mongo.
mongo

// Show DBs
show dbs

// Connect to db.
use StudentDb


//load("scripts/myjstest.js")

// Exit.
//quit()


// Sort.
db.restaurants.find().sort({"borough": 1, "address.Id": 1})