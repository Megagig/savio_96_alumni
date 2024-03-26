import members from '/members.json';
import MemberCard from '../components/members/MemberCard';

const MembersListPage = () => {
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {members.length === 0 ? (
          <p>No members found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {members.map((member) => (
              <MemberCard key={member._id} member={member} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MembersListPage;
