import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import '../css/SignUp.css'
import { dottedBg } from '../../Styles';
import { type FormField } from '../../Types';

const SignUp = () => {
  const [isLooking, setIsLooking] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<FormField>();

  const onSubmit: SubmitHandler<FormField> = async (data) => {
    try {
      console.log(data);

      
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate('/');
    } catch (error) {
      setError("root", { message: "This username is already taken" })
    }
  }
  return (
    <div className='w-screen h-screen flex-mid text-white' style={dottedBg} id='SignUp'>
      <div className='w-4/5 md:w-[30%] h-2/3 md:h-2/5 rounded-3xl outline-2 outline-white outline-offset-[2.5rem] bg-(--void)'>
        <form
          className='w-full h-full rounded-3xl flex flex-col justify-center items-center gap-10'
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className='text-4xl font-bold text-center'>Sign Up for NEAR</h2>
          {/* Username */}
          <div className='relative w-11/12 h-[15%]'>
            <input
              placeholder=' '
              {...register("userName", {
                required: "Username is required", minLength: { value: 4, message: "Name must be atleast 4 characters" },
                validate: (value): string | boolean => { return /^[a-zA-Z0-9._ ]+$/.test(value) || "Only letters, numbers, dot (.) and underscore (_) are allowed" }
              })}
              className={`w-full h-full pl-5 outline-1 outline-(--border-grey) rounded-2xl`}
              type="text" id="signInName"
              autoComplete='off' />
            <label
              className='absolute left-5 top-1/2 -translate-y-1/2 cursor-text'
              htmlFor="signInName">Enter username
            </label>
            {errors.userName && <div className='translate-x-5 translate-y-2 text-red-600'>{errors.userName.message}</div>}
            {errors.root && <div className='translate-x-5 translate-y-2 text-red-600'>{errors.root.message}</div>}
          </div>

          {/* Password */}
          <div className='relative w-11/12 h-[15%]'>
            <input
              placeholder=' '
              {...register("password", {
                required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" },
                validate: (value): string | boolean => { return /\d/.test(value) ? true : "Password must contain 1 number" }
              })}
              className={`w-full h-full pl-5 outline-1 outline-(--border-grey) rounded-2xl`}
              type={isLooking ? "text" : "password"} id="signInPassword"
              autoComplete='off' />
            <label
              className='absolute left-5 top-1/2 -translate-y-1/2 cursor-text'
              htmlFor="signInPassword">Create password
            </label>
            {errors.password && <div className='translate-x-5 translate-y-2 text-red-600'>{errors.password.message}</div>}
            <button
              className='absolute rounded-tr-2xl rounded-br-2xl right-0 h-full px-4 border-l border-(--border-grey) cursor-pointer top-1/2 -translate-y-1/2 transition-colors duration-200 ease-in-out'
              onClick={() => { setIsLooking(prev => !prev) }} type="button">{isLooking ? "Hide" : "Show"}</button>
          </div>
          <button type="submit"
            className='cursor-pointer flex-mid bg-green-600 hover:bg-(--green) w-1/2 min-h-10 h-12 text-2xl rounded-4xl transition-colors duration-250 ease-in-out'
            disabled={isSubmitting}
          >{isSubmitting ? "Loading..." : "Sign Up"}</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp