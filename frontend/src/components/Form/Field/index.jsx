import React, { useMemo } from "react";
import { useFormContext, useController } from "react-hook-form";
import ServerSelect from "./ServerSelect";

function FieldComponent({ field, isEdit, id }) {
  const { control } = useFormContext();
  const rules = {
    required: `${field.label} is required`
  };

  const { field: inputField, fieldState: { error } } = useController({
    name: field.name,
    control,
    rules: rules,
  });

  const isDisabled = useMemo(() => !isEdit && !!id, [isEdit, id]);
  const fieldValue = useMemo(() => inputField.value, [inputField.value]);

  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2">
        {field.label}
        {field.type === "textarea" ? (
          <textarea
            {...inputField}
            placeholder={field.placeholder}
            className={`mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
              fieldValue ? "font-normal" : ""
            } ${error ? "border-red-500" : ""}`}
            disabled={isDisabled}
          />
        ) : field.type === "select" ? (
          <ServerSelect inputField={inputField} field={field} isEdit={isEdit} id={id} />
        ) : (
          <input
            {...inputField}
            {...(field.componentProps || {})}
            type={field.type}
            placeholder={field.placeholder}
            className={`mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
              fieldValue ? "font-normal" : ""
            } ${error ? "border-red-500" : ""}`}
            disabled={isDisabled}
          />
        )}
      </label>
      {error && (
        <p className="text-red-500 text-sm">
          {error.message}
        </p>
      )}
    </div>
  );
}

const Field = React.memo(FieldComponent);

export default Field;
export { ServerSelect };
