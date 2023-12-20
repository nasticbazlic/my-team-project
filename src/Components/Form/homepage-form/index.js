import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import Button from "../../Button";

import './homepage-form.scss';

const HomePageForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
    }
  });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='homepage-form'>
      <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField 
            {...field}
            placeholder='Email'
            classes={{ root:'email' }}
            variant="filled"
          />
          )}
        />
        <Button variation='homepage-form_btn'>
          Get early access
        </Button>
    </form>
  )
}

export default HomePageForm;