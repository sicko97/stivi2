"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const enterprise_routes_1 = __importDefault(require("./routers/enterprise.routes"));
const commodity_routes_1 = __importDefault(require("./routers/commodity.routes"));
//Connect to mongodb
mongoose_1.default.connect('mongodb://localhost:27017/fiscalization');
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('db connection ok');
});
//Instantiate express object
const app = (0, express_1.default)();
const router = express_1.default.Router();
//Initialize and configure app
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use("/images", express_1.default.static(path_1.default.join("images")));
app.use('/', router);
router.use('/entp', enterprise_routes_1.default);
router.use('/comm', commodity_routes_1.default);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map