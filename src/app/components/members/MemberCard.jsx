import Image from 'next/image';
import Link from 'next/link';

const MemberCard = ({ member }) => {
  return (
    <div className="bg-white shadow-sm ">
      <div className="flex">
        <Image
          className=" w-60 h-60 rounded-t-xl object-cover"
          src={member.image}
          alt="Member"
          height={80}
          width={80}
          sizes="100vw"
          fit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-gray-500">{member.Profession}</p>
        <Link href={`/members/${member._id}`} className="text-blue-500">
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default MemberCard;
