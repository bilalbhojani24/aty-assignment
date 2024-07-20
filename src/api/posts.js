import Marvin from '../assets/marvin.svg';
import Theresa from '../assets/theresa.svg';

export default [
  {
    id: 101,
    name: 'Theresa Webb',
    time: '5mins ago', // can be asked in UTC and write a format function on Frontend
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    comments: [
      {
        name: 'Bilal',
        content: 'Nice post!!',
        time: '',
        likes: 11,
        replyComment: [],
      },
      {
        name: 'Bilal',
        content: 'Nice post!!',
        time: '',
        likes: 11,
        replyComment: [],
      },
      {
        name: 'Bilal',
        content: 'Nice post!!',
        time: '',
        likes: 11,
        replyComment: [],
      },
      {
        name: 'Bilal',
        content: 'Nice post!!',
        time: '',
        likes: 11,
        replyComment: [],
      },
    ],
    emoji: '👋',
    image: Theresa,
  },
  {
    id: 102,
    name: 'Marvin McKinney',
    time: '8mins ago • Edited',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    emoji: '😢',
    image: Marvin,
    comments: [
      {
        name: 'Bilal',
        content: 'Nice post!!',
        time: '',
        likes: 11,
        replyComment: [],
      },
      {
        name: 'Bilal',
        content: 'Nice post!!',
        time: '',
        likes: 11,
        replyComment: [],
      },
      {
        name: 'Bilal',
        content: 'Nice post!!',
        time: '',
        likes: 11,
        replyComment: [],
      },
    ],
  },
];
