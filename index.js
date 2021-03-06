const express = require("express");
const app = express();

// refactored declaration
// const app = require("express")();

const PORT = 8080;

// middleware for parsing json (for requests)
app.use(express.json());

// I dont think this is necessary
app.listen(process.env.PORT || 3000, function () {
	console.log("Listening");
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

app.get("/shah", (req, res) => {
	res.status(200).send({
		ur: "cute",
		wife: "hot",
		is: "gay",
		a: "hoe",
		bitch: "ass",
	});
});

app.get("/test", (req, res) => {
	res.status(200).send("Hi mom!");
});
