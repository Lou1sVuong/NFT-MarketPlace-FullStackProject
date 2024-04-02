import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface User {
  name: string;
  // Các thuộc tính khác của người dùng nếu có
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => null,
});

export function UserContextProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!user) {
      axios.get("/infoUser").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
