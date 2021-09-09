Level 1: Mini Paint
==========================

[Technical task](https://docs.google.com/document/d/1feIA0eu0NkR4J2mCdCc8oPErbET--IlqAEoSpRo1KHA/edit)
### Description
#### Project architecture
    /src
      /core
        /actions
          actions.types.ts
          auth.ts
          editor.ts
          home.ts
          profile.ts
        /components
          /App
            App.module.css
            App.tsx
          /Canvas
            Canvas.module.css
            Canvas.tsx
          /Navbar
            Navbar.module.css
            Navbar.tsx
        /firebase
          firebase.ts
        /helpers
          delCookie.ts
          getCookie.ts
        /reducers
          authReducer.ts
          editorReducer.ts
          homeReducer.ts
          profileReducer.ts
        /sagas
          createUserSaga.ts
          editorSaga.ts
          homeSaga.ts
          profileSaga.ts
          rootSaga.ts
          signinSaga.ts
        /store
          store.ts
        /types
          /types.ts
      /pages
        /editor
          EditorPage.module.css
          EditorPage.ts
        /home
          HomePage.module.css
          HomePage.ts
        /login
          LoginPage.module.css
          LoginPage.ts
        /profile
          ProfilePage.module.css
          ProfilePage.ts
      index.css
      index.tsx
#### How to use
Download the last version from GitHub.
Use terminal
* npm install - to install all dependencies
* npm run start - to run the app in the development mode.
* npm run build - to build production version

#### You can see it in web
[Home page](https://alexender-miadzvedzeu-innowise-group.github.io/Innowise-Lab-Internship-Mini-Paint/)