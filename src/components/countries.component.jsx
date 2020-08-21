import React, { useState}from 'react';
import {Table, Row, Col, TreeSelect, Typography,Input, } from 'antd';


import {setCountriesStat} from '../redux/countries-stat-reducer/countries-stat-action'


import { useDispatch, useSelector } from "react-redux";

import 'antd/dist/antd.css';


const {Title, Text} = Typography;
const { TreeNode } = TreeSelect;
const { Search } = Input;

const Countries = () => {

  // useSelector and useDispatch are Alternative of MapStateToProps and MapDispatchToProps 
  // they are more flexible aqnd we don't have to use connect() with them
   const dataR=useSelector(state => state.CountriesStat.countriesData);  
   const dataAll=useSelector(state => state.global.dataR);        
   const dispatch = useDispatch();

   //local States
    const [SortInfo, setSortInfo] = useState([]);
    const [Value, setValue] = useState();
    const [Loading, setLoading] = useState();
    const [SearchValue, setSearchValue] = useState();
   
    
    console.log(dataR);



// Function to handle sort
      const  onChange = value => {
        setValue( value );
        switch(value){
            case'cases':
            setSortInfo(
                {
                    order: 'descend',
                    columnKey: 'cases',
                  },
                );
                break
            case'deaths':
            setSortInfo(
                {
                    order: 'descend',
                    columnKey: 'deaths',
                  },
                );
                break
                case'recovered':
                setSortInfo(
                    {
                        order: 'descend',
                        columnKey: 'recovered',
                      },
                    );
                    break
            default:
                setSortInfo(
                    {
                        order: '',
                        columnKey: '',
                      },
                    );

         }
      };
// data for ant table
    const columns = [

     
        {
            title: 'Country',
            dataIndex: 'country',
          },
        
        {
          title: 'Total Cases',
          dataIndex: 'cases',
          sorter: (a, b) => a.cases - b.cases,
           sortOrder: SortInfo.columnKey === 'cases' && SortInfo.order,
           ellipsis: true,
        },
        {
          title: 'Reported Today',
          dataIndex: 'todayCases'
        },
        {
          title: 'Recovered',
          dataIndex: 'recovered',
          sorter: (a, b) => a.recovered - b.recovered,
          sortOrder: SortInfo.columnKey === 'recovered' && SortInfo.order,
          ellipsis: true,
        },
        {
          title: 'Deaths',
          dataIndex: 'deaths',
          sorter: (a, b) => a.deaths - b.deaths,
          sortOrder: SortInfo.columnKey === 'deaths' && SortInfo.order,
          ellipsis: true,
        },
        {
            title: 'Critical',
            dataIndex: 'critical'
          },
          {
            title: 'Active',
            dataIndex: 'active'
          },
      ];
      

    
// Function to handle search
// gets data from redux and sends the updated data to redux
      const  handleSearch = e => {
        
          
 
  
        const currValue = e.target.value;
        setLoading(true);
        if (currValue===""){
            setLoading(false);
            dispatch(setCountriesStat(dataAll));
        }
        else{
          setSearchValue(currValue);
      
      
       
        const filteredData = dataAll.filter(entry =>
        entry.country.toLowerCase().includes(SearchValue)
        );
       
  
        dispatch(setCountriesStat(filteredData));
        }
        
        
    }

    
       
      

         

     return (
     
         <div>   
           
                   <Row gutter={[40, 0]}>
          <Col span={24}>
            <Title level={2}>
            Countries List
            </Title>
            </Col>
            </Row>


            <Row gutter={[40, 0]}>
           
            <Col className="gutter-row" >
            <Text>
            Sort by:
            </Text>
            </Col>
            <Col className="gutter-row"  span={6}>
         
        <TreeSelect
        showSearch
        style={{ width: '100%' }}
        value={Value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Please select"
        allowClear
        treeDefaultExpandAll
        onChange={onChange}
      >
      
            <TreeNode value="cases"  title="Total Cases" />
            <TreeNode value="deaths" title="Deaths" />
            <TreeNode value="recovered" title="Recovered" />
        
      </TreeSelect>
      </Col>


      <Col className="gutter-row" >
            <Text>
            Search by:
            </Text>
            </Col>
            <Col className="gutter-row" span={6}>
            <Search placeholder="Input Search Term" loading={Loading} 
               onChange={handleSearch}/>


            </Col>
            </Row>
            <br />
        
        <Row gutter={[40, 0]}>
        <Col span={24}>
        <Table  columns={columns} dataSource={dataR} />
        </Col>
        </Row>
         
         </div>
        );



    }


export default Countries;
    