class ConfigAPIURL {
  static baseUrl = "http://localhost:4000";

  static signUp = this.baseUrl + "/user/create";
  static login = this.baseUrl + "/user/login";
  static sessionValidation = this.baseUrl + "/user/islogin"; // get
  static logout = this.baseUrl + "/user/logout"; // get

  static createTest = this.baseUrl + "/user/test/create"; // post
  static getAllTest = this.baseUrl + "/user/test/all"; // get
}
export default ConfigAPIURL;
