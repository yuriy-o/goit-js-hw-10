!function(){var o=new URLSearchParams({_limit:5,_sort:"name"});console.log(o.toString()),fetch("https://restcountries.com/v3.1/all").then((function(o){if(!o.ok)throw new Error(o.status);return o.json()})).then((function(o){console.log(o)})).catch(console.log)}();
//# sourceMappingURL=index.013a3bca.js.map
