import { Button } from "@mui/material";
import React from "react";

const PrimaryButton = ({
  name,
  icon,
  children,
  loading,
  loadingText,
  disabled,
  ...rest
}) => {
  return (
    <div>
      <Button
        {...rest}
        disabled={disabled || loading}
        variant="contained"
        endIcon={icon}
      >
        {loading ? loadingText || "Loading..." : children}
      </Button>
    </div>
  );
};

export default PrimaryButton;
