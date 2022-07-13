import axios from "axios";
import { createContext, useContext, useState } from "react";
const RequestContext = createContext(null);

const RequestProvider = ({ children }) => {
  const [rates, setRates] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const { data } = await axios.get(url, {
        headers: { apikey: "X4d8gJoU22uQZBk84NAnDbx1kQIdckdG" },
      });
      setRates(data.rates);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <RequestContext.Provider value={{ rates, isLoading, fetchData }}>
      {children}
    </RequestContext.Provider>
  );
};
export const useRequest = () => useContext(RequestContext);
export default RequestProvider;
