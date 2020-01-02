import React from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hobbies: ['sleep', 'money', 'eat', 'running', 'swimming'],
            HistoryHobby: [],
            ClickedItem: [],
            error: ''
        };

		
        this.newHobby = '';

        this.onNewHobby = this.onNewHobby.bind(this);
        //this.addNewHobby = this.addNewHobby.bind(this);
    }
	
    onNewHobby(e) {
        this.newHobby = e.target.value;
    }
    addNewHobby = () => {
        if (this.state.hobbies.includes(this.newHobby)) {
            this.setState({
                error: 'error this hobby is existing'
            })
        }
        else
            this.setState({
                hobbies: this.state.hobbies.concat([this.newHobby]),
                error:''

            });
    }
	
    render() {
        return (
            <div className="container-fluid	 mt-4 row">
                <div className="col-md-6">
                    <ol>
                        {
                            this.state.hobbies.map(hobby => <li onClick={() => {
                                this.setState({
                                    ClickedItem: this.state.ClickedItem.concat([hobby]),
                                    HistoryHobby:this.state.ClickedItem.concat([hobby])
                                })
                            }}>{hobby} </li>)
                        }
                    </ol>
                </div>
                <div className="col-md-6">
                    <ol>
                        {
                            this.state.ClickedItem.map(hobby => <li onClick={() => {
                                const updateClickedItem = this.state.ClickedItem.filter(hby => hobby != hby)
                                this.setState({

                                    ClickedItem: updateClickedItem,

                                })
                            }}>{hobby}</li>)
                        }
                    </ol>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <h6 className="m-1"> add new Hobby</h6>
                        <input className="m-1" type="text" onChange={this.onNewHobby}></input>
                        <button className="m-1" onClick={this.addNewHobby}>Add</button>
                        <h6 className="m-3">{this.state.error}</h6>
                        <h5>History:</h5>
                       
                         {this.state.HistoryHobby.map(hobby =><p>{hobby}</p> )}
                       
                    </div>
                </div>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
