import { createContext } from 'react';

export interface attributeContext {
  user?: string | null,
  mail?: string | null,
  msg?: string | null,
}

export interface ContextType {
  context?: attributeContext;
  setContext?: (e: any) => void;                            //////////////////////////////
}

const Context = createContext<ContextType | any>(undefined); //////////////////////////////

export { Context };