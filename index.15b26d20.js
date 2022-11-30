const o=new URLSearchParams({_limit:5,_sort:"name"});console.log(o.toString()),fetch("https://restcountries.com/#api-endpoints-v3-name").then((o=>{if(!o.ok)throw new Error(o.status);return o.json()})).then((o=>{console.log(o)})).catch(console.log);
//# sourceMappingURL=index.15b26d20.js.map
