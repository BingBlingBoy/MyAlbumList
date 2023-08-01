import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider} from "@tanstack/react-query"
import store from './store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <React.StrictMode>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </Provider>
        </React.StrictMode>
)
