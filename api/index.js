import express from "express";

const app = express();

app.set("port", 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
    {
        name: "joske",
        age: 18
    },
    {
        name: "Sam",
        age: 37
    }
];

app.get(
    "/",
    (req, res) => {
        res.send(`
<html>
<body>
            <form method="POST" action="/api/users">
                <input type="text" name="username">
                <input type="number" name="userage">
                <input type="submit">
            </form>
</body>
</html>
            `);
    }
);

app.get(
    "/api/users",
    (req, res) => {

        const query = `
            INSERT INTO users(name, age) VALUES
            ("${req.query.username}", ${req.query.userage})
        `;

        res.json(users);
    }
);

app.post(
    "/api/users",
    (req, res) => {
        // req.query.;
        console.log(req.body);

        users.push({
            name: req.body.username,
            age: req.body.userage
        });
        console.log(users);

        const query = `
            INSERT INTO users(name, age) VALUES
            ("${req.body.username}", ${req.body.userage})
        `;
        res.json(users);
    }
);

app.listen(
    app.get("port"),
    () => {
        console.log("express app gestart")
    }
)