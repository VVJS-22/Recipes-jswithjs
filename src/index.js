import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { RecipeProvider } from './contexts/recipeContext';



ReactDOM.render(
  <React.StrictMode>
    <RecipeProvider>
      <App />
    </RecipeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


