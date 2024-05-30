# DevCycle Next.js SDK Example App (TypeScript)

An example app built using [Next.js](https://nextjs.org/) and the [DevCycle Next.js SDK](https://docs.devcycle.com/sdk/client-side-sdks/nextjs/)

## Creating a Demo Feature
This example app requires that your project has a feature with the expected variables, as well as some simple targeting rules. 

#### ⇨ [Click here](https://app.devcycle.com/r/create?resource=feature&key=hello-togglebot) to automatically create the feature in your project ⇦

When you run the example app and switch your identity between users, you'll be able to see the feature's different variations.


## Running the Example
### Setup

* Run `npm install` in the project directory to install dependencies
* Create a `.env` file and set `NEXT_PUBLIC_DEVCYCLE_CLIENT_SDK_KEY` and `NEXT_PUBLIC_DEVCYCLE_SERVER_SDK_KEY` 
to the SDK Key for your environment.\
   * You can find this under [Settings > Environments](https://app.devcycle.com/r/environments) on the DevCycle dashboard. [Learn more about environments](https://docs.devcycle.com/essentials/environments).

### Development

`npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Documentation
For more information about using the DevCycle React SDK, see [the documentation](https://docs.devcycle.com/sdk/client-side-sdks/nestjs/)
