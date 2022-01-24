"use strict";

var _express = _interopRequireWildcard(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _postRoute = _interopRequireDefault(require("./routes/postRoute.js"));

var _authRoute = _interopRequireDefault(require("./routes/authRoute.js"));

var _contactRoute = _interopRequireDefault(require("./routes/contactRoute.js"));

var _categoryRoute = _interopRequireDefault(require("./routes/categoryRoute.js"));

var _profileRoute = _interopRequireDefault(require("./routes/profileRoute.js"));

var _verifyToken = require("./middlewares/verifyToken.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const {
  connect
} = _mongoose.default;
const app = (0, _express.default)();
app.use((0, _express.json)());
app.use(cookieParser()); // dotenv.config()

connect('mongodb://localhost/capstone').then(() => console.log('Connected to mongoDB')).catch(err => console.error('Could not connect to MongoDBNamespace...', err));
app.listen(3000, () => console.log("Listening on port 3000...")); //All Routers

app.use('/api/posts', _postRoute.default);
app.use('/api/messages', _contactRoute.default);
app.use('/api/profile', _profileRoute.default);
app.use('/api/categories', _categoryRoute.default);
app.use('/api', _authRoute.default);