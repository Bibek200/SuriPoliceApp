import React from 'react';

const Notices = () => (
  <div className="p-4 max-w-4xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">Notices</h2>
    <ul className="space-y-2">
      <li className="border p-2 rounded shadow">
        <p className="font-semibold">Annual General Meeting – 2025</p>
        <p>Date: 25th May 2025 | Time: 10:00 AM</p>
      </li>
      <li className="border p-2 rounded shadow">
        <p className="font-semibold">Loan Scheme Revision Notice</p>
        <p>Effective from: 1st June 2025</p>
      </li>
    </ul>
  </div>
);

export default Notices;