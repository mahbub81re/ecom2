"use client"
import { store } from '@/statesmaneger/store'
import { Provider } from 'react-redux'

export default function Home() {
  return (
    <Provider store={store}>
        <h1>Ecommerce</h1>
    </Provider>
  )
}
