import React from 'react'
import Section from '../../components/section/section'
import './experience-page.css'
import Stepper from '../../components/stepper/stepper'
import lpgImg from "../../img/LPG-1.png";
import lpgImg2 from "../../img/LPG-2.png";
import searchImg1 from "../../img/Search1.png";


const expList = [
	{
		title: "Flok (YC W21)",
		subtitle1: "Software Engineer",
		subtitle2: "March 2022 - current",
		additionalInfo: ["First engineer hire, helped scale systems from the ground up for venture backed travel tech startup with >$1M in revenue", "Worked on core retreat management platform enabling companies to book hotels and manage employee travel logistics", "Developed custom React component library to replace MaterialUI across all Flok apps", "Developed Squarespace-like website generator feature used by over 10,000 retreat attendees and 100+ companies", "Developed itinerary builder feature allowing users to collaboratively create an itinerary", "Worked with CTO designing the system architecture that supports asychronous file uploads and user notifications"],
		images: [
			{
				src: lpgImg,
				alt: "image"
			},
			{
				src: lpgImg2,
				alt: "image"
			},
			{
				src: searchImg1,
				alt: "image"
			}
		]
	},
	{
title: "BizSwipe | Tinder for B2B connections",
subtitle1: "iOS Development Intern",
subtitle2: "May 2020 - July 2020",
additionalInfo: ["Created an in app browser, helping increase average user activity time", "Established app wide loading patterns and led design of splash screen"]
	},
	{
		title: "Augusta HiTech | Product Development Agency",
		subtitle1: "Summer Intern",
		subtitle2: "May 2019 - August 2019",
		additionalInfo: [
			"Rotated between QA, dev, and product teams in order to learn all stages of the app development cycle",
			"Helped identify and fix bugs in live streaming feature of UBQFit fitness iOS app prior to production releases"
		]
	}
]

const ExperienceList = props => (
	<Section id="experience" title="Experience">
		<Stepper steps={expList}/>
	</Section>
)

export default ExperienceList
