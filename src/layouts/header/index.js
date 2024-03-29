// Import React
import React from 'react'

// Import Elements
import { Link, CallToAction } from 'elements'

// Import Modifiers
import classy from 'modifiers/classy'

// Import Layouts
import { Container, Navigation } from 'layouts'

// Import Libraries
// import is from 'is_js'
import is from 'is_js'
import { StaticImage } from 'gatsby-plugin-image'

// Import Modifiers
import Wrapper from 'modifiers/wrapper'
// import getValue from 'modifiers/getValue'

const headerData = {
  data: {
    main_cta: {
      type: "primary",
      label: "Contact Us",
      to: "#contact-us"
    },
    menu: {
			title: "Testing Header Menu",
			description: "Testing header menu, need a new default one",
			submenu: [
				{
					title: "About Me",
					main_cta: {
						label: "About Me",
						url: false,
						page: "/about_me"
					}
				},
				{
					title: "Gallery",
					main_cta: {
						label: "Gallery",
						url: "/gallery",
					},
				}
			]
		}
  },
  settings: {
    with_logo: true,
    logo_link: true,
    logo_position: true,
    with_cta: false,
    with_menus: true
  },
  title: "Testing Header",
  description: "Testing Header NOT for prod"
}

const logoData = {
	src : '../../../static/images/slim logo.png',
	alt : 'DJ Eddie G Logo',
	className: 'logo-image'
}

const Header = () => {

	// Stuff happens here
	let {
		className = false,
		data : {
			main_cta = {},
			menu = {} ,
		} = {},
		settings : {
			with_logo = false,
			logo_link = false,
			// logo_position = false,
			// with_cta = false,
			with_menus = false
		} = {}
	} = headerData

	const headerClasses = classy([
		'header',
		'navbar',
		'is-fixed-top',
		className
	])

	const containerClasses= classy([
		'is-marginless',
		'columns',
		// 'is-mobile',
		'is-align-items-stretch',
		'is-justify-content-space-between',
	])

	const logoClasses = classy([
		'column',
		'is-6-mobile',
		'is-4-tablet',
		'is-3-desktop',
		'is-3-widescreen',
		'is-2-fullhd',
		'is-align-items-center',
		'logo'
	])

	const menuDesktopClasses = classy([
		'column',
		'is-narrow',
		'nav-wrapper',
		'is-hidden-mobile',
	])

	// const bannerWrapperClasses = classy([
	// 	'header-banner',
	// 	'column',
	// 	'is-6-tablet',
	// 	'is-narrow-desktop',
	// 	'is-narrow-widescreen',
	// 	'is-narrow-fullhd',
	// 	'is-align-items-center',
	// 	'is-flex',
	// 	'is-align-items-center',
	// 	'has-background-danger',
	// ])

	return (
		<header { ...headerClasses } >
			{/* <StaticImage/> */}
			<Container type='fluid' { ...containerClasses }>
				{ with_logo &&
					<Link
						to="/"
						{ ...logoClasses }
					>
						{/* Logo Image - Start - */}
						<StaticImage
							{ ...logoData }
						/>
						{/* Logo Image -  End  - */}
					</Link>
				}
				{/* Banner  */}
				{/* <div { ...bannerWrapperClasses }>
					<p>
						Renovations are being performed for a better experience
					</p>
				</div> */}
				{ with_menus && ( is.not.empty( menu ) || is.all.truthy( main_cta ) ) &&
					<div { ...menuDesktopClasses } >
					{/* Main CTA - start - */}
					{ main_cta &&
						<CallToAction { ...main_cta } className='header-desktop-cta' />
					}
					{/* Main CTA -  End  - */}
					{/* Navigation  - Start - Menu must not be  */}
					{ with_menus && is.not.empty( menu ) &&
						<Navigation { ...menu } />
					}
					{/* Navigation  -  End  - */}
				</div>
				}
			</Container>
		</header>
	)
}

export default Header
