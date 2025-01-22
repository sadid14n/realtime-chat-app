# Real-Time Chat Application

This is a **real-time chat application** built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with WebSocket integration for instant communication.

## Features

- **Real-time Messaging**: Send and receive messages instantly.
- **User Authentication**: Secure login and registration system.
- **Responsive UI**: User-friendly interface that works across devices.
- **Message Storage**: All conversations are saved in the database.
- **WebSocket Integration**: Real-time communication using WebSocket.

## Technologies Used

- **Frontend**: React.js with CSS for styling.
- **Backend**: Node.js and Express.js.
- **Database**: MongoDB for storing user data and messages.
- **Real-time Communication**: WebSocket (or libraries like Socket.IO).

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/sadid14n/chat-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd chat-app
   ```

3. Install dependencies for the backend:

   ```bash
   cd server
   npm install
   ```

4. Install dependencies for the frontend:

   ```bash
   cd ../client
   npm install
   ```

5. Create a `.env` file in the `server` directory and add the following:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=your_port_number
   ```

6. Start the backend server:

   ```bash
   cd server
   npm start
   ```

7. Start the frontend development server:

   ```bash
   cd ../client
   npm start
   ```

8. Open your browser and go to `http://localhost:3000`.

## Folder Structure

```
chat-app/
  ├── client/          # React.js frontend
  ├── server/          # Node.js backend
  ├── README.md        # Project documentation
```

## Contribution

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or suggestions, feel free to reach out:

- **GitHub**: [sadid14n](https://github.com/sadid14n)
