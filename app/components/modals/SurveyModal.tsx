'use client';

//since using a hook we need use client component

import useSurveyModal from "@/app/hooks/useSurveyModal";
import Modal from "./Modal";
import { useState } from "react";

import { useMemo } from "react";
enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  IMAGES = 2,
  DESCRIPTION =3,

}


const SurveyModal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const surveyModal = useSurveyModal();
    const [step, setStep] = useState(STEPS.CATEGORY)

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

    return (
        <Modal
        disabled={isLoading} // if submitting smth performs loading 
        isOpen={surveyModal.isOpen} //trigger registerModal
        onClose={surveyModal.onClose} // closes when we choose x
        onSubmit={surveyModal.onClose}
        actionLabel = "Next"
        title="Survey"
        />
      );
}
 
export default SurveyModal;