import React from 'react';

//Import from input screen row
import OutputScreenRow from './outputScreenRow.js';

//functional component
//holds input and output rows
const OutputScreen = () => {
  return (
    <div className="screen">
      <OutputScreenRow/>
      <OutputScreenRow/>
    </div>
  )
}

//export output screen
export default OutputScreen;