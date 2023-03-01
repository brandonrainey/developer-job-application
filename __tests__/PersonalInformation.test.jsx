import { fireEvent, getByTestId, render, screen, waitFor } from '@testing-library/react'
import PersonalInformation from '../components/PersonalInformation'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'

describe('Personal Information', () => {
    

    test('correct placeholder text', () => {
        render(<PersonalInformation />)
        
        const firstName = screen.getByPlaceholderText('First Name')

        expect(firstName).toBeInTheDocument()
    })

    test('correct text for resume upload', async () => {
        render(<PersonalInformation />)

        const input = screen.getByTestId('resume input')

        await act(async () => {
           fireEvent.change(input, {target: {files: [{name: 'myresume'}]}}) 
        })

        const text = screen.getByTestId('resume name')

        await waitFor(() => {
            expect(text).toHaveTextContent('myresume')
        })

        
    })
})