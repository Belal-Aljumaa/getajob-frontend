import { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import { Job } from "./types";

type IAppContext = {
  jobs: Job[];
}

type IAppProvider = {
  children: React.ReactNode;
}

const backendUrl = "http://localhost:3333";

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    (async () => {
      setJobs((await axios.get(`${backendUrl}/jobs`)).data);
    })();
  }, []);
  return (
    <AppContext.Provider
      value={{
        jobs,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
