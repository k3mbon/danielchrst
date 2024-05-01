import React from 'react'
import "../styles/Home.css"
import logo from '../assets/logo_daniel_white.png'

const Home = () => {
    const recipientEmail = 'daniell.christiyanto@gmail.com';
  const subject = ' ';
  const body = ' ';

  // Encode subject and body for URL
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  // Construct mailto link
  const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;


  return (
    <div className='home-container'>
        <img src={logo}/>
        <p>
            <b>Daniel Christ</b> is a dynamic sales and marketing specialist with a keen eye for innovation and a deep understanding of consumer behavior in the digital age. Their expertise spans across diverse industries, from e-commerce startups to established brands, where they have successfully crafted and executed strategies that drive growth and engagement.
        </p>
        <p>
            Equipped with a versatile skill set, <b>Daniel Christ</b> excels in crafting compelling narratives and delivering impactful campaigns across various channels, including social media, email marketing, influencer partnerships, and experiential activations. Their ability to adapt to evolving market trends and leverage emerging technologies ensures that their strategies remain ahead of the curve.
        </p>
        <p>
            Throughout their career, <b>Daniel Christ</b> has worked with renowned brands such as Honda and Santosa Intercultural School, delivering measurable results and forging lasting relationships. Their innovative approaches have earned recognition within the industry and positioned them as a trusted advisor in the realm of sales and marketing.
        </p>
        <p>
            Currently, <b>Daniel Christ</b> is channeling their passion for innovation into exploring the frontier of Artificial Intelligence-driven marketing solutions, seeking to revolutionize the way businesses connect with their audiences and drive conversions in an increasingly digital landscape.
        </p>
        <p><a href={mailtoLink}>Contact</a></p>
        <p><a href="/work">Work</a></p>
        <p>Expertise</p>
    </div>
  )
}

export default Home