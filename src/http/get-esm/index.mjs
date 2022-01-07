// Dependency used just to demonstrate the module system is working
import { string as whatev } from 'whatev'

export async function handler (event) {
  return { whatev, ...event }
}
