import { useState } from "react";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedLayout } from "./components/ProtectedLayout";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/profile">
                        <ProtectedLayout>
                            <h2>Hello,This is the profile component!</h2>
                        </ProtectedLayout>
                    </Route>

                    <Route path="/login" />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
