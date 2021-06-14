const express = require("express");
const request = require("request")
const router = express.Router();

let URL = 'http://auth.ksofttechnology.com/API/AUTH';

router.post('/', (req, res) => {
  request({
      headers:application/json,
      url: URL,
      method: 'POST',
      json: true,
      body:{
        NAME: req.body.NAME,
        STR: [
          {
          MODULE: req.body.MODULE,
          A_ID: req.body.A_ID,
          HS: req.body.HS,        
          PWD: req.body.PWD,
          U_ID: req.body.U_ID
        }
      ],
        TYPE: req.body.TYPE
      }


      // body:{
      //   "NAME": "GET_AUTH_TOKEN",
      //   "STR":
      //   [{
      //     "MODULE":"B2B",
      //     "A_ID": "79547372",
      //     "HS": "D",
      //     "PWD": "vikas@12345",
      //     "U_ID": "vikasrathour615@gmail.com"
      //   }],
      //   "TYPE": "AUTH"
      // }

    },

    (error, response, body) => {
      console.log("req body",res.body);
      console.log("=============================REQ BODY==========================");

      console.log("BODY", body);
      console.log("=============================RES BODY==========================");

      console.log("ERROR", error);
      console.log("=============================ERROR==========================");
      console.log(response.statusCode);
      if (error || response.statusCode !== 200) {
        return res.status(500).json({
          type: 'error',
          message: error.message,
        });
      }
      return res.json(body);
    }

  )
});

module.exports = router;