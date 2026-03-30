import _ from 'lodash';

const getLastElement = (arr) => {
  return _.last(arr);
};

const sayHello = () => {
  console.log('Hello, Hexlet!');
};

export { getLastElement, sayHello };