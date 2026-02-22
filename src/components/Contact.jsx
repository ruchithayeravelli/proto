import { Mail, MapPin, Phone, Trash2 } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissions, setSubmissions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSubmission = {
      id: Date.now().toString(),
      ...formData,
      timestamp: new Date().toLocaleString()
    };
    setSubmissions(prev => [newSubmission, ...prev]);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const deleteSubmission = (id) => {
    setSubmissions(prev => prev.filter(sub => sub.id !== id));
  };

  return (
    <section id="contact">
      <div>
        <h2>Get In Touch</h2>
        <p>Have a project in mind or just want to chat? Feel free to reach out!</p>

        <div>
          <div>
            <Mail />
            <h3>Email</h3>
            <p>yeravelliruchitha@gmail.com</p>
          </div>
          <div>
            <Phone />
            <h3>Phone</h3>
            <p>+91 8019636667</p>
          </div>
          <div>
            <MapPin />
            <h3>Location</h3>
            <p>Hyderabad,Telanagana</p>
          </div>
        </div>

        <div>
          {isSubmitted && (
            <div>
              <p>✓ Thank you for your message! I'll get back to you soon.</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {submissions.length > 0 && (
          <div>
            <h3>Submitted Messages ({submissions.length})</h3>
            <div>
              {submissions.map((submission) => (
                <div key={submission.id}>
                  <div>
                    <div>
                      <h4>{submission.name}</h4>
                      <p>{submission.email}</p>
                      <p>{submission.timestamp}</p>
                    </div>
                    <button onClick={() => deleteSubmission(submission.id)} title="Delete message">
                      <Trash2 />
                    </button>
                  </div>
                  <div>
                    <p>Subject: {submission.subject}</p>
                    <p>{submission.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
export default Contact;