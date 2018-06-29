const {Queue} = require('./queue')

const dogs = new Queue;

dogs.enqueue({
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
});

dogs.enqueue({
  imageURL: 'https://shibashake.com/wp-content/blogs.dir/7/files/2011/05/IMG_4706.jpg',
  imageDescription: 'Howling Husky Pup',
  name: 'Toby',
  sex: 'Male',
  age: 1,
  breed: 'Husky',
  story: 'Owner complained about howling'
});

dogs.enqueue({
  imageURL: 'http://www.finestpitbullsmade.com/wp-content/uploads/2018/03/sky-khaos-male-d-1024x1024.jpg',
  imageDescription: 'A pitbull puppy on hand.',
  name: 'Poppy',
  sex: 'Female',
  age: 1,
  breed: 'Pitbull',
  story: 'Found in a box'
});

dogs.enqueue({
  imageURL: 'https://www.dogmal.com/wp-content/uploads/2016/10/beagle-dog-breed-1024x682.jpg',
  imageDescription: 'Beagle running on grass.',
  name: 'Jackie',
  sex: 'Male',
  age: 1,
  breed: 'Beagle',
  story: 'Found on street.'
});

dogs.enqueue({
  imageURL: 'https://g77v3827gg2notadhhw9pew7-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/shiba-inu-temperament-and-personality_canna-pet-e1505153693192.jpg',
  imageDescription: 'Shiba Inu walking on ground.',
  name: 'Bones',
  sex: 'Male',
  age: 3,
  breed: 'Shiba Inu',
  story: 'Found on ship.'
});

dogs.enqueue({
  imageURL: 'https://www.dogster.com/wp-content/uploads/2015/07/dog-paws-06.jpg',
  imageDescription: 'German Shepherd playing with flowers.',
  name: 'Daisey',
  sex: 'Female',
  age: 6,
  breed: 'German Shepherd',
  story: 'Owner moved away.'
});

module.exports = dogs;