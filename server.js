const express = require("express");
const nodemailer = require('nodemailer');
const mysql = require("mysql");
const jsonParser = express.json();
const app = express();
const passwordHash = require("password-hash");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "scoredb"
});

app.use(express.static(__dirname + "/public"));
app.get("/score", jsonParser, function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/score", jsonParser, function(request, response) {
  connection.query(`SELECT name, score FROM SCORE `, function(error, result) {
    if (error) {
      return response.status(400).json({ error: error.message });
    }
    console.log("result: ", result);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(result, 0, 3));
  });
});

app.get("/check", jsonParser, function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

let hashedPassword;
app.post("/check", jsonParser, function(request, response) {
  if (!request.body) return response.sendStatus(400);
  console.log(request.body);
  connection.query(
    `SELECT * FROM SCORE WHERE name = '${request.body.name}'`,
    function(error, result) {
      if (error) {
        return response.status(400).json({ error: error.message });
      }

      response.writeHead(200, { "Content-Type": "application/json" });
      if (
        result === undefined ||
        result[0] === undefined ||
        !passwordHash.verify(`'${request.body.password}'`, result[0].password)
      ) {
        console.log(JSON.stringify({ res: "undefined" }));
        response.end(JSON.stringify({ res: "undefined" }));
      } else {
        response.end(JSON.stringify(result[0]));
      }
    }
  );
});

app.get("/record", jsonParser, function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/record", jsonParser, function(request, response) {
  hashedPassword = passwordHash.generate(`'${request.body.password}'`, {
    algorithm: "sha512",
    saltLength: 10,
    iterations: 100
  });
  console.log("la   ", hashedPassword);
  connection.query(
    `INSERT INTO SCORE (name, password, score) VALUES ('${
      request.body.name
    }', '${hashedPassword}', ${request.body.score});`,
    function(error, result) {
      if (error) {
        return response.status(400).json({ error: error });
      }
      console.log("Table successfully updated!");
    }
  );
});

app.get("/update", jsonParser, function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/update", jsonParser, function(request, response) {
  connection.query(
    `UPDATE SCORE SET score = score + '${request.body.score}' WHERE id = ${
      request.body.id
    }`,
    function(error) {
      if (error) {
        return response.status(400).json({ error: error.message });
      }
      console.log("Table successfully updated!");
    }
  );
  if (!request.body) return response.sendStatus(400);
  console.log(request.body);
});

app.get("/getRiddles", jsonParser, function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/getRiddles", jsonParser, function(request, response) {
  connection.query(`SELECT * FROM riddles`, function(error, result) {
    if (error) {
      return response.status(400).json({ error: error.message });
    }
    console.log("result: ", result);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(result, 0, 3));
  });
});

app.get("/getPictures", jsonParser, function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/getPictures", jsonParser, function(request, response) {
  connection.query(`SELECT * FROM pictures`, function(error, result) {
    if (error) {
      return response.status(400).json({ error: error.message });
    }
    console.log("result: ", result);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(result, 0, 2));
  });
});

app.get("/getVegetables", jsonParser, function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/getVegetables", jsonParser, function(request, response) {
  connection.query(`SELECT * FROM vegetables`, function(error, result) {
    if (error) {
      return response.status(400).json({ error: error.message });
    }
    console.log("result: ", result);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(result, 0, 2));
  });
});

app.get("/getFruits", jsonParser, function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/getFruits", jsonParser, function(request, response) {
  connection.query(`SELECT * FROM fruits`, function(error, result) {
    if (error) {
      return response.status(400).json({ error: error.message });
    }
    console.log("result: ", result);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(result, 0, 2));
  });
});

app.get("/getWords", jsonParser, function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/getWords", jsonParser, function(request, response) {
  connection.query(`SELECT * FROM compoundWords`, function(error, result) {
    if (error) {
      return response.status(400).json({ error: error.message });
    }
    console.log("result: ", result);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(result, 0, 2));
  });
});

app.get("/getLogos", jsonParser, function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/getLogos", jsonParser, function(request, response) {
  connection.query(`SELECT * FROM carLogo`, function(error, result) {
    if (error) {
      return response.status(400).json({ error: error.message });
    }
    console.log("result: ", result);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(result, 0, 2));
  });
});

app.get("/sendToMail", jsonParser, function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/sendToMail", jsonParser, function (request, response) {

  if (!request.body) return response.sendStatus(400);
  console.log(request.body);

  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true, //true --> will use ssl
    auth: {
      user: 'u email',//
      pass: 'u password'//
    }
  });

  const mailOptions = {
    from: 'Game <u email>',
    to: `${request.body.mail}`,
    subject: 'You data',
    text: 'Do not disclose your data to anyone!',
    html: `<b>Email:<b> ${request.body.mail};<br>
               <b>Nickname:<b> ${request.body.name};<br>
               <b>Password:<b> ${request.body.password};<br>`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Message sent: ' + info.response);
    }
    transporter.close();
  });
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end();

});

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});
app.use(express.static(__dirname + "/public"));

app.listen(process.env.PORT || 8080);
console.log("Server running on port 8080.");
