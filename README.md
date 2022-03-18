# weather-app

Small application shows weather in several cities. Developed by [CRA](https://create-react-app.dev/) utility

Uses service https://openweathermap.org/

For local development
1. Clone repo
1. Register on https://openweathermap.org/ and get API key
1. Create file .env.local and add variable for API key ```REACT_APP_OPENWEATHERMAP_API_KEY```
1. Run ```npm i```
1. PROFIT

## known problems ##
1. No paging for city's weather cards
1. No paging or scrolling for result of search - only 5 first are loaded
1. Error of interactions are not shown for user
1. If user gets result of search and accidentally close popup, he has to do new search
