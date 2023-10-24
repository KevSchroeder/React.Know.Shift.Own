import React from 'react';
import { useState } from 'react';

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });


  const sendEmail = async (e) => {
    e.prevendDefault();
    const response = await fetch('api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if(response.status === 200) {
      setData({})
    toast.success(`Hey ${data.name}, your message was sent successfully!`)
    }
  }
}
