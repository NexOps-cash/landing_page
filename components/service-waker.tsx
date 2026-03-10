'use client'

import { useEffect } from 'react'

export function ServiceWaker() {
  useEffect(() => {
    // Wake up the Render-hosted MCP server on first load
    // This uses a non-blocking fetch with no-cors to avoid CORS issues and minimize impact
    const wakeUp = async () => {
      try {
        await fetch('https://nexops-mcp.onrender.com/', {
          mode: 'no-cors',
          cache: 'no-cache',
        })
      } catch (err) {
        // Silently fail as this is just a health check/wake-up call
      }
    }

    wakeUp()
  }, [])

  return null
}
