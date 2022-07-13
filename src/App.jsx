import { Box, useTheme } from "@mui/material";
import { useEffect } from "react";
import { useRequest } from "./async/requestContext";
import Converter from "./components/converter/Converter";
import { Error } from "./components/error/Error";
import Header from "./components/header/Header";

function App() {
  const theme = useTheme();
  const { error, fetchData } = useRequest();
  const url = "https://api.apilayer.com/exchangerates_data/latest?";

  useEffect(() => {
    fetchData(url);
  }, []);

  if (error) return <Error error={error.message} />;

  return (
    <Box sx={{ backgroundColor: theme.palette.bg.main }}>
      <Header />
      <Converter />
    </Box>
  );
}

export default App;
