/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import { generateReferenceError, httpErrorGenerator } from './all-the-errors';

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
      <button onClick={generateReferenceError}>Lets throw a new Exception</button><br/><br/><br/>
      <button onClick={httpErrorGenerator.http400}>New 400 Error</button><br/><br/><br/>
      <button onClick={httpErrorGenerator.http403}>New 403 Error</button><br/><br/><br/>
      <button onClick={httpErrorGenerator.http404}>New 404 Error</button><br/><br/><br/>
      <button onClick={httpErrorGenerator.http500}>New 500 Error</button><br/><br/><br/>
    </div>
  );
}

export default App;
