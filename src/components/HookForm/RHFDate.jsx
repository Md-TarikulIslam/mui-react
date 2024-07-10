import { Alert, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

function RHFDate({ name, label, helperText, className, ...other }) {
  const { control } = useFormContext();
  const [cleared, setCleared] = useState(false);

  useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            {...field}
            label={label}
            onChange={(date) => field.onChange(date)}
            slotProps={{
              textField: {
                helperText: helperText,
                variant: "filled",
                id: "filled-basic",
                color: "warning",
              },
              field: { clearable: true, onClear: () => setCleared(true) },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                variant="filled"
                error={!!error}
                className={className}
                {...other}
              />
            )}
          />
          {cleared && (
            <Alert
              sx={{ position: "absolute", bottom: 0, right: 0 }}
              severity="success"
            >
              Field cleared!
            </Alert>
          )}
        </LocalizationProvider>
      )}
    />
  );
}

export default RHFDate;
