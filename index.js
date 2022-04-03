const express = require("express");
const app = express();

// refactored declaration
// const app = require("express")();

// middleware for parsing json (for requests)
app.use(express.json());

// I dont think this is necessary
// app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

app.listen(process.env.PORT || 3000, function () {
	console.log("Express server listening");
});

// var server_port = process.env.PORT || 80;
// var server_host = process.env.HOST || '0.0.0.0';
// app.listen(server_port, server_host, function() {
//     console.log('Listening on port %d', server_port);
// });

app.get("/", (req, res) => {
	res.status(200).send("Hello, World!");
});

app.get("/route", (req, res) => {
	res.status(200).send({
		shirt: "cute",
		body: "hi",
	});
});

app.post("/route/:id", (req, res) => {
	const { id } = req.params;
	const { logo } = req.body;

	if (!logo) {
		res.status(418).send({ message: "no logo" });
	}

	res.send({
		message: `${id} and ${logo}`,
	});
});
