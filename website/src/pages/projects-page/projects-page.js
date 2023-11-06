import React from 'react'
import './projects-page.css'
import Section from "../../components/section/section";
import ProjectCard from '../../components/project-card/project-card'
import Slideshow from '../../components/slideshow/slideshow'
import Button from '../../components/button/button'
import trackImg from '../../img/trackIt_screenshot.png'
import sortImg from '../../img/sort_img.png'
import curdleImg from '../../img/curdle1.png'
import curdle2Img from '../../img/curdle2.png'
import interviewAnywhereImg from '../../img/InterviewAnywhere1.png'
import interviewAnywhereImg2 from '../../img/InterviewAnywhere2.png'
import stockTrack1 from '../../img/stockTrack1.png'
import stockTrack2 from '../../img/stockTrack2.png'
import stockTrack3 from '../../img/stockTrack3.png'
import stockTrack4 from '../../img/stockTrack4.png'
import findDining from '../../img/findDining1.jpeg'

const projects = [
	{
		name: 'Curdle',
		images: [{src: curdleImg, alt: "curdle screenshot"}, {src: curdle2Img, alt: "curdle screenshot 2"}],
		github: 'https://github.com/abusel/wordgame',
		desc: 'Curdle is a cheese related Wordle style game. Users get a clue and four guesses to figure out the five letter word ' +
			'I deployed Curdle to heroku and organically generated over 50 MAUs in two months'
	},


	{
		name: 'Interview Anywhere',
		tags: 'Ruby Ruby on Rails Javascript React ES6 HTML5',
		github: 'https://github.com/jhanreg11/sortvisual',
		desc: 'Interview Anywhere is an asyncronous interview platform allowing users to pre-record questions and invite applicants to answer on their own time',
			images: [{src: interviewAnywhereImg, alt: "interview anywhere screenshot"}, {src: interviewAnywhereImg2, alt: "interview anywhere 2"}],

	},
	{
		link: "https://financial-dashboard-project.netlify.app/",
		github: "https://github.com/dahyman91/financial-dashboard",
		name: 'StockTrack',
		images: [
			{
				src: stockTrack1,
				alt: "stocktrack screenshot"
			},
			{
				src: stockTrack4,
				alt: "stocktrack screenshot"
			},
			{
				src: stockTrack2,
				alt: "stocktrack screenshot"
			},
			{
				src: stockTrack3,
				alt: "stocktrack screenshot"
			}
	
		],
		desc: 'Stock Track is a free dashboard combining multiple data sources to provide users with the most up to date financial information to help inform trades',
	},
	{
		name: 'FindDining',
		images: [
			{
				src: findDining,
				alt: "findDining screenshot",
				contain: true
			},

		],
		desc: 'Find Dining is aniOS app that helps users find a nearby restaurant by presenting them with a swipeable tinder-like UI.  I built integrations with Yelp API and Google Maps API to power the core application'

	}
]

const cardList = projects.map((item, i) => (
	<ProjectCard link={item.link} images={item.images} name={item.name} tags={item.tags} github={item.github} right={i % 2 == 0 ? true : false}>{item.desc}</ProjectCard>
))

const ProjectsPage = props => (
	<Section id="projects" title="Projects">
		<div id="projects-body">{cardList}</div>
		<Button to="https://github.com/abusel?tab=repositories">See More</Button>
	</Section>
)

export default ProjectsPage
