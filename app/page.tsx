'use client'

import React, { useState, useEffect } from 'react'
import { createViewState, JBrowseApp } from '@jbrowse/react-app'
import { getSnapshot } from 'mobx-state-tree'
import '@fontsource/roboto'

import config from './config'

type ViewModel = ReturnType<typeof createViewState>

function View() {
  const [viewState, setViewState] = useState<ViewModel>()

  useEffect(() => {
    const state = createViewState({
      config,
    })
    setViewState(state)
  }, [])

  if (!viewState) {
    return null
  }

  return (
    <>
      <h1>JBrowse 2 React App Demo (with next14)</h1>

      <JBrowseApp viewState={viewState} />
    </>
  )
}

export default View
