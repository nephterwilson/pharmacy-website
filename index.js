import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

// Create an Express application
const app = express();
const port = 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'views'));  // Ensure views folder is correctly set

// Serve static files like CSS, JS, images from the 'public' folder
app.use(express.static(path.join(path.resolve(), 'public')));

// Use bodyParser to handle form submissions (URL encoded data)
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes for different pages
app.get('/', (req, res) => {
  res.render('home.ejs');  // Renders home.ejs
});

app.get('/product-catalog', (req, res) => {
  res.render('productCatalog');  // Renders productCatalog.ejs
});

app.get('/contact-us', (req, res) => {
  res.render('contactUs');  // Renders contactUs.ejs
});

// Optional: Catch-all route for handling 404 errors (page not found)
app.use((req, res) => {
  res.status(404).render('404');  // Renders a 404 error page
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
