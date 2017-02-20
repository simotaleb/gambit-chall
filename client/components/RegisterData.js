import React from 'react';
import Data from '../data.json';
import SkyLight from 'react-skylight';
var INDEXER=0;
export default class RegisterData extends React.Component{
    constructor(){
        super()
        this.state = {
            rowData : undefined,
            indice : 0
        };
    }
    getIndex(evt){
        this.setState({
            indice: evt
            //rowData: this.state.rowData[index]
        });
        this.refs.simpleDialog.show()
    }
    render(){
        let list = [];
        let str;
        let index=0;
        Data.forEach((value) => {
            index++;
            str = value+'';
            str = str.split(':');
            this.state.rowData = str;
            //console.log(this.state.rowData);
            list.push(<tr key={index} className="w3-hover-green" onClick={this.getIndex.bind(this,index)}>
                        <td>{str[0]}</td>
                        <td>{str[1]}</td>
                      </tr>);
            //console.log(str[0]);
            //this.state.rowData = str[0];
        });
        console.log('final state of index : ',index);
        this.state.rowData = list;
        //console.log(this.state.rowData);
        let x = this.state.indice;
        return(
          <div className="w3-responsive">
            <table className="w3-table-all">
                <thead>~
                    <tr className="w3-red">
                        <th>Register</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.rowData}
                </tbody>
            </table>
            <SkyLight ref='simpleDialog' title='Details'>
                <div className="w3-display-middle">
                    <a className="w3-btn w3-padding-xxlarge"  href='https://gambitgroup.fi'>Take me to gambit</a>
                    <table className="w3-table-all">
                        <thead>
                            <tr className="w3-red">
                                <th>Register</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.rowData[x-1]}
                        </tbody>
                    </table>
                    
                </div>
                     
            </SkyLight>
            
            
           </div> 
        );
    };

    
}