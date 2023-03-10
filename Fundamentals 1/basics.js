const fs = require("fs");
const http = require("http");
const url = require("url");

//////////////////////////////////////////
//files

//Blocking synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

// console.log(textIn);

// const textOut = `This is what we know about the avocado ${textIn}. \nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("file written");

//Non blocking asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   //calls callback function when file is ready
//   console.log(data);
// });

// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("ERROR! 💥");

//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile("./txt/final2.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("Your file has been written 😁");
//       });
//     });
//   });
// });
// console.log("Will read file!");

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//server

const tempOverview = fs.readFileSync(
  `${__dirname}/txt/template-overview.html", "utf-8`
);
const tempCard = fs.readFileSync(
  `${__dirname}/txt/template-card.html", "utf-8`
);
const tempProduct = fs.readFileSync(
  `${__dirname}/txt/template-product.html", "utf-8`
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data); //executed only once at the beginning so it doesnt matter if it blocks execution

const server = http.createServer((req, res) => {
  // console.log(req);
  console.log(req.url);

  const pathName = req.url;

  //overview
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the overview");

    //product
  } else if (pathName === "/product") {
    res.end("This is the product");

    //api
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);

    //not found
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
