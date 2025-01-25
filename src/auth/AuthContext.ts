import { createContext } from "react";

export interface User {
  _id: string;
}

interface AuthContextType {
  user: User | null;
  setUser(user: User | null): void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
