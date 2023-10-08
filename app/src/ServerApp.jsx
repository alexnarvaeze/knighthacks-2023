import React, { useEffect } from "react";

// class ServerApp extends Component {
//     state = {
//         data: null
//     };

//     componentDidMount() {
//         this.callBackendAPI()
//         .then(res => this.setState({ data: res.express }))
//         .catch(err => console.log(err));
//     }

//     callBackendAPI = async () => {
//         const response = await fetch("/express_backend");
//         const body = await response.json();
//         // console.log(body);

//         if (response.status !== 200) {
//             throw Error(body.message);
//         }
//         return body;
//     };

//     render() {
//         return (
//             <p id="aaa">{this.state.data}</p>
//         );
//     }
// }

// export default ServerApp

function ServerApp() {
    /*
    useEffect(() => {
        fetch("http://localhost:5000/express_backend")
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    // return <p></p>
    */
}
export default ServerApp