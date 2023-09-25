const express = require("express");
const Sentry = require("@sentry/node");
const { ProfilingIntegration } = require("@sentry/profiling-node");




const app = express();
const PORT = 3000;
const SECRET_ENV = process.env.SECRET_ENV;


Sentry.init({
  dsn: 'https://6b97ee124902fc9b29fc3a4045565668@o4505942471016448.ingest.sentry.io/4505942475997184',
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Sentry.Integrations.Express({ app }),
    new ProfilingIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0, 
});

app.get("/", (req, res) => {
  res.send("Hello from the the développeur star ⭐");
});

app.use(Sentry.Handlers.requestHandler());

// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());


// ! Test these routes
app.get("/health", (req, res) => {
  res.sendStatus(200);
});

app.get("/secret", (req, res) => {
  console.log("SECRET_ENV", SECRET_ENV);
  if (req?.body?.test) res.sendStatus(201);
  res.sendStatus(200);
});

// ! Don't fix and test these routes
app.get("/bug", (req, res) => {
  console.log(a.b);
  res.sendStatus(200);
});

app.get("/crash_app", (req, res) => {
  try {
    setTimeout(function () {
      throw new Error("CRASH APP");
    }, 10);
  } catch (e) {
    console.log("error", e);
  }
});

app.get("/error", (req, res) => {
  throw new Error("This is a deliberate error!");
});


app.use(Sentry.Handlers.errorHandler());
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



module.exports = app;