"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryBuilder = void 0;
const queryBuilder = (request) => {
    var _a, _b, _c;
    if (!request.query)
        return;
    const filterParams = (_a = request === null || request === void 0 ? void 0 : request.query) === null || _a === void 0 ? void 0 : _a.filter;
    const sortParams = (_b = request === null || request === void 0 ? void 0 : request.query) === null || _b === void 0 ? void 0 : _b.sort;
    const filter = (_c = Object === null || Object === void 0 ? void 0 : Object.keys(filterParams || {})) === null || _c === void 0 ? void 0 : _c.reduce((prev, value) => (Object.assign(Object.assign({}, prev), { [value]: new RegExp(filterParams[value]) })), {});
    const sort = sortParams;
    return {
        filter,
        sort,
    };
};
exports.queryBuilder = queryBuilder;
//# sourceMappingURL=commonHelper.js.map