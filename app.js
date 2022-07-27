const _ = require('lodash');

const numbers = [33, 46, 56, 67, 34,57 ];

_.each(numbers, function(number, i){
    console.log(number);
});