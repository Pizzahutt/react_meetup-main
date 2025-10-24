React Meetups React 17, ReduxToolkit, RTL/Jest Demo
<img width="3189" height="1651" alt="image" src="https://github.com/user-attachments/assets/469bc1f2-3c3b-4eff-a2e5-b221872364e5" />


[screen-capture (5).webm](https://github.com/user-attachments/assets/a4e06db3-e912-4457-9ff7-fb0e6de47593)
<video autoplay loop muted playsinline>
  <source src="https://github.com/user-attachments/assets/a4e06db3-e912-4457-9ff7-fb0e6de47593)" type="video/webm" />
</video>


# react_meetup-main

Demo realizada con React 17, Redux para el manejo de estado y Rtl/Jest para pruebas unitarias.

#1. En relación al header se ha aplicado un escuchador (customHook) para el evento scroll junto a classes de styling para hacer visible o no el elemento ahora fijo segun si se hace scroll hacia arriba.

#2. En relacion a las rutas se ha implementado React routes modificando la raiz.

#3. La funcionalidad de favoritos se ha implementado mediante una store con una Slice de Redux, prefiriendo esto a añadir uno o varios contexts de React.

#4. Se han añadido pruebas unitarias implementando react-testing-library en lugar de Enzyme (Enzyme se consideraria deprecado en versiones mas actuales necesitando adaptar el test a posteriori) para los MeetUpItems y la seccion de Favoritos teniendo en cuenta la anterior store de Redux.

Todo esto se ha hecho sin actualizar la version de React ya que entiendo que esto no siempre es practico en una base de codigo mas grande.



## Getting started / How to run this project

### Prerequisites
- Node.js (recommended: 16.x or newer)
- npm (comes with Node) or Yarn (optional)

Verify installation:
```bash
node -v
npm -v
# or if using yarn
yarn -v
```

### Install dependencies
From the repository root, install dependencies with npm or yarn:

Using npm:
```bash
npm install
```

### Start the development server
Start the app in development mode:

Using npm:
```bash
npm start
```

This will typically start a local dev server (commonly on http://localhost:3000). Open the URL in your browser to view the app. Check the terminal output for the exact address and port.

### Build for production
Create an optimized production build:

Using npm:
```bash
npm run build
```

The production-ready static files will be output to the build/ or dist/ directory (depending on tooling).

### Run tests (if available)
If the project includes tests, run them with:

Using npm:
```bash
npm run test
```

Refer to the project documentation or the code for required variable names.

### Troubleshooting
- If `npm start` fails, check `package.json` for available scripts and run the appropriate script.
- Delete `node_modules` and reinstall if you see dependency errors:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```
- If the port is already in use, either stop the conflicting process or set a different port:
  ```bash
  PORT=3001 npm start
  ```

### Contributing
If you'd like to contribute, fork the repo, create a branch, make your changes, and open a pull request.

---

If you want, I can add this README content directly to the repository and open a branch/PR for you — tell me whether to push the change and which branch name you'd like.
