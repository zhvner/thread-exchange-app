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
          name: "Team Member 1",
          image: "/images/placeholder.jpg",
          position: "Designer",
          major: "Graphic Design",
          whyJoined: "Passionate about sustainable fashion",
          university: "Thread University",
        },
        {
          id: 2,
          name: "Team Member 2",
          image: "/images/placeholder.jpg",
          position: "Developer",
          major: "Computer Science",
          whyJoined: "Interested in tech solutions for sustainability",
          university: "Code Academy",
        },

        {
            id: 3,
            name: "Team Member 3",
            image: "/images/placeholder.jpg",
            position: "Marketing Specialist",
            major: "Marketing",
            whyJoined: "Committed to spreading sustainable fashion awareness",
            university: "Marketing University",
          },
          {
            id: 4,
            name: "Team Member 4",
            image: "/images/placeholder.jpg",
            position: "Content Writer",
            major: "English Literature",
            whyJoined: "Passionate about storytelling and sustainability",
            university: "Literature College",
          },
        // Add more team members and their data as needed
      ];




  
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading 
      title = "Meet our team"
      subtitle="Get to know the faces behind Thread Exchange."
      />
       <div className="grid grid-cols-2 gap-4">
       {teamMembers.map((member) => (
          <div key={member.id} className="text-center">
            <img
              src={member.image}
              //alt={member.name}
              className="max-w-full h-auto"
            />
            <h3 className="font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.position}</p>
            <p className="text-sm">{member.major}</p>
            <p className="text-sm italic">{member.whyJoined}</p>
            <p className="text-sm">{member.university}</p>
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