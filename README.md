# bigcatsapp  | 🐅   The Largest 10 Big Cats on Earth
A searchable and filterable gallery with a Master Detail pattern, on the largest Big Cats on earth.  Built as a front-end portfolio coding project, using React, Typescript, axios, Bulma CSS framework, FontAwesome Icons, and consumes a Rest API from https://bigcatsapi.ryanhunter.ca/bigcats . Enjoy!  


## 📸 Preview
Live **Site Demo** ~ [The Largest Big Cats](https://bigcatsapp.ryanhunter.ca)  🐯  

![Screenshot of Front Page](https://bigcatsapp.ryanhunter.ca/images/screens/screens_01_bigcatsapp.webp) 


React and TypeScript based front-end app showing the world's largest Big Cats currently. Pulls data from a PHP and MySQL based REST API backend also hosted in this GitHub as 'BigCatsAPI'. Enjoy!  🐆 


![Big Cats Screenshot](public/images/screens/screens_01_bigcatsapp.webp) 

## 🔧 Built With

- React 18 + TypeScript
- Bulma CSS
- Axios
- React Router DOM
- FontAwesome icons
- Frame Motion animation library
- React-Swipeable library 
- Google Fonts


## 🚀 Getting Started (Dev)

- git clone https://github.com/systemsvanguard/bigcatsapp.git  ~ (BigCats App)    
- cd bigcatsapp 
- npm install
- npm start 
- Runs on port 5173 ---> http://localhost:5173/   
- Please also see the related & prerequisite project, the backend REST API, located at https://github.com/systemsvanguard/bigcatsapi.git  ~ (Big Cats API)     



## License
This project is licensed under the terms of the **MIT** license.


## Screenshots 🐈  

![Screenshot # 1](https://bigcatsapp.ryanhunter.ca/images/screens/screens_01_bigcatsapp.webp)    

![Screenshot # 2](https://bigcatsapp.ryanhunter.ca/images/screens/screens_02_bigcatsapp.webp)     

![Screenshot # 3](https://bigcatsapp.ryanhunter.ca/images/screens/screens_03_bigcatsapp.webp)    





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
