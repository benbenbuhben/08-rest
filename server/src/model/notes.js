'use strict';

const uuid = require('uuid/v4');
const storage = require('../lib/storage.js');

class Note {

constructor(data) {
  this.id = uuid();
  this.createdOn = new Date();
  this.title = data && data.title || '';
  this.content = data && data.content || '';
}

save() {
  console.log(this);
  return storage.save(this);
}

fetchAll() {
  console.log('made it here!')
  return storage.fetchAll();
}

fetchOne(id) {
  return storage.fetchOne(id);
}

deleteOne(id) {
  return storage.deleteOne(id);
}

}

module.exports = Note;