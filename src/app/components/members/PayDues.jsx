'use client';

import Link from 'next/link';

const PayDues = ({ member }) => {
  return (
    <div>
      <div>
        <p className="mt-3 md:w-2/3">Payment Status</p>
        <Link href="/members/payments">
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Pay Your Annual Dues
          </button>
        </Link>
      </div>
      <div>
        <p className="text-3xl">Upload Your Payment Receipt</p>
        <p className="mt-3 md:w-2/3">
          <input type="file" placeholder="Upload Your Receipt" />
        </p>
      </div>
    </div>
  );
};

export default PayDues;
