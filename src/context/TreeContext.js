// src/context/treesContext.js

import { createContext, useContext } from 'react';

export const TreesContext = createContext([]);
// Custom hook to use the TreesContext
export const useTrees = () => useContext(TreesContext);
