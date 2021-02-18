import { generateReferenceError, httpErrorGenerator, cosnsoleErrors } from './all-the-errors';

// // ------------ LOG ROCKET-----------------
// import LogRocket from 'logrocket';


// // ------------ SENTRY-----------------
// import * as Sentry from "@sentry/react";
// // import { Integrations } from "@sentry/tracing";

// Sentry.init({
//   dsn: "https://ce1b13ef85934e9f992c772d7463c63b@o520667.ingest.sentry.io/5631347",
//   integrations: [new Integrations.BrowserTracing()],

//   // We recommend adjusting this value in production, or using tracesSampler
//   // for finer control
//   tracesSampleRate: 1.0,
// });
// LogRocket.init('qr4c1c/nilulin');

function App() {
  return (
    <div className="App foo gamma">
      <button onClick={generateReferenceError}>Lets throw a new Exception</button><br /><br /><br />
      <button onClick={httpErrorGenerator.http400}>New 400 Error</button><br /><br /><br />
      <button onClick={httpErrorGenerator.http403}>New 403 Error</button><br /><br /><br />
      <button onClick={httpErrorGenerator.http404}>New 404 Error</button><br /><br /><br />
      <button onClick={httpErrorGenerator.http500}>New 500 Error</button><br /><br /><br />
      <img src="https://via.placeholder.com/150" alt="BigCo Inc. logo" />
      <img src="https://via.placeholders.com/150" alt="BigCo Inc. logo" />
      <button onClick={cosnsoleErrors}>try a console error</button><br /><br /><br />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus ducimus sequi odit reiciendis in. Nulla illum veritatis, pariatur maiores, voluptates vel nam sit, ut odit rerum quaerat cupiditate placeat ab?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus ducimus sequi odit reiciendis in. Nulla illum veritatis, pariatur maiores, voluptates vel nam sit, ut odit rerum quaerat cupiditate placeat ab?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus ducimus sequi odit reiciendis in. Nulla illum veritatis, pariatur maiores, voluptates vel nam sit, ut odit rerum quaerat cupiditate placeat ab?
      </p>
    </div>
  );
}

export default App;
