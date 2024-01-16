import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config: Config = {
  testEnvironment: 'jsdom',
}

const esModules = ['@devcycle/nextjs-sdk', 'uuid'].join('|')

export default async () => {
  const nextJestConfig = await createJestConfig(config)()
  // Custom workaround to set transformIgnorePatterns
  // Overwrite the first pattern /node_modules/
  nextJestConfig.transformIgnorePatterns ??= []
  nextJestConfig.transformIgnorePatterns[0] = `/node_modules/(?!(${esModules}))`
  return nextJestConfig
}