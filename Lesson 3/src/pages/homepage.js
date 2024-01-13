import Header from "../components/header";
import Card from "../components/card";
import Advertisement from "../components/ads";
import Footer from "../components/footer";
const HomePage = function () {
    return `
      ${Header()}
      <h1>Trang chủ</h1>
      <div style="display: flex; width: 100%">
        <div style="width: 40%">${Advertisement()}</div>
        <div style="width: 60%">
          ${Card()}
          ${Card()}
          ${Card()}
        </div>
      </div>
      ${Footer()}
    `
  }

export default HomePage;