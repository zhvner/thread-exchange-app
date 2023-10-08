'use client';
import { useState } from "react";
import Modal from "./Modal";
import Heading from "../Heading"
import useTeamModal from "@/app/hooks/useTeamModal";




const TeamModal= () => {
    const [isLoading, setIsLoading] = useState(false);
    const teamModal = useTeamModal();

    const teamMembers = [
        {
          id: 1,
          name: "Hammad",
          image: "/images/placeholder.jpg",
          position: "Designer",
          major: "Graphic Design",
          whyJoined: "Passionate about sustainable fashion",
          university: "UBC",
        },
        {
          id: 2,
          name: "Zhanerke",
          image: "/images/placeholder.jpg",
          position: "Developer",
          major: "Computer Science",
          whyJoined: "Interested in tech solutions for sustainability",
          university: "UBC",
        },

        {
            id: 3,
            name: "Jose",
            image: "/images/placeholder.jpg",
            position: "Marketing Specialist",
            major: "Marketing",
            whyJoined: "Committed to spreading sustainable fashion awareness",
            university: "UBC",
          },
          {
            id: 4,
            name: "Puru",
            image: "/images/placeholder.jpg",
            position: "Content Writer",
            major: "English Literature",
            whyJoined: "Passionate about storytelling and sustainability",
            university: "UBC",
          },
          {
            id: 5,
            name: "Team Member 5",
            image: "/images/placeholder.jpg",
            position: "Content Writer",
            major: "English Literature",
            whyJoined: "Passionate about storytelling and sustainability",
            university: "UBC",
          }
        // Add more team members and their data as needed
      ];




  
  const bodyContent = (
    <div className="flex flex-col gap-4 items-center justify-center">
      <Heading 
      title = "Meet our team"
      subtitle="Get to know the faces behind Thread Exchange."
      />
       <div className="grid grid-cols-2 gap-4">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="text-center"
          >
            <div className="mx-auto ml-10 ">
              <img
                src={member.image}
                alt={member.name}
                className=" rounded-lg ml-9"
                style={{ maxWidth: "120px" }} // Adjust the image size as needed
              />
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
              <p className="text-sm">{member.major}</p>
              <p className="text-sm italic">{member.whyJoined}</p>
              <p className="text-sm">{member.university}</p>
            </div>
          </div>
        ))}
      </div>

      </div>

     
  )


    return (
        <Modal
        disabled={isLoading} // if submitting smth performs loading 
        isOpen={teamModal.isOpen} //trigger registerModal
        title="Meet Our Team"
        actionLabel={"Return"}
        onClose={teamModal.onClose} // closes when we choose x
        onSubmit={teamModal.onClose}
        body = {bodyContent}
        />
    )
}

export default TeamModal;