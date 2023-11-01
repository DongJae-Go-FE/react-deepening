import React from 'react'
import ReactDom from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App'
import GlobalStyles from './GlobalStyles'

const client = new QueryClient({})

const $root = document.getElementById('app')

ReactDom.createRoot($root).render(
  <div>
    <GlobalStyles />
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </div>,
)
