'use strict';
var bookshelf = require('../bookshelf');
var Contact = bookshelf.Model.extend({tableName: 'contacts'});
module.exports = Contact;


