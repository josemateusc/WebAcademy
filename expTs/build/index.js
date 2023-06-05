"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
const logger_1 = __importDefault(require("./middlewares/logger"));
const dotenv_1 = __importDefault(require("dotenv"));
const router_1 = __importDefault(require("./router/router"));
const express_handlebars_1 = require("express-handlebars");
dotenv_1.default.config();
(0, validateEnv_1.default)();
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3333;
const publicPath = process.cwd() + '/public';
app.engine('handlebars', (0, express_handlebars_1.engine)({
    helpers: require(`${__dirname}/views/helpers/helpers.ts`),
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);
app.use((0, logger_1.default)('completo'));
//app.use(morgan('combined'));
app.use(router_1.default);
app.use('/css', express_1.default.static(`${publicPath}/css`));
app.use('/js', express_1.default.static(`${publicPath}/js`));
app.use((req, res, next) => {
    next();
});
app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});
