import { useState } from "react";
import { FaCalendarPlus } from "react-icons/fa";
import ClubEventCard from "../../components/club/ClubEventCard";
import { Link } from "react-router-dom";
import { useClubById } from "../../store/useClub";

const ClubEvent = () => {
  const [events, setEvents] = useState(false);
  const {clubData} = useClubById();
  
  return (
    <div>
      
    </div>
  );
};

export default ClubEvent;
