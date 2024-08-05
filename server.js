const express = require('express');
const port = 8080;
const app = express();

const Quotes = [
  {
    id: 1,
    text: `It's sad when someone you know becomes someone you knew.`,
    tag: 'Sad Quotes ',
    username: 'Henry Rollins',
    date: '2022-02-03',
  },
  {
    id: 2,
    text: `The two most important days in your life are the day you are born and the day you find out why.`,
    tag: 'Life Quotes',
    username: 'Mark Twain',
    date: '2023-02-03',
  },
  {
    id: 3,
    text: `Success is not a destination, it's a journey.`,
    tag: 'Success Quotes',
    username: 'Zig Ziglar',
    date: '2024-02-03',
  },
];

// everything is automatically nothing hv to change or set (like set to 'application/json')
// app.get('/', (req, res) => res.send('Hello World!')); // text/html
// app.get('/', (req, res) => {
//   res.send({ message: 'Hello from Json' });
// }); // application/json

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to random Quotes API ' });
});

// Get All Quotes
app.get('/api/quotes', (req, res) => {
  res.json({ success: true, data: Quotes });
});

// Get One Single Quote
app.get('/api/quotes/:id', (req, res) => {
  const Quote = Quotes.find((quote) => quote.id === +req.params.id); // '+' to confirm that it's a num OR u can do '==' without '+' sign.
  if (!Quote) {
    return res
      .status(404)
      .json({ success: false, error: `Ressource Not Found!` });
  }
  res.json({ success: true, data: Quote });
});

app.listen(port, () => {
  console.log(`Server listeninng in port ${port}`);
});
