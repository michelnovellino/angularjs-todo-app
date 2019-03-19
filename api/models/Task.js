const mongoose = require('mongoose');
const {Schema}= mongoose;

const Task = new Schema(
{
title: {type: String},
name: {type: String}
},{
    colecction: 'tasks'
});

module.exports = mongoose.model('Task',Task);