const db = require('./models');

const users = [
    {
        firstName: 'Kesha',
        lastName: 'Griffin',
        email: 'kesha123@gmail.com',
        password: 'test1234'
    },
    {
        firstName: 'Nicole',
        lastName: 'Griffin',
        email: 'nicole123@gmail.com',
        password: 'test1234'
    }
];

const posts = [
    {
        foodTruckName: 'Taco Truck',
        date: 'March 1, 2020',
        body: 'this is a test for taco truck posts',
        url:'https://russosgourmet.com/wp-content/uploads/ft1.jpg'
    },
    {
        foodTruckName: 'Pasta Truck',
        date: 'March 22, 2020',
        body: 'this is a test for pasta truck posts',
        url:'https://brokeassstuart.com/wp-content/pictsnShit/2013/10/tonayense3.jpg'
    }
];

// Delete All Posts
console.log('Deleting all posts...');
db.Post.deleteMany({}, (err, result) => {
    if (err) {
    console.log(err);
    process.exit();
    }

    console.log(`Successfully deleted ${result.deletedCount} posts.`);

// Delete All Users
db.User.deleteMany({}, (err, result) => {
    if (err) {
      console.log(err);
      process.exit();
    };

    console.log(`Successfully deleted ${result.deletedCount} users.`);

  // Create New Artists
  db.User.create(users, (err, newUsers) => {
    if (err) {
      console.log(err);
      process.exit();
    }
    console.log(`Successfully created ${newUsers.length} users.`);
        process.exit();
    });
  });
});
