"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express = require("express");
var server_1 = require("@remult/server");
var fs = require("fs");
var core_1 = require("@remult/core");
var pg_1 = require("pg");
var dotenv_1 = require("dotenv");
var server_postgres_1 = require("@remult/server-postgres");
require("../app.module");
dotenv_1.config(); //loads the configuration from the .env file
initDatabase().then(function (database) {
    var app = express();
    server_1.initExpress(app, database, process.env.DISABLE_HTTPS == "true");
    app.use(express.static('dist'));
    app.use('/*', function (req, res) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var index;
        return tslib_1.__generator(this, function (_a) {
            index = 'dist/index.html';
            if (fs.existsSync(index)) {
                res.send(fs.readFileSync(index).toString());
            }
            else {
                res.send('No Result: ' + index);
            }
            return [2 /*return*/];
        });
    }); });
    var port = process.env.PORT || 3002;
    app.listen(port);
});
function initDatabase() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var dbUrl, pool, database;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbUrl = process.env.DATABASE_URL;
                    if (!dbUrl) {
                        throw "No DATABASE_URL environment variable found, if you are developing locally, please add a '.env' with DATABASE_URL='postgres://*USERNAME*:*PASSWORD*@*HOST*:*PORT*/*DATABASE*'";
                    }
                    pool = new pg_1.Pool({
                        connectionString: dbUrl,
                        ssl: process.env.DISABLE_POSTGRES_SSL ? false : { rejectUnauthorized: false }
                    });
                    database = new core_1.SqlDatabase(new server_postgres_1.PostgresDataProvider(pool));
                    return [4 /*yield*/, new server_postgres_1.PostgresSchemaBuilder(database).verifyStructureOfAllEntities()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, database];
            }
        });
    });
}
//# sourceMappingURL=server.js.map