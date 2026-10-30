// Set up a basic Express server
// Import express, define port 3000
// Add a GET route for '/' that returns "Hello World"
// Start the server and log the port

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
