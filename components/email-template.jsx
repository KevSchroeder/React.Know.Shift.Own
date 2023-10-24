import * as React from 'react';

export const EmailTemplate = ({firstName}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>Thank you for sending me a message. I will get back to you soon!</p>
  </div>
);
