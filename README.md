# Proverb Generator

This is a simple web application built with Express.js that generates random proverbs. It provides users with inspirational and thought-provoking proverbs retrieved from a predefined list.

# Features
- Random Proverb Generation: Users can access a random proverb by making a GET request to the /proverbs endpoint.

- Dark Theme: The application supports a dark theme for users who prefer a darker user interface. The theme is toggleable, providing a personalized experience.


## Endpoints
Random Proverb:
Endpoint: /proverbs
Method: GET
Response Format: JSON
Example Response:
```js
{
  "proverb": "Your random proverb goes here."
}
