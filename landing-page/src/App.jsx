import React from 'react'
import Layout from './components/layout'
import Card from './components/Card'
import Header from './components/Header'
import List from './components/List'

function App() {


  return (
    <>
    <Layout>
      <Header />
      <div className='card-area'>
      <Card title="Card 1" content="This is the content of card 1" />
      <Card title="Card 1" content="This is the content of card 1" />
      <Card title="Card 1" content="This is the content of card 1" />
      </div>
      <List/>
   
    </Layout>
    </>
  )
}

export default App
