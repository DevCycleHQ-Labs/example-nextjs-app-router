'use client'
import { useAllFeatures, useVariableValue } from '@devcycle/nextjs-sdk';
import classNames from 'classnames';
import Image from 'next/image';

/**
 * Example client component
 */
function ToggleBot() {
  /**
   * The useVariableValue hook will return the current value of a variable.
   * If no value is defined for the current user, the default value will be returned.
   */
  const shouldWink = useVariableValue('togglebot-wink', false)
  const spinSpeed = useVariableValue('togglebot-speed', 'off')

  const features = useAllFeatures()
  const { variationName = 'Default' } = features['hello-togglebot'] ?? {}

  return (
    <div className="App-content">
      <div className="ToggleBot-message" data-testid="togglebot-message">
        &quot;{getMessage(spinSpeed)}&quot;
      </div>
      <Image
        src={getImageSource(spinSpeed, shouldWink)}
        className={classNames(['ToggleBot-logo', `spin-${spinSpeed}`])}
        alt="togglebot"
        width={240}
        height={198}
      />
      <div className="ToggleBot-variation">
        Serving Variation: <b>&quot;{variationName}&quot;</b>
      </div>
    </div>
  );
}

const getMessage = (spinSpeed: string) => {
  switch (spinSpeed) {
    case 'slow':
      return 'Awesome, look at you go!'
    case 'fast':
      return 'This is fun!'
    case 'off-axis':
      return '...I\'m gonna be sick...'
    case 'surprise':
      return 'What the unicorn?'
    default:
      return 'Hello! Nice to meet you.'
  }
}

const getImageSource = (spinSpeed: string, shouldWink: boolean) => {
  if (spinSpeed === 'surprise') return 'unicorn.svg'
  return shouldWink ? '/togglebot-wink.svg' : '/togglebot.svg'
}

export default ToggleBot;
