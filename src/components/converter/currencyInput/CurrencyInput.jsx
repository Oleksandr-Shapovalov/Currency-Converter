import { Autocomplete, Box, TextField, useTheme } from "@mui/material";
import React, { memo } from "react";
import { useRequest } from "../../../async/requestContext";

export default memo(({ useInput, useCurrency }) => {
  const theme = useTheme();
  const { rates, isLoading } = useRequest();
  return (
    <Box
      component={"div"}
      sx={{
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        "&:first-of-type": { mb: "1rem" },
        height: 200,
        backgroundColor: theme.palette.bg.dark,
        boxShadow: `
          2px 2px 2.2px rgba(0, 0, 0, 0.017),
          6.5px 6.5px 5.3px rgba(0, 0, 0, 0.025),
          14.2px 14.2px 10px rgba(0, 0, 0, 0.029),
          26.8px 26.8px 17.9px rgba(0, 0, 0, 0.035),
          48.3px 48.3px 33.4px rgba(0, 0, 0, 0.044),
          100px 100px 80px rgba(0, 0, 0, 0.06)`,
        "&:hover": {
          opacity: 0.9,
        },
      }}
    >
      <TextField
        sx={{ maxWidth: 150 }}
        {...useInput}
        id="outlined"
        color={`primary`}
        label="Value"
        variant="outlined"
      />

      <Autocomplete
        isOptionEqualToValue={(option, value) => option.id === value.id}
        loading={isLoading}
        ListboxProps={{
          sx: {
            maxHeight: 150,
            "& li:nth-of-type(even)": { backgroundColor: "#CCC" },
            "& li:nth-of-type(odd)": { backgroundColor: "#FFF" },
          },
        }}
        value={useCurrency.value}
        onChange={(event, newValue) => useCurrency.onChange(newValue)}
        disablePortal
        id="combo-box-demo"
        options={rates ? Object.keys(rates) : []}
        sx={{ width: 150, ml: "10px" }}
        renderInput={(params) => <TextField {...params} label="Currency" />}
      />
    </Box>
  );
});
