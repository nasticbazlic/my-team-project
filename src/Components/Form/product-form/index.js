import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

import './product-form.scss';

const ProductForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      comments: '',
    }
  });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='product-form'>
      <Controller
        name="comments"
        control={control}
        render={({ field }) => (
          <TextField 
            {...field}
            label='Comments'
            classes={{ root:'comments' }}
            id="filled-multiline-static"
            multiline
            rows={3}
          />
        )}
      />
    </form>
  )
}

export default ProductForm;