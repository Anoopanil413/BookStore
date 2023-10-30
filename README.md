# BookStore
This is a server-side application for Book store using Node.js



The API documentation which is being tested using POstman (please check the API documentation for API tests) =========>  "https://documenter.getpostman.com/view/24936372/2s9YXb85JK"
please check the documentation for detailed req, and response with the example provided in the documentation

# Book Management API

This is a RESTful API for managing books. It provides endpoints for creating, retrieving, updating, and deleting book records in a MongoDB database.

## API Endpoints and Their Usage

- **Create a New Book**

  - Endpoint: `POST /user/books`
  - Usage: Create a new book record.
  

- **View List of All Books**

  - Endpoint: `GET /user/books`
  - Usage: Retrieve a list of all books.

- **View Details of a Specific Book by ID**

  - Endpoint: `GET /user/books/:id`
  - Usage: Retrieve details of a specific book by its ID.

- **Update a Book's Details**

  - Endpoint: `PUT /user/books/:id`
  - Usage: Update a book's details by its ID.
  - Request Body: JSON object with updated book details.

- **Delete a Book**

  - Endpoint: `DELETE /user/books/:id`
  - Usage: Delete a book by its ID.
**
## ****************************Instructions to Set Up and Run the Application Locally*************************************

Navigate to the project directory:

Install project dependencies:

npm install
Create a .env file in the project root directory and configure the following environment variables:

PORT: The port on which the application will run.
MongoDB_URL: The URL for your MongoDB database.
Example .env file:

PORT=3000
MongoDB_URL=mongodb://localhost:27017/bookstore
Start the application:

npm start
The application will be accessible at http://localhost:3000 (or the port you specified in the .env file).






