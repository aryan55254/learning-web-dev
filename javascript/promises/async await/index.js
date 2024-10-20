a=1;
b=2;
s=a+b;
async function getdata(){let resultfromweb = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(await resultfromweb.json());
}
getdata();
console.log(s);