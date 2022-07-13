import { Box, useTheme } from "@mui/material";
import { useEffect } from "react";
import { useRequest } from "./async/requestContext";
import Converter from "./components/converter/Converter";
import Header from "./components/header/Header";

function App() {
  const theme = useTheme();
  const { fetchData } = useRequest();
  const url = "https://api.apilayer.com/exchangerates_data/latest?";

  useEffect(() => {
    fetchData(url);
  }, []);
  return (
    <Box sx={{ backgroundColor: theme.palette.bg.main }}>
      <Header />
      <Converter />
    </Box>
  );
}

export default App;
