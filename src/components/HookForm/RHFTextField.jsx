import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

function RHFTextField({ name, label, helperText, className, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="w-full">
          <TextField
            {...field}
            label={label}
            sx={{width:'100%'}}
            variant="filled"
            value={field.value || ""}
            color="warning"
            error={!!error}
            helperText={error ? error.message : helperText}
            className={`${className}`}
            {...other}
          />
        </div>
      )}
    />
  );
}

export default RHFTextField;
