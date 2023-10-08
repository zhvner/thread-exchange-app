'use client';
import { useState } from "react";
import useAboutModal from "@/app/hooks/useAboutModal";
import Modal from "./Modal";
import Heading from "../Heading"




const AboutModal= () => {
    const [isLoading, setIsLoading] = useState(false);
    const aboutModal = useAboutModal();
    


  
  const bodyContent = (
    <div className="flex flex-col gap-4 ">
      <Heading 
      subtitle = "Welcome!  We're not just an app we're a movement dedicated to making fashion a force for good. " 
      />

      {/* Additional Content */}
      <Heading 
      midtitle="Our Mission"
      //subtitle="At Thread Exchange, our passion is twofold:"
      />

      <p>At Thread Exchange, our passion is :</p>
      <p>
        <b>Fast Fashion Awareness: </b>
        
        To shed light on the environmental and ethical consequences of fast fashion. Our digital platform is designed to educate and inspire change in fashion consumption habits. However, our commitment doesn't stop there.
      </p>


      <Heading 
      midtitle="Transforming Schools and Communities"
      content="Our Social Project"
      />

      <p>One of our proudest initiatives is our social project, where we collaborate with schools in different regions of British Columbia. We're passionate about instilling the values of sustainability and conscious consumption in the hearts and minds of Gen Z.</p>
      
      <Heading 
      midtitle="A Digital Hub for Sustainable Fashion"
      content="While our social projects create change on the ground, our digital platform is your go-to resource for all things sustainable fashion:"
      /> 

      <p>
        <b>1. Survey Insights:  </b>
        Take our survey to gain valuable insights into your fashion habits and discover opportunities for sustainable choices.
      </p>

      <p>
        <b>2. Educational Content:  </b>
        Explore our library of articles, guides, and resources, designed to empower you with knowledge about eco-friendly materials, ethical brands, and sustainable trends.
      </p>

      <p>
        <b>3. Community Support:  </b>
        Connect with like-minded individuals, share your journey, and find inspiration from others on their sustainable fashion path.
      </p>
    </div>
  )

    
    return (
        <Modal
        disabled={isLoading} // if submitting smth performs loading 
        isOpen={aboutModal.isOpen} //trigger registerModal
        onClose={aboutModal.onClose} // closes when we choose x
        onSubmit={aboutModal.onClose}
        
        title="About Us"
        actionLabel={"Return"}
        body = {bodyContent}
        />
    )
}

export default AboutModal;