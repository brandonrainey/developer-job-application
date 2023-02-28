// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react'
import Header from '../components/Header'
import '@testing-library/jest-dom'

describe('Header', () => {
  it('renders heading text', () => {
    render(<Header />)

    const heading = screen.getByText('Frontend Developer Application')

    expect(heading).toBeInTheDocument()
  })
})