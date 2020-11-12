import React from 'react'
import Section from '../../components/section/section'
import Experience from '../../components/experience/experience'
import './experience-page.css'

const exps = [
	{
		key: 'Assistant',
		id: 'cmu',
		name: 'Deep Learning Research Assistant',
		location: 'VDEL in Carnegie Mellon University',
		locLink: 'http://vdel.me.cmu.edu/',
		dates: 'April 2020 - present',
		bullets: [
			'Implement deep learning solutions for interdisciplinary problems, mainly within the field of ' +
			'engineering & facbrication.',
			'Utilized transfer learning to build a CNN model that classifies flaws within additive manufacturing ' +
			'processes using audio samples',
			'Currently working on developing abstract knowledge of physical componenet diagrams using semantic segmentation,' +
			'graph neural networks, and classical computer vision techniques.',
			'Utilize PyTorch, SciPy, and Scikit-Learn mainly.'
		]
	},
	{
		key: 'Intern',
		id: 'heidelberg',
		name: 'Research Intern',
		location: 'Heidelberg University',
		locLink: 'https://www.physi.uni-heidelberg.de/?lang=en',
		dates: 'July 2018 - August 2018',
		bullets: [
			'Programmed in Python creating data collection systems for various physics experiments using Raspberry Pi 3.',
			'Did data analysis on experiment results using Pandas, NumPy, and Matplotlib.',
			'Worked extensively with Ph.D students to design and build many experiments having to do with classical optics.',
		]
	},
	{
		key: 'Developer',
		id: 'developer',
		name: 'Freelance Web Developer',
		dates: 'September 2018 - present',
		bullets: [
			'Build modern, maintainable, and beautiful websites for local organizations/artists.',
			'Work with a variety of technologies including JavaScript, React, jQuery, and Nginx.',
			'Communicate daily with multiple clients to ensure all needs are met.',
		],
		examples: [
			{name: 'dvhackers.com', link: 'http://www.dvhackers.com/'},
			{name: 'tjef.org', link: 'https://tjef.org'},
			{name: 'chars-hotdogs.com', link: 'https://chars-hotdogs.com'}
		]
	},
	{
		key: 'Tutor',
		id: 'tutor',
		name: 'Computer Science Tutor',
		location: 'Diablo Valley College',
		locLink: 'https://dvc.edu',
		dates: 'September 2019 - May 2020',
		bullets: [
			'Tutor DVC students in Computer Science topics ranging from algorithms & data structures to assembly programming.',
			'Work mainly with C, C++, Java, and MASM.',
			'Practice creative problem solving, effective communication skills, and programming best practices.'
		]
	}
]

const ExperienceList = props => (
	<Section id="experience" title="Experience">
		{exps.map( exp => (
			<Experience id={exp.id}
									name={exp.name}
									location={exp.location}
									locLink={exp.locLink}
									dates={exp.dates}
									bullets={exp.bullets}
									examples={exp.examples}/>
		))}

	</Section>
)

export default ExperienceList