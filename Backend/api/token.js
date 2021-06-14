const express = require("express");
const request = require("request");
const router = express.Router();
let URL ='http://nauth.ksofttechnology.com/API/AUTH';
// let URL = 'http://auth.ksofttechnology.com/API/AUTH';
//let URL

router.get('/', (req, res) => {
  request({
    url: URL,
    method: 'GET',
    json: true,
  },

    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({
          type: 'error',
          message: err.message,
        });
      }
    //  console.log(response)
      console.log(response.body)
      return "test";//res.json(body);
    }

  )
});

router.post('/', (req, res) => {
  console.log(req.body.NAME)
  console.log(req.body.STR[0].A_ID)
  console.log("-----------")
  console.log(req.body)
  request({

    body:req.body,
    url: URL,
    method: 'POST',
    json: true,
  },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({
          type: 'error',
          message: error.message,
        });
      }
      console.log(request);
      console.log("error ------------------------------------------------", error);
      console.log("=============================ERROR==========================");

      console.log(req.body);
      console.log("=============================REQ BODY==========================");

      console.log(body, "BODY", response.statusCode);
      console.log("=============================RES BODY==========================");
      return res.json(body);
    }

  );
});

module.exports = router;
