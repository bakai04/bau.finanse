import { HowItWorks, Layout, MainPreview, MainVaults } from "../../widgets"
import React from 'react'

const MainPage = () => {
  return (
    <Layout>
      <MainPreview/>
      <MainVaults/>
      <HowItWorks/>
    </Layout>
  )
}

export default MainPage