import React from 'react';
//import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import fetchdata from './HigherOrderComponent/fetchdata';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,

} from "recharts";
import { Row, Col, Typography, } from 'antd';
import totalcasesImg from '../assets/32441b.png'
import deathImg from '../assets/k0eN3.png'
import recoveredImg from '../assets/2118404.png'


const {Title, Text} = Typography;

// In this Component Higher Order Component (fetchdata)is used to fetch data from Api and send data to this components as props


const Global = ({allData}) => {


  const TABLE_LIST = [
    { name: "Total Cases", pv: allData.cases, amt: 2400 },
    { name: "Recovered", pv: allData.recovered, amt: 2210 },
    { name: "Deaths", pv: allData.deaths, amt: 2290 },
    { name: "Critical", pv: allData.critical, amt: 2000 },
    { name: "Active", pv: allData.active, amt: 2181 },
 
  ];


return(
<div>
<Row justify="center" >
        <Col> 
            
            <Text>Latest Updates on Corona Virus and Statistics updated every Ten Minutes </Text>
        </Col>
 </Row>
<Row justify="center" >

<Col style={{ margin: '50px 0px 0px 0px'}}> 
<BarChart
        width={600}
        height={300}
        data={TABLE_LIST}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      
        <Bar dataKey="pv" fill="#1890ff" />
      </BarChart>
      </Col>

      </Row>
      <Row justify="center" >
      <Col style={{ margin: '50px 0px 0px 100px'}}  > 
      <img src={totalcasesImg} style={{height:'200px'}} alt="" />
            <Col> 
            <Title level={4}>
            Total Cases:{allData.cases}
            </Title> 
            </Col>
      </Col>
      <Col style={{ margin: '50px 0px 0px 100px'}}> 
      <img src={recoveredImg} style={{height:'200px'}} alt=""/>
            <Col> 
            <Title level={4}>
            Recovered:{allData.recovered}
            </Title> 
            </Col>
      </Col>
      <Col style={{ margin: '50px 0px 0px 100px'}}> 
      <img src={deathImg} style={{height:'200px'}} alt="" />
            <Col> 
            <Title level={4}>
            Deaths:{allData.deaths}
            </Title> 
            </Col>
      </Col>
      </Row>

           </div>

);

}
    
     
           
      


    



export default fetchdata(Global, `https://disease.sh/v3/covid-19/all`) ;