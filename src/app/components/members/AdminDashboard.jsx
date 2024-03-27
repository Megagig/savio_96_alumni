import members from '/members.json';

const AdminDashboard = () => {
  const handleApprove = (memberId, paymentId) => {
    // Here you would normally send a PUT request to your API endpoint.
    console.log(`Approving payment ${paymentId} for member ${memberId}`);
  };

  return (
    <div>
      {members.map((member) => (
        <div key={member._id}>
          <h1>{member.name}</h1>
          {member.payments.map((payment) => (
            <div key={payment.id}>
              <p>Amount: {payment.amount}</p>
              <p>Status: {payment.status}</p>
              {payment.status === 'Pending' && (
                <button onClick={() => handleApprove(member._id, payment.id)}>
                  Approve
                </button>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
