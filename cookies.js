const http = require("http");

const server = http.createServer((req, res) => {
    const headers = req.headers;
    console.log(headers, ".....");

    if (headers.cookie) {
        console.log("Cookies:", headers.cookie);
    } else {
        console.log("No cookies found in the request header");
    }

    res.end("Check console for cookies information");
});

server.listen(3000, () => {
    console.log("Server running at http://127.0.0.1:3000/");
});
