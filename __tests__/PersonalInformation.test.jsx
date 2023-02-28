import { render, screen } from '@testing-library/react'
import PersonalInformation from '../components/PersonalInformation'
import '@testing-library/jest-dom'

describe('Personal Information', () => {
    test('correct placeholder text', () => {
        render(<PersonalInformation />)
        
        const firstName = screen.getByPlaceholderText('First Name')

        expect(firstName).toBeInTheDocument()
    })
})