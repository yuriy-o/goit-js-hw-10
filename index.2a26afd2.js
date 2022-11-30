const o=new URLSearchParams({_limit:5,_sort:"name"});console.log(o.toString()),fetch("https://restcountries.com/v3.1/all").then((o=>{if(!o.ok)throw new Error(o.status);return o.json()})).then((o=>{console.log(o)})).catch(console.log);
//# sourceMappingURL=index.2a26afd2.js.map
