import { useState } from 'react';
import Test from './test';

const App = () => {
  const [state, setState] = useState(null)
  return( 
    <Test
      string='string'
      number={123}
      bool={true}
      obj={{name: 'name', age: 123}}
      array={[{name: 'name', age: 123},{name: 'name', age: 123}]}
      oneOf='one'
      func={setState}
    >
      <div>123</div>
      <div>123</div>
      <div>123</div>
    </Test>
  )
}

export default App;
