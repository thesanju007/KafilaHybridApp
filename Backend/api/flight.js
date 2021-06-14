const express = require("express");
const request = require("request");

const router = express.Router();

// let URL = 'http://mdt.ksofttechnology.com/API/FLIGHT';
let URL='http://stageapi.ksofttechnology.com/API/FLIGHT';
router.post('/', (req, res) => {

  request({
    url: URL,
    method: 'POST',
    json: true,
    body:req.body
  },

    (error, response, body) => {
      console.log(req.body)
      console.log("error", error)
      console.log("==================================error===============================================")

      console.log("================================response=================================================")

      console.log("body", body)
      console.log("================================body=================================================")
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
