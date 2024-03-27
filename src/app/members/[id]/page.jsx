import members from '/members.json';
import MemberDetails from '@/app/components/members/MemberDetails';

const getMemberById = (id) => {
  return members.find((member) => member._id === id);
};

const MemberDetailsPage = ({ params: { id } }) => {
  const member = getMemberById(id);
  return member ? <MemberDetails member={member} /> : <p>Member not found</p>;
};

export default MemberDetailsPage;
