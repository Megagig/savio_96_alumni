'use client';
import { useRouter } from 'next/router';
import PaymentForm from '@/app/components/members/PaymentForm';
import members from '/members.json';

const Payments = ({ member }) => {
  // const router = useRouter();
  // const { id } = router.query;

  if (!member) {
    return <p>Member not found</p>;
  }
  const memberData = members.find((member) => member._id === id);
  return (
    <div>
      <PaymentForm />
      <h1>{member.name}</h1>
      <p>Total Dues: {member.totalDues}</p>
      <p>Outstanding Dues: {member.outstandingDues}</p>
      <h2>Payments</h2>
      {member.payments.map((payment) => (
        <div key={payment.id}>
          <p>Amount: {payment.amount}</p>
          <p>Status: {payment.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Payments;
