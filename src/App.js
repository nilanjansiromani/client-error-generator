/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import { aRefError } from './all-the-errors';

// ------------ LOG ROCKET-----------------
// import LogRocket from 'logrocket';
// LogRocket.init('qr4c1c/nilulin');

// ------------ SENTRY-----------------
// import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";
// Sentry.init({
//   dsn: "https://ce1b13ef85934e9f992c772d7463c63b@o520667.ingest.sentry.io/5631347",
//   integrations: [new Integrations.BrowserTracing()],

//   // We recommend adjusting this value in production, or using tracesSampler
//   // for finer control
//   tracesSampleRate: 1.0,
// });

function App() {
  return (
    <div className="App">
      <h1>All the error</h1>
      <button onClick={aRefError}>Lets throw a new Exception</button>;
      <hr></hr>
      <img src="https://shirsendu.com/wp-content/uploads/2018/02/WordPress-Errors.png" />
      <hr></hr>
      <h3>here is a bad image</h3>
      <img src="https://s1.sentry-cdn.com/_static/672c31ec0472f66904c1d549efa838cc/sentry/di" />
    </div>
  );
}

export default App;
