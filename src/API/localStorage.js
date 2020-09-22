let data = localStorage.length
  ? JSON.parse(localStorage.getItem("myMessages"))
  : [];
const name = "Dima";

export const localStorageAPI = {
  getMessages() {
    return JSON.parse(localStorage.getItem("myMessages"));
  },
  setMessages(message) {
    let messageObj = {
      id: data.length,
      name: name,
      text: message.message,
      tab: message.tab,
    };

    data.push(messageObj);

    localStorage.setItem("myMessages", JSON.stringify(data));
  },

  deleteMessage(id) {
    data = [];
    data = JSON.parse(localStorage.getItem("myMessages")).filter(
      (i) => i.id !== id
    );
    localStorage.setItem("myMessages", JSON.stringify(data));
  },

  editMessage(message) {
    data = [];
    data = JSON.parse(localStorage.getItem("myMessages")).map((i) => {
      if (i.id == message.id) {
        return { ...i, text: message.text };
      }
      return i;
    });
    localStorage.setItem("myMessages", JSON.stringify(data));
  },
  login(isAuth) {
    localStorage.setItem("isAuth", isAuth);
  },
  isAuth() {
    const loginIn = JSON.parse(localStorage.getItem("isAuth"));
    const authData = { loginIn: loginIn, name: name };
    return loginIn ? authData : { name: "Guest" };
  },
  logout(isAuth) {
    localStorage.setItem("isAuth", isAuth);
  },
};
