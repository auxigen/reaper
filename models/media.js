var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

//module.exports = function() {

var schema = new Schema({
    "title": String,
    "link": String,
    "media": {
        "m":String
    },
    "date_taken": {type: Date, index: true},
    "description": String,
    "published": {type: Date},
    "author": String,
    "author_id": String,
    "tags": Array
},{
    collection : 'medias'
})
//}
    
    module.exports = mongoose.model('Media', schema);
 // mongoose.model('Media', schema);