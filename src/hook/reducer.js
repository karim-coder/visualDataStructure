// const notificationDefaultSetUp = {
//   message: "",
//   anchorOrigin: { vertical: "bottom", horizontal: "center" },
//   severity: "warning",
//   duration: 3000,
//   open: false,
// };

const initialState = {
  // theme: localStorage.getItem("adminTheme") || "LIGHT",
  languageData: JSON.parse(localStorage.getItem("lng")) || {
    displayName: "English",
    code: "en",
  },
  user: {},
  // notification: notificationDefaultSetUp,
  // displaySearchScreen: false,
  // cartCount: 0,
  // favCount: 0,
};
const reducer = (state = initialState, action) => {
  const newState = { ...state };
  // console.log({ newState, action });
  switch (action.type) {
    // case "SHORTCUTKEY":
    //   newState.shortcutKeyValue = action.value || "";
    //   break;
    case "THEME":
      newState.theme = action.value;
      break;
    case "LANGUAGE":
      newState.languageData = action.value;
      break;
    // case "NOTIFICATION_OPEN":
    //   newState.notification = action.value;
    //   break;
    // case "NOTIFICATION_DESTROY":
    //   newState.notification = notificationDefaultSetUp;
    //   break;
    // case "SEARCH_SCREEN":
    //   newState.displaySearchScreen = action.value;
    //   break;
    // case "UPDATE_CART_COUNT":
    //   newState.cartCount = action.value;
    //   break;
    // case "UPDATE_FAV_COUNT":
    //   newState.favCount = action.value;
    //   break;
    case "UPDATE_USER":
      newState.user = action.value;
      break;
    case "LOGOUT":
      logoutFunction();
      break;
    default:
      break;
  }
  return newState;
};
const logoutFunction = (props) => {
  // APIRequest.request('GET', ConfigAPIURL.adminLogout, '').then((response) => {
  //   if (response.code === 100) {
  //     window.location.href = '#/login';
  //   }
  // });
  sessionStorage.clear();
  localStorage.clear();
  // LocalStorage.permission = null;
};

export default reducer;
