import PageLayout from "@/components/layout/page-layout";
import LandingPage from "@/pages/landing";
import { Navigate, Route, Routes } from "react-router-dom";

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />

            <Route path="/" element={<PageLayout />}>
                <Route index element={<LandingPage />} />
            </Route>
        </Routes>
    );
}