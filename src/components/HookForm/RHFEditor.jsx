import { Controller, useFormContext } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const RHFEditor = ({ name, label, ...rest }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div>
          <Editor
            placeholder={label}
            value={field.value}
            onChange={field.onChange}
            {...field}
            {...rest}
          />
          {error && (
            <p className="text-red-500 text-[10px] font-medium pl-2">
              {error.message}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default RHFEditor;

const Editor = ({ value, onChange, ...other }) => {
  return (
    <div
      style={{
        paddingBottom: "40px",
      }}
    >
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        style={{ height: "220px", color: "#000", display: "block" }}
        modules={{
          toolbar: [
            [{ size: ["small", false, "large", "huge"] }],
            [
              "bold",
              "italic",
              "underline",
              "strike",
              "blockquote",
              "code-block",
            ],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ align: [] }],
            ["link", "image"],
            ["clean"],
          ],
        }}
        {...other}
      />
    </div>
  );
};
