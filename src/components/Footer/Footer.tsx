import { Container } from './styles'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import twitterIcon from '../../assets/twitter-icon.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>T</span>
        <span>Hibbers</span>
      </a>
      <div>
        <p>
          {/* This website was made with <img src={reactIcon} alt="React" /> 
          <span>❤️</span> */}
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/tom-hibbers/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/tomhibbers"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://twitter.com/tomhibbers"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitterIcon} alt="Twitter" />
        </a>
      </div>
    </Container>
  )
}
