const APIRequest = {
  request: function (method, url, body) {
    let config = {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        // 'User-Token': LocalStorage.token,
        "Accept-Language":
          JSON.parse(localStorage.getItem("lng")) !== undefined &&
          JSON.parse(localStorage.getItem("lng")) !== null
            ? JSON.parse(localStorage.getItem("lng")).code
            : "",
      },
      credentials: "include",
    };
    if (body !== "") {
      config = { ...config, body };
    }
    return fetch(url, config)
      .then((response) => {
        response.headers.forEach((val, key) => {
          if (
            key === "reconnection" &&
            val === "true" &&
            sessionStorage.getItem("payhub.session") !== undefined &&
            sessionStorage.getItem("payhub.session") !== null &&
            sessionStorage.getItem("payhub.session") !== ""
          ) {
            sessionStorage.setItem(
              "payhub.session",
              response.headers.get("user-token")
            );
            // LocalStorage.token = response.headers.get('user-token');
          }
        });
        return response.json();
      })
      .then(this.returnResponse)
      .catch((response) => {
        // window.location.href = '/#/login'
        return { returncode: 0, errors: [{ errormsg: "Timeout Error." }] };
      });
  },
  multipartForDataRequest: function (method, url, body) {
    let config = {
      method: method,
      headers: {
        // 'User-Token': LocalStorage.token,
        "Accept-Language":
          JSON.parse(localStorage.getItem("lng")) !== undefined &&
          JSON.parse(localStorage.getItem("lng")) !== null
            ? JSON.parse(localStorage.getItem("lng")).code
            : "",
      },
      credentials: "include",
    };
    if (body !== "") {
      config = { ...config, body };
    }
    return fetch(url, config)
      .then((response) => {
        response.headers.forEach((val, key) => {
          if (
            key === "reconnection" &&
            val === "true" &&
            sessionStorage.getItem("payhub.session") !== undefined &&
            sessionStorage.getItem("payhub.session") !== null &&
            sessionStorage.getItem("payhub.session") !== ""
          ) {
            sessionStorage.setItem(
              "payhub.session",
              response.headers.get("user-token")
            );
            // LocalStorage.token = response.headers.get('user-token');
          }
        });
        return response.json();
      })
      .then(this.returnResponse)
      .catch((response) => {
        // window.location.href = '/#/login'
        return { returncode: 0, errors: [{ errormsg: "Timeout Error." }] };
      });
  },
  returnResponse: async function (response) {
    if (response.status !== undefined && response.status !== null) {
      return { returncode: 0, errors: [{ errormsg: response.error }] };
    } else if (response.returncode !== 2) {
      return Promise.resolve(response);
    } else if (response.returncode === 2) {
      window.location.href = "#/login";
    }
  },
};
export default APIRequest;
