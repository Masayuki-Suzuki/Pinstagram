export const author = [
  {
    _id: 1,
    userName: 'testUser1',
    password: 'pass',
    fullName: 'test user 1',
    location: null,
    photo: null,
  },
  {
    _id: 2,
    userName: 'testUser2',
    password: 'pass',
    fullName: 'test user 2',
    location: null,
    photo: null,
  },
  {
    _id: 3,
    userName: 'testUser3',
    password: 'pass',
    fullName: 'test user 3',
    location: null,
    photo: null,
  },
  {
    _id: 4,
    userName: 'testUser4',
    password: 'pass',
    fullName: 'test user 4',
    location: null,
    photo: null,
  },
]

export const comments = [
  {
    _id: 1,
    text: 'awesome!!',
    author: {
      name: author[1].userName,
    },
  },
  {
    _id: 2,
    text: 'I agree with you.',
    author: {
      name: author[0].userName,
    },
  },
  {
    _id: 3,
    text: 'awesome!!',
    author: {
      name: author[1].userName,
    },
  },
  {
    _id: 4,
    text: 'cool!!',
    author: {
      name: author[2].userName,
    },
  },
  {
    _id: 5,
    text: 'That looks like a good breakfast.',
    author: {
      name: author[3].userName,
    },
  },
]

export const post = [
  {
    _id: 1,
    title: 'Cheeeeeeese cake!!',
    description: "That's awesome cheese cake!!",
    url: null,
    filename: 'cheese-cake-2034424_1920.jpg',
    author: {
      name: author[0].userName,
    },
    comments: [
      {
        name: comments[0].author.name,
        text: comments[0].text,
      },
    ],
    like: 2,
    pined: 0,
  },
  {
    _id: 2,
    title: 'A good breakfast is important for starting new day.',
    description: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    url: null,
    filename: 'dessert-3225670_1280.jpg',
    author: {
      name: author[1].userName,
    },
    comments: [
      {
        name: comments[1].author.name,
        text: comments[1].text,
      },
    ],
    like: 12,
    pined: 3,
  },
  {
    _id: 3,
    title: 'Love',
    description: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah ',
    url: null,
    filename: 'strawberry-3230238_1920.jpg',
    author: {
      name: author[0].userName,
    },
    comments: [
      {
        name: comments[3].author.name,
        text: comments[3].text,
      },
      {
        name: comments[4].author.name,
        text: comments[4].text,
      },
      {
        name: comments[5].author.name,
        text: comments[5].text,
      },
    ],
    like: 31,
    pined: 27,
  },
]
