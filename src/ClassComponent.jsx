import React from 'react';
import B from './App';
class A extends React.Component{
    render(){
        return <p>Xin chào ReactJS, hiển thị HTML sử dụng Class Component</p> 
    }
}
//constructor
class A1 extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={show:"constructor",stateChange:""};
        
    }
    // static getDerivedStateFromProps(props,state){
    //     return {show: props.show1,stateChange: <B/>}
    // }
    //phuong thuc getDerivedStateFromProps() ghi de cai componentDidMount
    componentDidMount(){
        setTimeout(()=>
        this.setState({stateChange: "Minh123"}, function () {
            console.log(this.state.stateChange);
        }),2000);
      
    }
    render(){
        return(
            <>
                <p>"Gọi đầu tiên " {this.state.show}</p>;
                <p>Constructor gọi đầu tiên, Gọi getDerivedStateFromProps trước khi render ra HTML, "+ {this.state.stateChange}+ "HTML</p>
                <p>"Constructor gọi đầu tiên, Gọi getDerivedStateFromProps trước khi render ra HTML, Render HTML, hiển thị HTML xong sẽ nhìn thấy" +{this.state.show}</p>

            </>
        ) 
            
        
    }
    
}

export {
    A,A1,
}