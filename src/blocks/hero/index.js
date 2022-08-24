// Import React
import React from 'react'

// Import Elements
import { ContactForm } from 'elements'

// Import Layouts
import { Section } from 'layouts'

// Import Libraries
// import { StaticImage } from 'gatsby-plugin-image'

// Import Modifiers
import classy from 'modifiers/classy'

// const background_image = {
// 	src : '../../../static/images/equipment_setup.jpg',
// 	alt : 'White equipment with blue lights'
// }

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

	// const backgroundClasses = classy([
	// 	'impact-background',
	// ])

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

	const phoneLinkClasses = classy([
		'subtitle',
		'is-5',
		'is-link',
		'has-text-weight-bold',
		'has-text-centered',
		'is-rounded',
		'button',
		'is-success'
	])

	return ( <>
		<Section { ...heroClasses } container = { false } >
			<div { ...topWrapperClasses } >
				<div { ...topClasses } >
					<h2 className='title is-3'> Services Offered </h2>
					<p className='subtitle is-5'>
						DJ Eddie G is happy to meet with clients for a consultation before the big day.
					</p> 
					<p>
						During this time together, you can discuss music options, timeline, bilingual MC services, and the do-not-play list. Proof of liability insurance can be provided. He can provide all his own equipment, such as premium lighting for the dancefloor, a sound/PA system, microphones, up-lighting, TVs, and a projector. 
					</p>
					<p>
						DJ Eddie G has a large selection of music genres to please any crowd.
					</p> 
				</div>
			</div>
			<div { ...bodyClasses } >
				<div { ...panelClasses } >
					<p>
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
					</ul>
					<div className='has-text-weight-bold'>
						<p>Let's plan your event, reach me at:</p>
						<div className='is-flex is-justify-content-center '>
							<a 
								href='tel:+1817-706-5162'
								{ ...phoneLinkClasses }
							>
								817-706-5162
							</a>
						</div>
					</div>
				</div>
				<div { ...formClasses } >
					<ContactForm/>
				</div>
			</div>
		</Section>
		{/* <div { ...backgroundClasses }>
			<StaticImage
				{ ...background_image }
				className='image is-16by9'
			/>
		</div> */}
	</>)
}

export default ImpactHero