const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

dotenv.config({ path: './config.env' });
// console.log(process.env);

const DB =
  'mongodb+srv://sethonne:cfC5PKXXUP58TPxz@natours.8yafpdk.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log('connection successful');
  });

// const testTour = new Tour({
//   name: 'The Forest Hikers',
//   rating: 4.7,
//   price: 497,
// });

// testTour
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log('Error', err);
//   });

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
