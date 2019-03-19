const mongoose = require('mongoose');
const {Schema}= mongoose;

const Item = new Schema(
{
name: {type: String},
description:{type: String},
amount: {type: Number}
},{
    colecction: 'items'
});

module.exports = mongoose.model('Item',Item);