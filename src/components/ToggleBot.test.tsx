import { render, screen } from '@testing-library/react';
import * as dvc from '@devcycle/nextjs-sdk';

import ToggleBot from './ToggleBot';

jest.mock('@devcycle/nextjs-sdk')

describe('ToggleBot', () => {
  let mockUseVariableValue: jest.SpyInstance
  let mockUseAllFeatures: jest.SpyInstance

  beforeEach(() => {
    mockUseVariableValue = jest.spyOn(dvc, 'useVariableValue')
    mockUseAllFeatures = jest.spyOn(dvc, 'useAllFeatures')
  })

  test.each([
    'off',
    'slow',
    'fast',
    'off-axis',
    'surprise'
  ])('renders message text for speed "%s"', (speed) => {
    mockUseVariableValue.mockImplementation((key, defaultValue) => {
      if (key === 'togglebot-speed') return speed
      return defaultValue
    })
    mockUseAllFeatures.mockReturnValue({
      'hello-togglebot': {
        variationName: 'Default'
      }
    })

    render(<ToggleBot />);
    const element = screen.getByTestId('togglebot-message')
    expect(element.textContent).toMatchSnapshot()
  })
})
