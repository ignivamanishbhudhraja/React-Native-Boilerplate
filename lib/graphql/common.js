Object.defineProperty(exports, "__esModule", { value: true });
exports.logOUt = exports.loginUser = undefined;
var _templateObject = _taggedTemplateLiteral(
    [
      '\nmutation loginUser($phone_number: String!, $password: String!, $device_info:deviceInfoInput) {\n    loginUser(phone_number: $phone_number, password : $password, device_info:$device_info) @connection(key: "loginUser"){\n        auth{\n            token\n        }\n        active\n    }\n}\n'
    ],
    [
      '\nmutation loginUser($phone_number: String!, $password: String!, $device_info:deviceInfoInput) {\n    loginUser(phone_number: $phone_number, password : $password, device_info:$device_info) @connection(key: "loginUser"){\n        auth{\n            token\n        }\n        active\n    }\n}\n'
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      '\nmutation logOutUser($role: String!) {\n    logOutUser(role: $role) @connection(key: "logOutUser"){\n        success\n        message\n        statusCode\n    }\n}\n'
    ],
    [
      '\nmutation logOutUser($role: String!) {\n    logOutUser(role: $role) @connection(key: "logOutUser"){\n        success\n        message\n        statusCode\n    }\n}\n'
    ]
  );
var _graphqlTag = require("graphql-tag");
var _graphqlTag2 = _interopRequireDefault(_graphqlTag);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}
var loginUser = (exports.loginUser = (0, _graphqlTag2.default)(
  _templateObject
));
var logOUt = (exports.logOUt = (0, _graphqlTag2.default)(_templateObject2));
