import type { Control, FieldPath, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface SelectOption {
  value: string;
  label: string;
}

interface FormMultiSelectProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  description?: string;
  placeholder?: string;
  options: SelectOption[];
  required?: boolean;
  disabled?: boolean;
  maxSelections?: number;
}

export function FormMultiSelect<T extends FieldValues>({
  control,
  name,
  label,
  description,
  placeholder = "Select options",
  options,
  required,
  disabled,
  maxSelections,
}: FormMultiSelectProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const selectedValues: string[] = Array.isArray(field.value) ? field.value : [];
        const availableOptions = options.filter(
          (option) => !selectedValues.includes(option.value)
        );

        const handleSelect = (value: string) => {
          if (maxSelections && selectedValues.length >= maxSelections) {
            return;
          }
          
          const newValue = [...selectedValues, value];
          field.onChange(newValue);
        };

        const handleRemove = (value: string) => {
          const newValue = selectedValues.filter((v) => v !== value);
          field.onChange(newValue);
        };

        return (
          <FormItem>
            <FormLabel>
              {label} {required && <span className="text-destructive">*</span>}
            </FormLabel>
            {description && <FormDescription>{description}</FormDescription>}
            
            {/* Selected Items Display */}
            {selectedValues.length > 0 && (
              <div className="flex flex-wrap gap-2 p-3 border rounded-md bg-muted/30">
                {selectedValues.map((value) => {
                  const option = options.find((o) => o.value === value);
                  return (
                    <Badge
                      key={value}
                      variant="secondary"
                      className="pl-3 pr-1 py-1"
                    >
                      {option?.label}
                      <button
                        type="button"
                        onClick={() => handleRemove(value)}
                        disabled={disabled}
                        className="ml-2 hover:bg-muted rounded-full p-0.5"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  );
                })}
              </div>
            )}

            {/* Select Dropdown */}
            <Select
              onValueChange={handleSelect}
              disabled={disabled || (maxSelections ? selectedValues.length >= maxSelections : false)}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {availableOptions.length > 0 ? (
                  availableOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))
                ) : (
                  <div className="py-6 text-center text-sm text-muted-foreground">
                    {maxSelections && selectedValues.length >= maxSelections
                      ? `Maximum ${maxSelections} selections reached`
                      : "No more options available"}
                  </div>
                )}
              </SelectContent>
            </Select>
          
            
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}