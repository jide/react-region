## React Region

### Description
React Region component lets you mount components by passing plain objects to its `region` prop.

### Why
Useful for automating components using plain objects.

### Installation
```
npm i --save react-region
```

### Demo
`npm start dev` then visit http://127.0.0.1:3000

### Usage
````js
import { makeRegion } from 'react-region';
import Example from './Example';

// Configure which components can be mounted in regions.
const Region = makeRegion({
  Example
});

// In real world these data would come from e.g. a JSON file. Careful with XSS
// if you do that over the network.
const region = [{
  type: 'Example',
  props: {
    key: 'some-example',
    test: 'This is an example component',
    className: 'some-class',
    children: [
      //...
    ]
  }
}];

<Region region={ region }/>
````

### With arbitrary data
```js
<Region id='wrapper' className='wrapper'>
  { state => (
    <div className={ 'some-class ' + (state && state.className ? state.className : '') }>
      hello <span style={ state && state.style ? state.style : null }>world</span>
    </div>
  ) }
</Region>
```
