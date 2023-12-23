In this assessment I have made a registration form using react and for some styling I have used Bootstarp.
so I have made a form and the repo contains db.json file in it which store the user details. This file is created by JSON REST api server.
I have include all the validations that are mentioned in the problem statement.
The hosted website is not able to fetch the data from the json server. To verify it please check the below steps.
1.To Run the code first clone the website, than in that location on terminal run the command: json-server --watch db.json --port 8000
2. After that open new terminal than run a react app. command: npm run start

By doing this the website will work fine and data will also fetch from tha json server.
