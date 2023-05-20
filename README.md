# MERN Blog App

The MERN Blog App is a full-stack web application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to create and view blog posts. The backend is implemented with Node.js and Express, while the frontend is built using React.

## Features

- Create and publish blog posts with a title, content, and optional image.
- View a list of all published blog posts on the homepage.
- Click on a blog post to view the full details.
- Create a new blog post using a form with input fields for the title, and image .
- Responsive design for optimal viewing on different devices.

## Prerequisites

Before running the application, make sure you have the following prerequisites installed:

- Node.js
- MongoDB

## Getting Started

To get started with the MERN Blog App, follow these steps:

### Backend

1. Clone the repository:

   ```bash
   git clone https://github.com/Arunangshu-Das/Arunangshu_ai_image_generator.git
   ```

2. Navigate to the backend directory:

   ```bash
   cd mern-blog-app/backend
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the `backend` directory and add the following environment variables:

   ```
   MONGODB_URL=<your-mongodb-connection-string>
   ```

5. Start the backend server:

   ```bash
   npm start
   ```

   The server will start running on `http://localhost:8000`.

### Frontend

1. In a new terminal, navigate to the frontend directory:

   ```bash
   cd mern-blog-app/frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm start
   ```

   The React development server will start running on `http://localhost:3000`, and the application will open in your default browser.

4. You can now use the MERN Blog App to create and view blog posts.

## Project Structure

The project is structured as follows:

- `backend`: Contains the Node.js and Express backend code.
  - `routes`: Contains the route handlers for the API endpoints.
  - `models`: Defines the MongoDB data models.
  - `controllers`: Implements the logic for handling requests and responses.
  - `middlewares`: Contains custom middleware functions.
- `frontend`: Contains the React frontend code.
  - `pages`: Contains the components for different pages of the application.
  - `components`: Contains reusable UI components.
  - `assets`: Contains static assets such as images and logos.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
