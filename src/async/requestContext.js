import axios from "axios";
import { createContext, useContext, useState } from "react";
const RequestContext = createContext(null);

const RequestProvider = ({ children }) => {
  const [rates, setRates] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const res = await axios.get(url, {
        headers: { apikey: "X4d8gJoU22uQZBk84NAnDbx1kQIdckdG" },
      });
      setRates(res.data.rates);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <RequestContext.Provider value={{ rates, isLoading, fetchData, error }}>
      {children}
    </RequestContext.Provider>
  );
};
export const useRequest = () => useContext(RequestContext);
export default RequestProvider;
