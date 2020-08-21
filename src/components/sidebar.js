import React from 'react';
import { Menu } from 'antd';
import {
  HomeOutlined,
    GlobalOutlined,
    FundViewOutlined
 
  } from '@ant-design/icons';
import {useHistory}  from 'react-router';

const Sidebar = () => {
    const history = useHistory();

    const handleGlobalClick = () => {
       
        history.push('/global');
      
    }
    
    const handleCountriesClick = () => {
    
      history.push('/countries');
       
        
        
    }

    const handleVisualizationClick = () => {
    
      history.push('/visualization');
       
        
        
    }

  return (
      <div>
        
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" onClick={handleGlobalClick} icon={<GlobalOutlined />}>
              Global
            </Menu.Item>
            <Menu.Item key="2" onClick={handleCountriesClick} icon={<HomeOutlined />}>
              Local
            </Menu.Item>
            <Menu.Item key="3" onClick={handleVisualizationClick} icon={<FundViewOutlined />}>
              Visualization
            </Menu.Item>
            
          </Menu>
        </div>
  );
}

export default Sidebar;
