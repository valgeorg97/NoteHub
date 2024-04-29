### NoteHub
==================

NoteHub is a PERN (PostgreSQL, Express.js, React.js, Node.js) stack application that allows users to manage their notes. Users can sign up, log in, and perform CRUD (Create, Read, Update, Delete) operations on their notes. The application is fully responsive, ensuring a seamless user experience across different devices.
![image](https://github.com/valgeorg97/NoteHub/assets/156944279/62581afb-eadf-4341-bb5a-7d18f783b695)

Technologies Used
-----------------

*   **PostgreSQL**: Relational database used for storing note data.
*   **Express.js**: Node.js web application framework used for creating the backend server.
*   **React.js**: JavaScript library used for building the user interface.
*   **Node.js**: JavaScript runtime used for running the backend server.
*   **Tailwind CSS**: Utility-first CSS framework used for styling.

Before running the application, make sure you have PostgreSQL installed on your machine.
-----------------------

**Database Setup**
Install PostgreSQL and set up a new database named notehub.
Run the following SQL commands to create the necessary tables:

CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);


Running the Application
-----------------------

**Before running the application, make sure you have PostgreSQL installed on your machine.**

Database Setup
Install PostgreSQL and set up a new database named notehub.
Run the following SQL commands to create the necessary tables:

CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);

### Backend

1.  Navigate to the `backend` directory.
2.  Install dependencies using `npm install`.
3.  Set up environment variables by creating a .env file with the following content:

-USER=your_postgres_username
-PASSWORD=your_postgres_password
-NAME=notehub
-HOST=localhost
-DBPORT=5432 (default PG port)

3.  Start the server using `npm run dev`.
4.  The server will be running on port `5000`.

### Frontend

1.  Navigate to the `frontend` directory.
2.  Install dependencies using `npm install`.
3.  Start the React app using `npm run dev`.
4.  The React app will be running and can be accessed in the browser.

Usage
-----

1.  Access the NoteHub app in your web browser.
2.  Sign up for a new account or log in with existing credentials.
3.  Add new notes using the create note button.
4.  Update or delete notes using the provided options.
5.  View single note details.
6.  Enjoy organizing your notes efficiently!

Contributors
------------

*   [Valentin Georgiev](https://github.com/valgeorg97) - Developer
