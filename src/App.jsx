import { Delete } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import PrimaryButton from "./components/Button/PrimaryButton";
import FormProvider from "./components/HookForm/FormProvider";
import PasswordField from "./components/HookForm/PasswordField";
import RHFAutocomplete from "./components/HookForm/RHFAutocomplete";
import RHFDate from "./components/HookForm/RHFDate";
import RHFEditor from "./components/HookForm/RHFEditor";
import RHFTextField from "./components/HookForm/RHFTextField";
import RHFUploadImage from "./components/HookForm/RHFUploadImage";
import Data from "./components/Table/Data";

function App() {
  const methods = useForm();
  const { handleSubmit } = methods;

  const handleRegister = (data) => {
    console.log(data);
  };

  const movies = [
    { label: "The Shawshank Redemption",value: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  return (
    <Box>
      <FormProvider methods={methods} onSubmit={handleSubmit(handleRegister)}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
            <RHFTextField
              name="name"
              label="Enter your name"
              helperText="Not more than 2 things"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <RHFAutocomplete
              name="movies"
              label="Select Movie"
              helperText="Not more than 2 things"
              options={movies}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PasswordField
              name="password"
              label="Enter Password"
              helperText="Not more than 2 things"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <RHFDate
              name="date"
              label="Select a Date"
              helperText="DD/MM/YYYY"
            />
          </Grid>
          <Grid item xs={12}>
            <RHFUploadImage
              name="image"
              placeholder="Select an Image"
              helperText="Image"
            />
          </Grid>
          <Grid item xs={12} sx={{ margin: "20px 0" }}>
            <RHFEditor name="edit" label="Start Typing..." helperText="Image" />
          </Grid>
        </Grid>
        <Box sx={{ margin: "20px 0" }}>
          {" "}
          <PrimaryButton type="submit" icon={<Delete />}>
            Submit
          </PrimaryButton>
        </Box>
      </FormProvider>
      <Box sx={{ margin: "20px 0" }}>
        <Data />
      </Box>
    </Box>
  );
}

export default App;
