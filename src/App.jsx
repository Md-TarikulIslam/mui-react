import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import FormProvider from "./components/HookForm/FormProvider";
import PasswordField from "./components/HookForm/PasswordField";
import RHFAutocomplete from "./components/HookForm/RHFAutocomplete";
import RHFDate from "./components/HookForm/RHFDate";
import RHFTextField from "./components/HookForm/RHFTextField";
import RHFUploadImage from "./components/HookForm/RHFUploadImage";
import RHFEditor from "./components/HookForm/RHFEditor";
import PrimaryButton from "./components/Button/PrimaryButton";
import { Delete } from "@mui/icons-material";

function App() {
  const methods = useForm();
  const { handleSubmit } = methods;

  const handleRegister = (data) => {
    console.log(data);
  };

  const movies = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  return (
    <div>
      <FormProvider methods={methods} onSubmit={handleSubmit(handleRegister)}>
        <RHFTextField
          name="name"
          label="Enter your name"
          helperText="Not more than 2 things"
        />
        <RHFAutocomplete
          name="movies"
          label="Select Movie"
          helperText="Not more than 2 things"
          options={movies}
          // multiple={false}
        />
        <PasswordField
          name="password"
          label="Enter your name"
          helperText="Not more than 2 things"
        />
        <RHFDate name="date" label="Select a Date" helperText="DD/MM/YYYY" />
        <RHFUploadImage
          name="date"
          placeholder="Select an Image"
          helperText="Image"
        />
        <RHFEditor name="edit" label="Start Typing..." helperText="Image" />
        <PrimaryButton type="submit" icon={<Delete />}>Submit</PrimaryButton>
      </FormProvider>
    </div>
  );
}

export default App;
