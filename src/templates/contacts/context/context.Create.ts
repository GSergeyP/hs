import { createContext } from 'react';

type ContextType = {
  context?: Array<{
              user?: string | null,
              mail?: string | null,
              msg?: string | null,
            }>;                         ///////////////////////////////////////////////
  setContext?: (value: any) => void;     ////////////////////////////////////////////////
};
//const Context = createContext<ContextType | any>(undefined); //////////////////////////////
const Context = createContext<ContextType | any>(undefined); //////////////////////////////

export { Context };