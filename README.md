# Wiki Gallery

## Demo
https://2winsen.github.io/wiki-gallery/

![](https://github.com/2winsen/wiki-gallery/blob/master/demo.gif)

## Requirements
NodeJS version 10.x or higher

## Getting started
After cloning repository, go to project directory and run the following command to install dependencies
```
npm install
```
Then run the following command to launch development server
```
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deploy to GitHub pages
Once you are ready to deploy the app run the following command
```
npm run build
```
Push all your changes + `docs` directory. Please note that `package.json` version is automatically incremented by `npm run build`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Future ideas

- [x] Footer
- [x] Full image
- [x] Share link
- [x] Next/Prev full image (with keyboard)
- [x] Filter ogg or by meta data
- [x] Mobile (Swipe in full size, go to the top, X in search)
- [ ] Markdown
- [ ] Unit tests
- [ ] Random page
- [ ] Suggestions

## Context path

Due to deployment to Github pages `wiki-gallery` context path is added in few places:
- package.json -> homepage
- App.tsx -> basename
