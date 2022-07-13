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
