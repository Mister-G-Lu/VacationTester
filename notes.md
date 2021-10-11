Location coordinates (to determine distance):

Washington DC: 38.9072° N, 77.0369° W

Example dropdown menu:
<form action="page.php" method="get">
<select id="drop" name="drop">
  <option value="Volvo">Volvo</option>
  <option value="Saab">Saab</option>
  <option value="Mercedes">Mercedes</option>
  <option value="Audi">Audi</option>
</select>
<input type="submit" value="Submit!">
</form>

Example REST API access (in case needed):
<script>
var express = require('express');
var app = express();
var fs = require("fs");

var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

app.post('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["user4"] = user["user4"];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
</script>