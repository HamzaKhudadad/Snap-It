import React from 'react';
//import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, } from 'antd';

import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";

import Countries from './components/countries.component';
import Global from './components/global.component';
import Visualization from './components/visualization.component';
import Sidebar from './components/sidebar';
import FetchdataRedux from './components/FetchdataRedux/fetchdataRedux'

import titleImg from '../src/assets/Title.png';
import logo from '../src/assets/c19-logo.png';
const { Header, Sider, Footer, Content, } = Layout;

const App = () => {
    
  


   

 

        return (
        
 
        <Router>
                   <FetchdataRedux/>
              <Layout>
        <Sider style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}>
           <img src={logo} style={{width:'100px' , margin: '20px 20px 20px 20px'}} alt="" />
             
        <Sidebar/>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
          
             <img src={titleImg} style={{width:'500px' , margin: '0px 0px 0px 220px'}} alt="" />
             
          </Header>
          <Content style={{margin: '24px 0px 24px 200px', padding: 24, minHeight: "calc(100vh - 114px)", background: "#fff"}}>
     
                <Switch>
                    <Route path="/global" component={Global} />
                    <Route path="/countries" component={Countries} />
                    <Route path="/visualization" component={Visualization} />
                    <Redirect to="/global" from="/" />
                  
                </Switch>
               
                


          </Content>
        <Footer style={{ margin: '0px 0px 0px 200px',textAlign: 'center' }}> C19-Stats ©2020 Created by Raja Hamza</Footer>
        </Layout>
        
      </Layout>
      </Router> 
        );



    }



export default App;