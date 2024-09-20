# Webstack-Portfolio

## Introduction
Webstack-Portfolio is a web application designed for managing user authentication and note-taking efficiently. It leverages the following technologies:

- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine, enabling server-side scripting.
- **Express.js:** A fast, unopinionated, minimalist web framework for Node.js, perfect for building web applications and APIs.
- **MongoDB:** A NoSQL database that stores user and note data in a flexible, scalable way.
- **Mongoose:** An elegant MongoDB object modeling library for Node.js that simplifies database interactions.
- **JWT (JSON Web Token):** Used for secure authentication, allowing users to verify their identity.
- **bcryptjs:** A library for hashing passwords to enhance security.

## Project Structure

Webstack-Portfolio/ │ ├── app.js ├── package.json ├── package-lock.json ├── config/ │ └── db.js ├── models/ │ ├── User.js │ └── Note.js ├── routes/ │ ├── auth.js │ └── notes.js ├── middleware/ │ └── auth.js ├── controllers/ │ ├── authController.js │ └── noteController.js

## File and Folder Descriptions

- **app.js:** The main entry point of the application, responsible for setting up the Express server, connecting to the MongoDB database, and defining middleware and routes.

- **package.json and package-lock.json:**
  - `package.json`: Contains metadata about the project and its dependencies.
  - `package-lock.json`: Ensures exact versions of dependencies are installed for consistency.

- **config/db.js:** Contains logic for connecting to the MongoDB database using Mongoose.

- **models/User.js:** Defines the User schema and model, including logic for password hashing using bcryptjs.

- **models/Note.js:** Defines the Note schema and model, specifying how notes are structured.

- **routes/auth.js:** Manages routes for user registration and login processes.

- **routes/notes.js:** Manages routes for creating, retrieving, and updating notes, protected by authentication middleware.

- **middleware/auth.js:** Middleware that verifies JWT tokens, protecting sensitive routes.

- **controllers/authController.js:** Handles user registration and login logic.

- **controllers/noteController.js:** Manages note operations such as creating, retrieving, and updating notes.

## Conclusion
This project provides a solid foundation for a note-taking application with user authentication. It showcases best practices for structuring a Node.js project with Express, MongoDB, and Mongoose, and demonstrates how to implement secure authentication using JWT.
