const o=new URLSearchParams({_limit:5,_sort:"name"});console.log(o.toString()),fetch(`https://jsonplaceholder.typicode.com/users?${o}`).then((o=>{if(!o.ok)throw new Error(o.status);return o.json()})).then((o=>{console.log(o)})).catch(console.log);
//# sourceMappingURL=index.dbb4acc8.js.map
