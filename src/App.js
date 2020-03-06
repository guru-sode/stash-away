import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Title from './components/Title';

const { Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Title />
        <Footer>
          Design By Gurukiran
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
