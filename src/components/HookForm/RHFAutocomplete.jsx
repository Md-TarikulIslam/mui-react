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
      render={({ field, fieldState: { error } }) => (
        <div className="w-full">
          <Autocomplete
            multiple
            options={options}
            value={field.value || []}
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
        </div>
      )}
    />
  );
}

export default RHFAutocomplete;
