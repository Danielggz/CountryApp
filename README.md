# CountryApp 
by Daniel García

# Description
App to retrieve information from countries. The index prompts a text from the user for typing which country he/she wants to retrieve and a button to search. 
Once the button is clicked, the program will send a request for retrieve information in Node.js on Express route, that will then retrieve the information from the API restcountries, getting information of the selected country. 
Once the information is fetched, the basic information of the country (name, flag, population) will appear on the screen.

# Technologies
Frontend: React
Backend: Node.js, Express.js, Axios library

# Future changes
This application has an issue when displaying the information. It does not show the information right away, it does it when a change on the input is made. This has to be corrected in future versions of this program. 
The issue is derivated from lack of experience using React. When I get more used to React components and the way to work with the asyncronous functions inside, I will be able to correct that error and to create a better coded program.

# Usage
This application is simple. The user just need to write on the input the country that he/she would like to retrieve information. Once do that, in this unfinished version of program, user has to write again to be able to see the information (or view it in the dev console).

# Disponibility
This application can be found in Github as a public repository:
https://github.com/Danielggz/CountryFinder