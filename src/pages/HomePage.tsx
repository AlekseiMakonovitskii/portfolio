import React from 'react'
import { Container } from '../coreComponents'
import Page from '../components/Page'

function HomePage() {
  return (
    <Page>
      <Container>HomePage</Container>
    </Page>
  )
}

export default React.memo(HomePage);
