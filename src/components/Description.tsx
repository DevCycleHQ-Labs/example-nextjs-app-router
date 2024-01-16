import { getVariableValue } from '@/app/devcycle';

/**
 * Example server component
 */
async function Description() {
  const step = await getVariableValue('example-text', 'default')

  return (
    <div className="App-description" data-testid="app-description">
      {getMessage(step)}
      <a
        className="App-link"
        href="https://docs.devcycle.com/sdk/client-side-sdks/nextjs/"
        target="_blank"
        rel="noopener noreferrer"
      >
        DevCycle Next.js SDK Docs
      </a>
    </div>
  );
}

const getMessage = (step: string) => {
  switch (step) {
    case 'step-1':
      return (
        <>
          <h3>Welcome to DevCycle&apos;s example app.</h3>
          <p>
            If you got here through the onboarding flow, just follow the instructions to change and create new Variations and see how the app reacts to new Variable values.
          </p>
        </>
      )
    case 'step-2':
      return (
        <>
          <h3>Great! You&apos;ve taken the first step in exploring DevCycle.</h3>
          <p>
            You&apos;ve successfully toggled your very first Variation. You are now serving a different value to your users and you can see how the example app has reacted to this change.
          </p>
          <p>
            Next, go ahead and create a whole new Variation to see what else is possible in this app.
          </p>
        </>
      )
    case 'step-3':
      return (
        <>
          <h3>You&apos;re getting the hang of things.</h3>
          <p>
            By creating a new Variation with new Variable values and toggling it on for all users, you&apos;ve already explored the fundamental concepts within DevCycle.
          </p>
          <p>
            There&apos;s still so much more to the platform, so go ahead and complete the onboarding flow and play around with the feature that controls this example in your dashboard.
          </p>
        </>
      )
    default:
      return (
        <>
          <h3>Welcome to DevCycle&apos;s example app.</h3>
          <p>
            If you got to the example app on your own, follow our README guide to create the Feature and Variables you need to control this app in DevCycle.
          </p>
        </>
      )
  }
}

export default Description;
