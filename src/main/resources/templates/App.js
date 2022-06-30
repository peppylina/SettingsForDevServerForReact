import React, { Component } from "react";
import HomeComp from "./components/HomeComp";

class MyComponent extends Component {
    render() {
        return (
            <div>
                Hello World
                <button>Click me</button>
                <HomeComp />
            </div>
        )
    }
}
export default MyComponent;