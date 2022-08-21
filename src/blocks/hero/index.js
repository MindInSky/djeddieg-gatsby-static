// Import React
import React from 'react'

// Import Elements
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
			className
	])

	const backgroundClasses = classy([
		'impact-background',
	])

	return ( <>
		<Section { ...heroClasses }>
			<div>
				This site is still underconstruction.
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