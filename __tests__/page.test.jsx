import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../src/app/page'
 
describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
 
    expect(heading).toBeInTheDocument()
  })
})

describe ('Page', () => {
  it('renders a button', () => {
    render(<Page />)
    const ctaButton = screen.getByRole('link', { name: 'Get a Quote' })
    expect(ctaButton).toBeInTheDocument()
  })
})