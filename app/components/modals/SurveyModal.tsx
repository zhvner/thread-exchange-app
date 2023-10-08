'use client';

//since using a hook we need use client component

import useSurveyModal from "@/app/hooks/useSurveyModal";
import Modal from "./Modal";
import { useState } from "react";

import { useMemo } from "react";
import {FieldValues, useForm} from "react-hook-form"
import Heading from "../Heading";
import { categories } from "../navbar/Categories";
import CategoryInput from '../inputs/CategoryInput';
enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  IMAGES = 2,
  DESCRIPTION =3,

}


const SurveyModal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const surveyModal = useSurveyModal();

    const [step, setStep] = useState(STEPS.CATEGORY);

    const { 
      register, 
      handleSubmit,
      setValue,
      watch,
      formState: {
        errors,
      },
      reset,
    }= useForm<FieldValues>({
      defaultValues: {
        category: '',
        location: null,
        guestCount: 1,
        roomCount: 1,
        bathroomCount: 1,
        imageSrc: '',
        price: 1,
        title: '',
        description: '',
      }
    });

    const category = watch('category');

    const setCustomValue = (id: string, value: any) => {
      setValue(id, value, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      })
    }
    const onBack =() => {
      setStep((value) => value - 1);

    }

    const onNext =() => {
      setStep((value) => value + 1);

    }

    const actionLabel = useMemo(() => {
     if(step === STEPS.DESCRIPTION) {
      return 'Create';
     }

     return 'Next';

    },[step] )

    const secondaryActionLabel = useMemo(() => {
      if(step === STEPS.CATEGORY) {
       return undefined;
      }
 
      return 'Back';
 
     },[step] )

    //  const setCustomValue = (id: string, value: any) => {
    //   setValue(id, value, {
    //     shouldDirty: true,
    //     shouldTouch: true,
    //     shouldValidate: true
    //   })
    // }

     let bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
        title="Which of these best describes your opinion on fast fashion's environmental impact?"
        subtitle="Pick a category"/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
          {categories.map((item) => (
            <div key={item.label} className="col-span-1">
              <CategoryInput
              onClick={(category) => 
                setCustomValue('category', category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
              </div>
          ))}
        </div>
      </div>
      
     )

    return (
        <Modal
        disabled={isLoading} // if submitting smth performs loading 
        isOpen={surveyModal.isOpen} //trigger registerModal
        onClose={surveyModal.onClose} // closes when we choose x
        onSubmit={surveyModal.onClose}
        actionLabel = "Next"
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={step == STEPS.CATEGORY? undefined:onBack}
        title="Survey"
        body={bodyContent}
        />
      );
}
 
export default SurveyModal;