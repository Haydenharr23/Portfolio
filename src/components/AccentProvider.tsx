'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

export type Accent = 'purple' | 'green'

const AccentContext = createContext<Accent>('purple')

export function useAccent() {
  return useContext(AccentContext)
}

export default function AccentProvider({ children }: { children: React.ReactNode }) {
  const [accent, setAccent] = useState<Accent>('purple')

  // Randomize on every page refresh.
  useEffect(() => {
    setAccent(Math.random() < 0.5 ? 'purple' : 'green')
  }, [])

  return <AccentContext.Provider value={accent}>{children}</AccentContext.Provider>
}

