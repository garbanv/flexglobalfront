import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import Page from '../src/app/page'
import Slideshow from '../src/app/(components)/Slideshow'
 
const mockSlides = [{
  callToAction: "Get a Quote",
  heading: "Test Heading",
  id: 1,
  link: "#",
  subheading: "Test Subheading",
  image: {
    url: "/test.jpg"
  }
}];

describe('Page', () => {
  it('renders a heading', async () => {
    render(<Page />)
    
    await waitFor(() => {
      /* const heading = screen.getByRole('heading', { level: 1 }) */
      const sectionName= document.querySelector('slideshow')
      console.log("sectionName", sectionName)
    })
  })
})

describe ('Page should have a button to get a quote', () => {
  it('renders a button', async () => {
    render(<Page />)
    await waitFor(() => {   
      screen.findAllByText( 'Personal insurance' )
    })

     
  })
})