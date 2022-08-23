// Import React
import React from 'react'

// Import Elements
import { ContactForm } from 'elements'

// Import Layouts
import { Section } from 'layouts'

// Import Libraries
import { StaticImage } from 'gatsby-plugin-image'

// Import Modifiers
import classy from 'modifiers/classy'

const background_image = {
	src : '../../../static/images/equipment_setup.jpg',
	alt : 'White equipment with blue lights'
}

const ImpactHero = props => {

	const {
			className = false
	} = props

	// Stuff happens here
	const heroClasses = classy([
		'impact-hero',
		'hero',
		'is-fullheight-with-navbar-footer',
		'container',
		className
	])

	const backgroundClasses = classy([
		'impact-background',
	])

	const topWrapperClasses = classy([
		'announcement',
		'hero-head',
		'columns'
	])

	const topClasses = classy([
		'announcement-content',
		'hero-member',
		'column',
		'is-12',
		'content'
	])

	const bodyClasses = classy([
		'impact-content',
		'hero-body',
		'columns',
		'is-justify-content-space-around'
	])

	const panelClasses = classy([
		'hero-panel',
		'hero-member',
		'column',
		'is-5',
		'content'
	])

	const formClasses = classy([
		'hero-form',
		'hero-member',
		'column',
		'is-5'
	])

	return ( <>
		<Section { ...heroClasses } container = { false } >
			<div { ...topWrapperClasses } >
				<div { ...topClasses } >
					<h2 className='title is-3'> Services Offered </h2>
					<p className='subtitle is-6'>DJ Eddie G is happy to meet with clients for a consultation before the big day. During this time together, you can discuss music options, timeline, bliingual MC services, and the do-not-play list. Proof of liabliity insurance can be provided. He can provide all his own equipment, such as a premium lighting for the dancefloor, a sound/PA system, microphones, up-lighting, TVs, and a projector. 
						
					DJ Eddie G has a large selection of music genres to please any crowd. </p> 
				</div>
			</div>
			<div { ...bodyClasses } >
				<div { ...panelClasses } >
					{/* <p>
						In addition to the music, DJ Eddie G also offers a variety of services including:</p>
					<ul>
						<li>LED Photo Booth</li>
						<li>Enclosed/Open Photo Booth</li>
						<li>Dancing On The Clouds</li>
						<li>Monogram In Lights</li>
						<li>Up-lighting</li>
						<li>Cold Sparklers</li>
						<li>Slideshow</li>
						<li>Video Mixing</li>
						<li>Custom Party Sticks</li>
						<li>Ceremony Sound</li>
						<li>CO2 Cannon</li>
						<li>Crazy Hour</li>
					</ul> */}
					<ContactForm netlifyFunc='sendmail'/>
				</div>
				<div { ...formClasses } >
					<ContactForm netlifyFunc='mailing'/>
				</div>
			</div>
		</Section>
		<div { ...backgroundClasses }>
			<StaticImage
				{ ...background_image }
				className='image is-16by9'
			/>
		</div>
	</>)
}

export default ImpactHero