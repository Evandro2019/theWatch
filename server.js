//npm install express
//npm init
//gitgnore
//git init
//git status
//git add .
//git commit -m "first commit"
//heroku login
//heroku apps:create hellokittyawesome
//heroku git:remote hellokittyawesome
//git remote     //retorna heroku
//git push heroku master
//heroku open

const { request, response } = require('express');
const express = require('express')
;
const app = express();

app.get("/", (request, response) =>{
    response.send(`
    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
          body {
align-items: center;
background: -moz-linear-gradient(top,  #1e5799 0%, #2989d8 50%, #207cca 51%, #7db9e8 100%);
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#1e5799), color-stop(50%,#2989d8), color-stop(51%,#207cca), color-stop(100%,#7db9e8));
background: -webkit-linear-gradient(top,  #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%);
background: -o-linear-gradient(top,  #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%);
background: -ms-linear-gradient(top,  #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%);
}
        #relgrande{
		text-align: center;
		color: rgb(0, 98, 255);
		font-weight: bold;
		font-size: 60px;
		width: 260px;
		height: 130px;
		border-radius: 1rem;
		background-color: #faf731;

	}
    .center {
      margin: auto;
      width: 60%;
      border: 3px solid #73AD21;
      padding: 10px;
    }

    </style>
</head>
<body>
    <div class="center">
        
    <script>
        function bigWatch(){
        var data=new Date();
        var hor=data.getHours();
        var min=data.getMinutes();
        var seg=data.getSeconds();
        if(hor<10){hor="0"+hor;}
        if(min<10){min="0"+min;}
        if(seg<10){seg="0"+seg;}
    
        var horas=hor+":"+min+":"+seg;
        document.getElementById("relgrande").value=horas;
    
    }
    tempo3=setInterval(bigWatch,1000);
    
    </script>
    
    <input type="text" id="relgrande"/><br>
    
    <img src="https://raw.githubusercontent.com/MariyaSha/SimpleGreetingApp/main/logo.png">

    </div>
</body>
</html> 
    
    `);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("Listen on port ", PORT)
})
