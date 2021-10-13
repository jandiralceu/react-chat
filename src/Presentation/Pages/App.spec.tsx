import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  test('should render page properly', () => {
    render(<App />)
    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
  })
})
