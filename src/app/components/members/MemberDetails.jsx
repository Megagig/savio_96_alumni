import Image from 'next/image';
import PayDues from './PayDues';

const MemberDetails = ({ member }) => {
  // If member is not defined, return null or some loading state
  if (!member) {
    return null;
  }

  return (
    <div className="p-2 flex flex-col items-center">
      <div className="mb-2">
        <Image
          className="mr-2 rounded-md"
          src={member.image}
          alt={member.profession}
          width={300}
          height={300}
          priority={true}
        />
      </div>
      <div className="p-2 flex flex-col items-center">
        <p className="text-3xl">{member.name}</p>
        <p className="mt-3 md:w-2/3">
          {member.Address.street}, {member.Address.city}, {member.Address.state}
        </p>
        <div className="text-xl mt-3 mb-5">
          <p>
            {member.Address.zip}, {member.Address.country}
          </p>
        </div>
        <PayDues member={member} />
      </div>
    </div>
  );
};

export default MemberDetails;
