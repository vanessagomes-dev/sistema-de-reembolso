import { Routes, Route } from "react-router";

import { AppLayout } from "../components/AppLayout";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";

export function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} >
      <Route path="/" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
