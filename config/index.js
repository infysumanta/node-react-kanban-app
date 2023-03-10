module.exports = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",
  MONGO_URI:
    process.env.MONGO_URI || "mongodb://localhost/node-react-kanban-app",
  JWT_SECRET: process.env.JWT_SECRET || "jsonwebtokensecret",
  PASSWORD_SECRET_KEY: process.env.PASSWORD_SECRET_KEY || "passwordsecretkey",
};
