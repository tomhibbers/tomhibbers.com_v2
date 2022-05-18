import { Container } from './styles'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import twitterIcon from '../../assets/twitter-icon.svg'
import { Timeline } from 'react-twitter-widgets'
import { useState } from 'react'

export function Feed() {
    const [testtheme, setTestTheme] = useState("dark");
    function changeTheme() {
        setTestTheme('light');
    } 
    // const testtheme = 'dark';
  return (
    <Container className="feed">
        <header>
        <h2>Feed</h2>
        <button type="button" onClick={changeTheme}>test</button>
        <Timeline
            dataSource={{
                sourceType: 'profile',
                screenName: 'TwitterDev'
            }}
            options={{
                height: '600px',
                width: '600px',
                theme: `${testtheme}`,
                chrome: 'nofooter, noheader'
            }}
        />
      </header>
    </Container>
  )
}
