# React Region

## Description
React Region component lets you mount components by passing plain objects to its `region` prop.

## Demo
`npm start dev` then visit http://127.0.0.1:3000

## Usage
````js
import { makeRegion } from 'react-region';
import Example from './Example';

const Region = makeRegion({
  Example
});

<Region region={
  [{
    type: 'Example',
    props: {
      key: 'some-example',
      test: 'This is an example component',
      className: 'some-class'
    }
  }]
}/>
````
