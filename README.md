# react-native-scrollable-list

[![NPM version][npm-image]][npm-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Downloads][download-badge]][npm-url]

> A ListView without the boilerplate.

## Install

```sh
npm i -D react-native-scrollable-list
```

## Usage

```js
import ScrollableList from 'react-native-scrollable-list';
// other imports

const celebrities = [
    name: 'Leonardo Di Caprio',
    role: 'Actor',
  },
  {
    name: 'Luís Suárez',
    role: 'Football Player',
  },
  {
    name: 'Eddie Van Halen',
    role: 'Guitar Player',
  },
];

const Celebrity = ({name, role}) => (<Text>Name: {name}{\n}Role: {role}</Text>);

export default (<ScrollableList data={celebrities} renderRow={(data) => <Celebrity {..data} />);
```

That's it.

That will render a `ListView`, with all the `dataSource`, `cloneWithRows`, and all that boilerplate code nobody wants to write.

## Props
First, check [`ListView`'s props](https://facebook.github.io/react-native/docs/listview.html). `ScrollableList` is compliant. If you want to pass any of the `ListView` props (like `style`, `onEndReached`, `onChangeVisibleRows`, etc), just pass them to `ScrollableList`, and they will reach `ListView`.

## License

MIT © [](http://github.com/nachoaIvarez)

[npm-url]: https://npmjs.org/package/react-native-scrollable-list
[npm-image]: https://img.shields.io/npm/v/react-native-scrollable-list.svg?style=flat-square

[depstat-url]: https://david-dm.org/nachoaIvarez/react-native-scrollable-list
[depstat-image]: https://david-dm.org/nachoaIvarez/react-native-scrollable-list.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/react-native-scrollable-list.svg?style=flat-square
