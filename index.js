require('./app/index')


// CALLS TO METHODS
// -----------------------------------------------------------------------------

/*var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  insertProject(db, function() {
    findProjects(db, function() {
      db.close();
    });
  });
});*/


// INSERT PROJECT
// -----------------------------------------------------------------------------

/*var insertProject = function(db, callback) {
  // Get the projects collection
  var collection = db.collection('projects');
  // Insert a project
  collection.insert(
    {test : 1}
  , function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    assert.equal(1, result.ops.length);
    console.log("Inserted project into the collection");
    callback(result);
  });
}*/


// FIND PROJECTS
// -----------------------------------------------------------------------------

/*var findProjects = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('projects');
  // Find some documents
  collection.find({}).toArray(function(err, projects) {
    assert.equal(err, null);
    console.log("Found the following projects");
    console.log(projects)
    callback(projects);
  });
}*/


// UPDATE PROJECT
// -----------------------------------------------------------------------------

/*var updateProject = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('projects');
  // Update document where a is 2, set b equal to 1
  collection.updateOne({ a : 2 }
    , { $set: { b : 1 } }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Updated the project with the field a equal to 2");
    callback(result);
  });
}*/
