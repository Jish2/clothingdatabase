const express = require("express");
const app = express();

// refactored declaration
// const app = require("express")();

const PORT = 8080;

// middleware for parsing json (for requests)
app.use(express.json());

// I dont think this is necessary
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

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
