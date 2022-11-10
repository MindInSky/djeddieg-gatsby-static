// Import React
import React from 'react'

// Import Elements
// import { ContactForm } from 'elements'

// Import Layouts
import { Section } from 'layouts'

// Import Libraries
// import { StaticImage } from 'gatsby-plugin-image'
import is from 'is_js'
import { useLocation } from '@reach/router'

// Import Modifiers
import classy from 'modifiers/classy'
import { StaticImage } from 'gatsby-plugin-image'

const ImpactHero = props => {

	const { pathname } = useLocation()

	const {
			className = false,
			title = false,
			textColor = false,
			backdrop = false,
			subtitle = false,
			container = false,
			scrollId = false
	} = props

	// Stuff happens here
	const heroClasses = classy([
		'impact-hero',
		'hero',
		'is-fullheight-with-navbar',
		'is-paddingless',
		backdrop &&  'has-backdrop-dark',
		className
	])

	// const backgroundClasses = classy([
	// 	'impact-background',
	// ])

	// const bodyClasses = classy([
	// 	'impact-content',
	// 	'hero-body',
	// 	'columns',
	// 	'is-justify-content-space-around'
	// ])

	// const panelClasses = classy([
	// 	'hero-panel',
	// 	'hero-member',
	// 	'column',
	// 	'is-5',
	// 	'content'
	// ])

	// const formClasses = classy([
	// 	'hero-form',
	// 	'hero-member',
	// 	'column',
	// 	'is-5'
	// ])

	// const phoneLinkClasses = classy([
	// 	'subtitle',
	// 	'is-5',
	// 	'is-link',
	// 	'has-text-weight-bold',
	// 	'has-text-centered',
	// 	'is-rounded',
	// 	'button',
	// 	'is-success'
	// ])

	const titleClasses = classy([
		'title',
		'is-1',
		textColor && `has-text-${textColor}`,
	])

	const subtitleClasses = classy([
		'subtitle',
		'is-3',
		textColor && `has-text-${textColor}`,
	])

	if ( is.falsy( title ) ) {
		console.warn(` Hero won't render, error: Hero with no title in: `, pathname )
		return null
	}

	return (
		<Section { ...heroClasses } container = { container } id={ scrollId } >
			<StaticImage
				src = '../../../static/images/dancing clouds x6.png'
				alt = ''
				className = 'img-bg-wrapper'
				imgClassName = 'img-bg'
			/>
			<div
				className='hero-body'>
				<div className='container'>
					<h1>
						<p { ...titleClasses }>
							{ title }
						</p>
						{ subtitle &&
							<p { ...subtitleClasses } >
								{ subtitle }
							</p>
						}
					</h1>
				</div>
			</div>
		</Section>
	)
}

export default ImpactHero
