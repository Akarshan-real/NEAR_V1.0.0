import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router.tsx'
import { AuthProvider } from './contexts/Auth/AuthContext.tsx'
import { LoaderProvider } from './contexts/loader/LoaderContext.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
    <AuthProvider>
        <LoaderProvider>
            <RouterProvider router={router} />
        </LoaderProvider>
    </AuthProvider>
)
