import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import * as triggerLogin from '@/hooks/useLogin'

import Login, { LoginComponentProps } from './Login'

jest.mock('@/hooks/useLogin', () => ({
  __esModule: true,
  default: () => ({
    triggerLogin: jest.fn()
  })
}))

describe('renders login form', () => {
  const defaultProps: LoginComponentProps = {
    registerPath: '/register',
    homePath: '/'
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders login form', () => {
    render(<Login {...defaultProps} />)
    expect(screen.getByTestId('login-form')).toBeInTheDocument()
  })

  // it('should move to register page when click register link', async () => {
  //   render(<Login {...defaultProps} />)
  //   fireEvent.click(screen.getByTestId('register-link'))
  //   await waitFor(() => {
  //     expect(screen.findByTestId('register-form')).toBeInTheDocument()
  //   })
  // })

  it('should render error message when submit empty form', async () => {
    render(<Login {...defaultProps} />)
    fireEvent.click(screen.getByTestId('login-button'))
    await waitFor(() => {
      expect(screen.getByTestId('email-error-message')).toBeInTheDocument()
      expect(screen.getByTestId('password-error-message')).toBeInTheDocument()
    })
  })

  it('should call triggerLogin when submit form', async () => {
    const mockTriggerLogin = jest.fn()
    jest.spyOn(triggerLogin, 'default').mockImplementation(() => ({
      triggerLogin: mockTriggerLogin
    }))
    render(<Login {...defaultProps} />)
    fireEvent.change(screen.getByTestId('email-input'), {
      target: { value: 'pojan1@email.com' }
    })

    fireEvent.change(screen.getByTestId('password-input'), {
      target: { value: 'pojan1' }
    })
    fireEvent.click(screen.getByTestId('login-button'))

    await waitFor(() => {
      expect(mockTriggerLogin).toHaveBeenCalled()
    })
  })
})