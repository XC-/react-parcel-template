# react-parcel-template
React App template using ParcelJS

# Contains

- [React](https://reactjs.org/)
  - Configured ready (.babelrc)
- [Redux](https://redux.js.org/)
  - with [redux-immutable](https://github.com/gajus/redux-immutable)
    - For alternative methods see https://redux.js.org/recipes/using-immutablejs-with-redux#make-your-entire-redux-state-tree-an-immutablejs-object
- [ImmutableJS](https://github.com/immutable-js/immutable-js)
- Building with [ParcelJS](https://parceljs.org)
- Support for component specific styles with SCSS/SASS/CSS
  - Uses sass + postcss-modules + autoprefixer
  - Configured ready (.postcssrc)
- [Jest](https://jestjs.io/)
  - Not configured at the moment
  
# Possible issues

- Parcel is not detecting changes properly
  - This may be because of a chokidar bug or feature (see: https://github.com/parcel-bundler/parcel/issues/221). It should be fixed
    but if present, disable IDE's safe write feature and change detection should work properly again.
