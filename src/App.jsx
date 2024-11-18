import React from "react";
import Header from "./components/custom/header/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/custom/dashboard/Dashboard";
import ProtectedRoute from "./components/custom/protected-route/ProtectedRoute";
import AddBook from "./components/custom/add-book/AddBook";
import AddStudent from "./components/custom/add-student/AddStudent";
import Analytics from "./components/custom/analytics/Analytics";
import Chart from "./components/custom/chart/Chart";
import ReturnBook from "./components/custom/return-book/ReturnBook";
import StudentList from "./components/custom/student-list/StudentList";
import IssueBook from "./components/custom/issue-book/IssueBook";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 1000,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/addStudent" element={<AddStudent />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/returnBook" element={<ReturnBook />} />
          <Route path="/studentList" element={<StudentList />} />
          <Route path="/issueBook" element={<IssueBook />} />
          <Route path="*" element={<Navigate to="/" />} />


        </Route>
      </Routes>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;