import React from 'react';
import { Autocomplete, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

function RHFAutocomplete({
  name,
  label,
  options,
  helperText,
  className,
  ...other
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={[]} // Ensure defaultValue is an array
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          multiple
          options={options}
          getOptionLabel={(option) => option.label || ""}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          value={field.value ||  []}
          onChange={(event, newValue) => field.onChange(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              error={!!error}
              helperText={error ? error.message : helperText}
              variant="filled"
              color="warning"
              className={className}
            />
          )}
          {...other}
        />
      )}
    />
  );
}

export default RHFAutocomplete;
