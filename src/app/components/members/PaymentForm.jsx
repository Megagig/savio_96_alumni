import { useState } from 'react';

const PaymentForm = ({ memberId }) => {
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would normally send a POST request to your API endpoint.
    console.log({
      memberId,
      paymentAmount,
      paymentMethod,
      accountNumber,
      accountName,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for paymentAmount, paymentMethod, accountNumber, and accountName */}
      {/* Submit button */}
    </form>
  );
};

export default PaymentForm;
