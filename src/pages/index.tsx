import React from 'react'
import Layout from '../components/Layout'
import SpotifyLogin from '../components/SpotifyLogin'
import TwitterLogin from '../components/TwitterLogin'

const Index = () => (
  <Layout>
    <section className="flex flex-row">
      <TwitterLogin />
      <SpotifyLogin />
    </section>
  </Layout>
)
export default Index
