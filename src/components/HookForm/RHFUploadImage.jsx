import { Controller, useFormContext } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { useEffect } from "react";
import { Box, Button, Input, Typography } from "@mui/material";
import { BorderAll } from "@mui/icons-material";

const RHFUploadImage = ({ name, label,helperText, className, ...other }) => {
  const { control, setValue, setError, clearErrors } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box  borderRadius={1} display="flex" className={`${className}`}>
          {label && (
            <Typography>{label}:</Typography>
          )}
          <UploadBox
            files={field.value}
            error={!!error}
            {...field}
            {...other}
            name={name}
            setValue={setValue}
            setError={setError}
            clearErrors={clearErrors}
            helperText={error ? error.message : helperText}
          />
          {error && (
            <p className="text-red-500 text-[10px] font-medium pl-2">
              {error.message}
            </p>
          )}
        </Box>
      )}
    />
  );
};

export default RHFUploadImage;

const UploadBox = ({
    placeholder,
    error,
    disabled,
    name,
    setValue,
    setError,
    clearErrors,
    value,
    className,
    ...other
  }) => {
    const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
      accept: "image/*",
      disabled,
      onDrop: (acceptedFiles) => {
        clearErrors(name);
        const file = acceptedFiles[0];
        if (!file.type.startsWith("image/")) {
          setError(name, {
            type: "manual",
            message: "Only image files are allowed",
          });
        } else {
          setValue(name, file);
        }
      },
      ...other,
    });
  
    const isError = isDragReject || error;
  
    return (
      <Box
        {...getRootProps()}
        sx={{
          width: '100%',
          height: '100%',
          p: 2,
          fontSize: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          borderRadius: 1,
          border: '1px dashed',
          borderColor: isDragActive
            ? 'primary.main'
            : isError
            ? 'error.main'
            : 'grey.600',
          backgroundColor: isDragActive
            ? 'primary.light'
            : isError
            ? 'error.light'
            : disabled
            ? 'grey.300'
            : 'transparent',
          transition: 'all 300ms',
          '&:hover': {
            borderColor: disabled ? '#e8e8e8' : '#e8e8e8',
            backgroundColor: disabled ? 'transparent' : '#e8e8e8',
          },
        }}
      >
        <Input {...getInputProps()} />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
          <img
            src={
              value
                ? value instanceof File
                  ? URL.createObjectURL(value)
                  : value
                : "https://cdn-icons-png.flaticon.com/128/8191/8191581.png"
            }
            alt="Uploaded"
            style={{ display: "block", maxHeight: "100px" }}
          />
          <Button sx={{ textAlign: 'center', fontSize: '0.875rem' }}>
            {placeholder || "Drag & Drop or Browse Image"}
          </Button>
        </Box>
      </Box>
    );
  };
