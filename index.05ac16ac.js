!function(){var o=new URLSearchParams({_limit:5,_sort:"name"});console.log(o.toString()),fetch("https://jsonplaceholder.typicode.com/users?".concat(o)).then((function(o){if(!o.ok)throw new Error(o.status);return o.json()})).then((function(o){console.log(o)})).catch(console.log)}();
//# sourceMappingURL=index.05ac16ac.js.map
