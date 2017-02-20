import React from 'react';
import Data from '../data.json';

export default class RegisterData extends React.Component{
    render(){
        let list = [];
        let str;
        let index=0;
        Data.forEach((value) => {
            index++;
            str = value+'';
            str = str.split(':');
            list.push(<tr key={index} className="w3-hover-green">
                        <td>{str[0]}</td>
                        <td>{str[1]}</td>
                      </tr>);
            console.log(str[0]);
        });
        return(
          <div className="w3-responsive">
            <table className="w3-table-all">
                <thead>
                    <tr className="w3-red">
                        <th>Register</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
           </div> 
        );
    };
}