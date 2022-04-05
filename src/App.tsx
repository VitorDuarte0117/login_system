import { useState } from "react";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { Login } from "./components/Login";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/profile"
                        element={
                            <ProtectedLayout>
                                <h2>Hello,this is the profile component</h2>
                            </ProtectedLayout>
                        }
                    />

                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
