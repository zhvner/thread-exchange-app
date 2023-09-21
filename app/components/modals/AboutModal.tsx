'use client';
import { useCallback, useEffect, useState } from "react";
import useAboutModal from "@/app/hooks/useAboutModal";
import Modal from "./Modal";
import { 
    FieldValues, 
    SubmitHandler,
    useForm
  } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";


// interface AboutModalProps {
//     isOpen?: boolean;
//     onClose: () => void;
//     title?: string;
//     body?: React.ReactElement;
//     footer?: React.ReactElement;
//     //actionLabel: string;
//     disabled?: boolean; //? mean options
//     //secondaryAction?: () => void;
//     //secondaryActionLabel?: string;
//   }



const AboutModal= () => {
    const [isLoading, setIsLoading] = useState(false);
    const aboutModal = useAboutModal();
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
      aboutModal.onClose(); 
    })
    .catch((error) => {
      toast.error("Something went wrong."); // to get the message on top about error
    })
    .finally(() => {
      setIsLoading(false);
    })
  }



    
    return (
        <Modal
        disabled={isLoading} // if submitting smth performs loading 
        isOpen={aboutModal.isOpen} //trigger registerModal
        title="About Us"
        actionLabel={" "}
        onClose={aboutModal.onClose} // closes when we choose x
        onSubmit={handleSubmit(onSubmit)}
        />
    )
}

export default AboutModal;