const express = require("express");

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("server running at https://localhost:3000");
});

app.post("/", (req, res) => {
  const { IMEI } = req.body;
  let sum = 0;
  if (IMEI.length != 15) {
    res.send(`${IMEI} is an Invalid IMEI number`);
  } else {
    let arr = Array.from(IMEI);
    arr.forEach((element, index) => {
      if (index % 2 != 0) {
        let num = parseInt(element) * 2;
        if (num > 9) {
          let string = String(num);
          num = 0;
          for (let s of string) {
            num = parseInt(s);
          }
        }

        sum += num;
      } else {
        sum += parseInt(element);
      }
    });

    if (sum % 10 != 0) {
      res.send(`${IMEI} is a valid IMEI number`);
    } else {
      res.send(`${IMEI} ${sum}is an Invalid IMEI number`);
    }
  }
});
