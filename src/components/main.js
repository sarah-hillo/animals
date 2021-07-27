import React from "react";

import HornedBeasts from "./hornedBeast";
import data from "./assets/data.json";
    

class Main extends React.Component {
  render() {
    return (
    //      <main>

    //    <HornedBeasts
    //       title="Cat"
    //       description="pet"
    //      img="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aptuspet.com%2Frus%2Fwww-aptuspet-com-articles-behavior%2F&psig=AOvVaw0MjpUgif34yKXrBPWZqoT8&ust=1627322839300000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCykZPo_vECFQAAAAAdAAAAABAD"
    //     />
    //   <HornedBeasts
    //     title="Dog"
    //      description="pet"
    //       img="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aptuspet.com%2Frus%2Fwww-aptuspet-com-articles-behavior%2F&psig=AOvVaw0MjpUgif34yKXrBPWZqoT8&ust=1627322839300000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCykZPo_vECFQAAAAAdAAAAABAD"
    //   />
    //      </main>

      data.map((element) => {
        return (
          <HornedBeasts
            image_url={element.image_url}
            title={element.title}
            description={element.description}
          />
        );
      })
    );
  }
}

export default Main;
