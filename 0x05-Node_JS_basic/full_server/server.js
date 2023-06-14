import express from 'express';
import serverController from './routes/index';

const app = express();
const PORT = 1245;

// Use the serverController function from the routes
serverController(app);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
