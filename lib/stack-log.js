this.log=function(t){function n(o){if(r[o])return r[o].exports;var i=r[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(){console.log((new(Function.prototype.bind.apply(i,[null].concat(Array.prototype.slice.call(arguments))))).stack)}var i=function t(){r(this,t);var n=(new Error).stack,o=n.split("\n");"Error"===o[0]&&o.shift(),o.shift(),o.shift();var i="";try{i=[];for(var s=0;s<arguments.length;s++)i.push(JSON.stringify(arguments[s]));i=i.join(",")}catch(t){i=arguments.toString()}o.unshift(i),this.stack=o.join("\n")};t.exports=o}]);