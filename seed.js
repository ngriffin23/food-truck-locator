const db = require('./models');

const users = [
    {
        firstName: 'Kesha',
        lastName: 'Griffin',
        email: 'kesha123@gmail.com',
        password: 'test1234'
    },
    {
        firstName: 'Cat',
        lastName: 'Carbonell',
        email: 'cat123@gmail.com',
        password: 'test1234'
    }
];

const posts = [
    {
      postTitle: 'Test',
      date: 'March 2, 2020',
      foodTruckName: 'Taco Truck',
      meal: 'Pasta Alfredo',
      body: 'this is test posts',
    },
    {
      postTitle: 'Test2',
      date: 'March 8, 2020',
      foodTruckName: 'French Truck',
      meal: 'Pasta Alfredo',
      body: 'this is test 2 post',
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

  
  // Create New Posts
  db.Post.create(posts, (err, newPosts) => {
    if (err) {
      console.log(err);
      process.exit();
    }
    console.log(`Successfully created ${newPosts.length} posts.`);
        process.exit();
    });
  
    // Create New User
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
