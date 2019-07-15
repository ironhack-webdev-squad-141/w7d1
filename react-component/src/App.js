import React from "react";
// import Greeting from "./Greeting";
import Profile from "./Profile";

class App extends React.Component {
  render() {
    const userData = {
      userInfo: {
        firstName: "Paul",
        lastName: "Hellweg",
        email: "paul@hellweg"
      },
      imgUrl:
        "https://www.tubefilter.com/wp-content/uploads/2018/04/jake-paul-1024x629.jpg"
    };

    return (
      <div>
        {/* <Greeting firstName="Paul" /> */}
        {/* <Greeting firstName="Devan" lastName="Pellow" />
        <Greeting /> */}
        <Profile data={userData} />
      </div>
    );
  }
}

export default App;
