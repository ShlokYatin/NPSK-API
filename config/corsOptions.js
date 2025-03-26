const allowedOrigins = [
  "https://bug-free-happiness-v6wg7rpggpv7c6ppw-3000.app.github.dev",
  "http://localhost:3000",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (
      allowedOrigins.indexOf(origin) !== -1
      //! remove in production
      || !origin
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
