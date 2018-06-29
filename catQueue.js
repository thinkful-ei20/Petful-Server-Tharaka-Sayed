const {Queue} = require('./queue')

const cats = new Queue;

cats.enqueue({
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
});

cats.enqueue({
  imageURL:'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg', 
  imageDescription: 'Grey cat with blue eyes',
  name: 'Alex',
  sex: 'Male',
  age: 4,
  breed: 'Bengal',
  story: 'Owner died'
});

cats.enqueue({
  imageURL:'http://cdn1-www.cattime.com/assets/uploads/gallery/maine-coon-cats-and-kittens/maine-coon-cats-and-kittens-1.jpg', 
  imageDescription: 'Black and brown Main coon cat with green eyes.',
  name: 'Sebastian',
  sex: 'Male',
  age: 2,
  breed: 'Main Coon',
  story: 'Kids got bored of having a cat'
});

cats.enqueue({
  imageURL:'https://assets.rbl.ms/9798250/980x.jpg', 
  imageDescription: 'Brown striped tabby',
  name: 'Clover',
  sex: 'Female',
  age: 1,
  breed: 'Tabby',
  story: 'Found in an alley way'
});

cats.enqueue({
  imageURL:'https://pixfeeds.com/images/cats/1280-648561826-rusian-blue-cat.jpg', 
  imageDescription: 'Dark grey Russian Blue with orange eyes',
  name: 'Felicity',
  sex: 'Female',
  age: 2,
  breed: 'Russian Blue',
  story: 'Owners left her in the pound'
});

cats.enqueue({
  imageURL:'https://www.petful.com/wp-content/uploads/2016/07/british-shorthair-750x419.jpg', 
  imageDescription: 'Dark grey British Shorthair with yellow eyes.',
  name: 'Carl',
  sex: 'Male',
  age: 2,
  breed: 'British Shorthair',
  story: 'Found in a dumpster'
});

module.exports = cats;