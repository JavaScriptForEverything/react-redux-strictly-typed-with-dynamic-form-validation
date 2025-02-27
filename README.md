
## React-Redux-Strictly-Typed-With-Dynamic-Form-Validation



### Key Features
- react with redux strictly typed
- dynamic form handling
- dynamic form validation
- handle registration form


### Create Project
```
$ yarn create react-app . --template=typescript 
$ yarn add @reduxjs/toolkit react-redux
... setup redux /src/store 


$ git clone https://github.com/JavaScriptForEverything/react-redux-strictly-typed-with-dynamic-form-validation.git
$ yarn install
$ yarn start
$ yarn build
```




### Project Structure
```
$ tree -I 'node_modules|.git'
.
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src
│   ├── index.tsx
│   ├── App.tsx
│   │
│   ├── App.test.tsx
│   ├── App.css
│   ├── index.css
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   ├── logo.svg
│   │
│   ├── components
│   │   ├── index.ts
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   └── drawerPanel.tsx
│   │
│   ├── data
│   │   ├── index.ts
│   │   ├── home.ts
│   │   └── header.ts
│   │
│   ├── fonts
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   │
│   ├── hoc
│   │   ├── index.ts
│   │   └── withLayout.tsx
│   │
│   ├── hooks
│   │   └── redux.ts
│   │
│   ├── icons
│   │   ├── index.ts
│   │   ├── addPlusIcon.tsx
│   │   ├── alertErrorIcon.tsx
│   │   ├── alertInfoIcon.tsx
│   │   ├── alertSuccessIcon.tsx
│   │   ├── alertWarningIcon.tsx
│   │   ├── alignCenter.tsx
│   │   ├── alignJustify.tsx
│   │   ├── alignLeft.tsx
│   │   ├── alignRight.tsx
│   │   ├── arrowDownIcon.tsx
│   │   ├── arrowLeftIcon.tsx
│   │   ├── arrowRightIcon.tsx
│   │   ├── arrowUpIcon.tsx
│   │   ├── articleIcon.tsx
│   │   ├── bellIcon.tsx
│   │   ├── cartIcon.tsx
│   │   ├── cloudUploadIcon.tsx
│   │   ├── crossIcon.tsx
│   │   ├── dashboardIcon.tsx
│   │   ├── deleteIcon.tsx
│   │   ├── dislikeIcon.tsx
│   │   ├── divisionIcon.tsx
│   │   ├── downloadIcon.tsx
│   │   ├── editIcon.tsx
│   │   ├── facebookIcon.tsx
│   │   ├── filterIcon.tsx
│   │   ├── giftIcon.tsx
│   │   ├── githubIcon.tsx
│   │   ├── googleIcon.tsx
│   │   ├── gridIcon.tsx
│   │   ├── group3Icon.tsx
│   │   ├── groupIcon.tsx
│   │   ├── heartIcon.tsx
│   │   ├── homeIcon.tsx
│   │   ├── likeIcon.tsx
│   │   ├── linkedInIcon.tsx
│   │   ├── listIcon.tsx
│   │   ├── loadingIcon.tsx
│   │   ├── mailIcon.tsx
│   │   ├── menuIcon.tsx
│   │   ├── minusIcon.tsx
│   │   ├── multiplyIcon.tsx
│   │   ├── personIcon.tsx
│   │   ├── plusIcon.tsx
│   │   ├── searchIcon.tsx
│   │   ├── settingsIcon.tsx
│   │   ├── starIcon.tsx
│   │   ├── twitterIcon.tsx
│   │   └── youtubeIcon.tsx
│   │
│   ├── lib
│   │   ├── config.ts
│   │   └── utils.ts
│   │
│   ├── pages
│   │   ├── index.ts
│   │   ├── about.tsx
│   │   ├── home.tsx
│   │   └── register.tsx
│   │
│   ├── store
│   │   ├── index.ts
│   │   ├── layoutReducer.ts
│   │   ├── productReducer.ts
│   │   ├── reviewReducer.ts
│   │   └── userReducer.ts
│   │
│   └── types
│       ├── common.ts
│       ├── component.ts
│       ├── layout.ts
│       ├── product.ts
│       ├── review.ts
│       └── user.ts
│ 	 
├── README.md
├── tsconfig.json
└── yarn.lock
```


### Project Scripts
```
$ yarn add -D tailwindcss postcss autoprefixer
$ yarn tailwindcss init


/tailwind.config.js
		...
  content: [],
  content: [ "./src/**/*.{js,jsx,ts,tsx}" ],
		...

/src/index.css
		@tailwind base;
		@tailwind components;
		@tailwind utilities;

$ yarn start
$ yarn build
```

```
$ git clone https://github.com/JavaScriptForEverything/react-redux-strictly-typed-with-dynamic-form-validation.git
$ yarn install
$ yarn start
$ yarn build
```



### ShadCN-UI
```
```