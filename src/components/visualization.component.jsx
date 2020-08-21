import React from 'react';
import 'antd/dist/antd.css';
import {  useSelector } from "react-redux";

import {
    CartesianGrid,
  LineChart,
  Line,
  Legend,
  Tooltip,
  XAxis,
  YAxis
  } from "recharts";

import { Row, Col, Typography, } from 'antd';


const {Title, Text} = Typography;
const Visualization = () => {

    const dataR=useSelector(state => state.global.dataR);
  



    const usaData = dataR.filter(entry =>
        entry.country.toLowerCase().includes('usa')
        );
        const brazilData = dataR.filter(entry =>
            entry.country.toLowerCase().includes('brazil')
            );
        const indiaData = dataR.filter(entry =>
            entry.country.toLowerCase().includes('india')
            );
    
      console.log(usaData);
       console.log(brazilData.cases);
       

       const data = [
        { name: "Total Cases", USA: usaData[0].cases,  Brazil:brazilData[0].cases, India: indiaData[0].cases },
        { name: "Deaths", USA: usaData[0].deaths,  Brazil:brazilData[0].deaths, India: indiaData[0].deaths },
        { name: "Recovered", USA: usaData[0].recovered,  Brazil:brazilData[0].recovered, India: indiaData[0].recovered},
    
        { name: "Critical", USA: usaData[0].critical,  Brazil:brazilData[0].critical, India: indiaData[0].critical },
        { name: "Active", USA: usaData[0].active,  Brazil:brazilData[0].active, India: indiaData[0].active },
      ];

    return(
        <div>
        <Row  gutter={[70, 0]} justify="center" >
        <Col span={5}  style={{ margin: '220px 0px 0px 0px'}}> 
           <Text>Comparison of Top Three Most Affected Countries </Text> 
<Title level={3}> USA , Brazil , India </Title>
        </Col>
        

        <Col style={{ margin: '100px 0px 0px 0px'}}> 
        <LineChart
        width={600}
        height={400}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <Line
          type="monotone"
          dataKey="USA"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Brazil" stroke="#82ca9d" />
        <Line type="monotone" dataKey="India" stroke="#1890ff" />

        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
      </Col>

      </Row>
      
      </div>
     

    )

}

export default Visualization;