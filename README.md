# React Region

## Description
React Region component

## Demo
`npm start dev`

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
