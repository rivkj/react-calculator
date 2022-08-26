import { createContext} from 'react';
import React from 'react';

export const CalContext = createContext() 
const CalProvider = ({children}) => {
const [calc, setCals] = useState({
  sign: "",
  num: 0,
  res: 0
});

  return (
    <CalContext.Provider>
      {children}
    </CalContext.Provider>
  )
}

export default CalProvider