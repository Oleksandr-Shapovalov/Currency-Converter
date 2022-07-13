import {
  AppBar,
  Divider,
  IconButton,
  Paper,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { memo } from "react";
import { useRequest } from "../../async/requestContext";
import { Loader } from "../loader/Loader";

export default memo(() => {
  const { rates, isLoading } = useRequest();
  const convertFromTo = (from, to) => (rates[from] / rates[to]).toFixed(2);

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Currency Converter
            </Typography>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Item>
                {!isLoading ? (
                  `USD/UAH ${convertFromTo("UAH", "USD")}`
                ) : (
                  <Loader h={14} w={14} />
                )}
              </Item>
              <Item>
                {!isLoading ? (
                  `EUR/UAH ${convertFromTo("UAH", "EUR")}`
                ) : (
                  <Loader h={14} w={14} />
                )}
              </Item>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
});
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  width: 80,
  color: theme.palette.text.secondary,
}));
