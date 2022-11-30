!function(){var n=new URLSearchParams({_limit:5,_sort:"name"});console.log(n.toString()),fetch("https://restcountries.com/#api-endpoints-v3-name").then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){console.log(n)})).catch(console.log)}();
//# sourceMappingURL=index.b1c76b8c.js.map
