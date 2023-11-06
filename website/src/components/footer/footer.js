import React from 'react'
import instaImg from '../../img/ig_icon.png'
import githubImg from '../../img/github_icon.png'
import gmailImg from '../../img/gmail_icon.png'
import twitterImg from '../../img/twitter_icon.png'
import docImg from '../../img/document.svg'
import resume from "../../img/resume1.pdf"
import './footer.css'

const Footer = props => (
	<div id="footer">
		<a href="https://github.com/abusel" target="_blank"><img className="footer-img" src={githubImg}/></a>
		<a href="mailto:buselax@gmail.com"><img className="footer-img" src={gmailImg}/></a>
		<a href={resume} target="_blank" title="resume"><img className="footer-img" src={docImg}/></a>
	</div>
)

export default Footer
