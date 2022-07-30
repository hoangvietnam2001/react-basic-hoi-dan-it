import React from "react";
import { Fragment } from "react/cjs/react.production.min";
class MyComponent extends React.Component {

    // key : value
    state = {
        name:'',
        address : 'Thanh Hoa'
    };

    handleOnChangName = (e)=>{
        //merge 
        this.setState({
            name: e.target.value,
            address:'Ha Noi'
        })
    }
    /*
        JSX : Có thể sử dụng JS trong HTML => return bloc
        + <React.Fragment></React.Fragment> nếu version cao hơn thì có thể dùng shortcut  <></> để gom code thành1 block mà ko thừa các element ko mong muốn

    */
    // Phải dùng arrow function áp dụng cho DOM Events
    handleOnClickButton = ()=>{
        const name = 'Nam Nek';
        console.log(name);
        alert('Click To Cancel');
    }
    render() {
        console.log(">> re-render:",this.state);
        // let name = "Hoang Nam";
        return (
           <Fragment>
                <div className="first">
                    <h1>Hello Guys, My name is {this.state.name}</h1>
                    <h2>I from {this.state.address} provence</h2>
                </div>
                <div className="second">
                    <input type='text' value={this.state.name} 
                    onChange={(event)=>{
                        this.handleOnChangName(event)
                    }}/>
                </div>
                <div className="third">
                    <button onClick={()=>this.handleOnClickButton()}>Click me</button>
                </div>
           </Fragment>
        );
    }
}

export default MyComponent;