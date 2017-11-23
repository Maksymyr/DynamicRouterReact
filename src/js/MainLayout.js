import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

const data = require('./data');

@withRouter
export default class MainLayout extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="btns" style={{backgroundColor: "steelblue", width:"400px", minHeight:"50px" }} >
                    {data.map((item, index) => {
                        return <button style={{height:"50px", width:"100px"}} key={index} onClick={()=>this.props.history.push(`/${item.id}`)}>{item.title}</button>
                    })}
                </div>
                <Switch>
                    <Route exact path='/' render={() => <Redirect to={__dirname+`${data[0].id}`}/>}/>
                    {data.map(page =><Route path={__dirname+`${page.id}`} component={require(`./${page.path}`).default} key={page.order}/>)}
                    <Route path="*" render={() => <div>Page Not Found</div>}/>
                </Switch>
            </div>
        ); 
    }
}

