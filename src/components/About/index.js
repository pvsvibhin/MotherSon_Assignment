import './index.css'

const About = () => (
  <div className="bg" id="about">
    <div className="box1">
      <h1 className="role">Full Stack Developer</h1>
      <div>
        <h1 className="greetings">Hello, my name is PVS Vibhin</h1>
        <p className="body">
          My name is Venkata Sai Vibhin, I am from Visakhapatnam, Andhra
          Pradesh. I have done B. Tech in Computer science from SASTRA
          University, Tamil Nadu in 2022. I have so far gained knowledge in
          technologies like HTML CSS JS and ReactJS in Frontend; Python Express
          and NodeJS in Backend and SQLite databases and looking forward for a
          great opportunity to showcase my skills.
        </p>
        <a href="#projects">
          <button type="button" className="projectsButton">
            Projects
          </button>
        </a>

        <button type="button" className="LinkedInButton">
          LinkedIn
        </button>
      </div>
    </div>
  </div>
)

export default About
