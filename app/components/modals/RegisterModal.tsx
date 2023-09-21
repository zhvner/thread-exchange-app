'use client';

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { 
  FieldValues, 
  SubmitHandler,
  useForm
} from "react-hook-form";

import useRegisterModal from '@/app/hooks/useRegisterModal'


import Modal from "./Modal";
import Heading from "../Heading"
import Input from "../inputs/Input";
import Button from "../Button";

const RegisterModal= () => {
  const registerModal = useRegisterModal(); 
  const [isLoading, setIsLoading] = useState(false);

  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => { //accept data
    setIsLoading(true);

    axios.post('/api/register', data) //will pass the data to register file
    .then(() => { //then function ?
      //toast.success('Registered!');
      registerModal.onClose(); 
    })
    .catch((error) => {
      toast.error("Something went wrong."); // to get the message on top about error
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  //  

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading 
      title = "Welcome to Thread Exchange"
      subtitle = "Create an account"
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button 
        outline 
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn('google')} 
      />
       <Button 
        outline 
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      />
      <div 
        className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        "
      >
        <div className="justify-center flex flex-row items-center gap-2"></div>
        <div>Already have an account?</div>
        <div className="text-neutral-800 cursor-pointer hover:underline"> Log in</div>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading} // if submitting smth performs loading 
      isOpen={registerModal.isOpen} //trigger registerModal
      title="Register"
      actionLabel="Create an account"
      onClose={registerModal.onClose} // closes when we choose x
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default RegisterModal;
