// refactored declaration
// const app = require("express")();

const express = require("express");
const app = express();

const port = 3000;

// middleware for parsing json (for requests)
app.use(express.json());

app.listen(process.env.PORT || port, () =>
	console.log(`Express app listening at http://localhost:${port}`)
);

app.get("/", (req, res) => {
	res.status(200).send("Hello, World!");
});

app.get("/test", (req, res) => {
	res.status(200).send("Hi mom!");
});

app.get("/route", (req, res) => {
	res.status(200).send({
		shirt: "cute",
		body: "hi",
	});
});

app.get("/shah", (req, res) => {
	res.status(200).send({
		ur: "cute",
		wife: "hot",
		is: "gay",
		a: "hoe",
		bitch: "ass",
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
