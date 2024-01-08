import React, { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Backdrop, CircularProgress } from '@mui/material';
import { ROUTES } from '../config/routes';
const HomePage = lazy(() => import('./HomePage'))
const LoginPage = lazy(() => import('./LoginPage'))
const AdminPage = lazy(() => import('./AdminPage'))
const AdminZaloPage = lazy(() => import('./AdminZaloPage'))
const SmsPage = lazy(() => import('./SmsPage'))
const MessagePage = lazy(() => import('./MessagePage'))
const HistoryPage = lazy(() => import('./HistoryPage'))
const MapPage = lazy(() => import('./MapPage'))
const ZaloPage = lazy(() => import('./ZaloPage'))

const Loading = () => (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'transparent' }} open={true} >
        <CircularProgress color="primary" />
    </Backdrop>
);
export const RootRoutes = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Router>
                <Routes>
                    <Route
                        path={ROUTES.home}
                        element={
                            <HomePage />
                        }
                    />
                    <Route
                        path={ROUTES.login}
                        element={
                            <LoginPage />
                        }
                    />
                    <Route
                        path={ROUTES.admin}
                        element={
                            <AdminPage />
                        }
                    />
                    <Route
                        path={ROUTES.adminZalo}
                        element={
                            <AdminZaloPage />
                        }
                    />
                    <Route
                        path={ROUTES.sms}
                        element={
                            <SmsPage />
                        }
                    />
                    <Route
                        path={ROUTES.message}
                        element={
                            <MessagePage />
                        }
                    />
                    <Route
                        path={ROUTES.message}
                        element={
                            <HistoryPage />
                        }
                    />
                    <Route
                        path={ROUTES.history}
                        element={
                            <HistoryPage />
                        }
                    />
                    <Route
                        path={ROUTES.map}
                        element={
                            <MapPage />
                        }
                    />
                    <Route
                        path={ROUTES.zalo}
                        element={
                            <ZaloPage />
                        }
                    />
                </Routes>
            </Router>
        </Suspense >
    );
};
