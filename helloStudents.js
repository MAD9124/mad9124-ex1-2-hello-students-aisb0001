'use strict'
const say = message => console.log(message)
const students = require('./students.json')
students.forEach((item) => say(`Hello ${item.firstName} ${item.lastName}`))
 let countStudents = students.filter(function (el)
    {
      return el.lastName.charAt(0)=='D';
    });
say(`Count of last names starting with D is ${countStudents.length}`);