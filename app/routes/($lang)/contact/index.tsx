import React, {useState} from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    console.log(name, email, message);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h1>Inquires</h1>
        <p>Inquire about availability, booking and pricing.</p>
        <p>Please include description of the services you are looking for.</p>
        <p>contact@styledbybiancag.com</p>
      </div>

      <div style={{}}>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </section>

          <section>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </section>
          <section>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </section>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
