// Import React
import React from 'react'

// Import Elements
import { Icon } from 'elements'

// Import Icon
import { BsCalendar } from '@react-icons/all-files/bs/BsCalendar'
import { BsClock } from '@react-icons/all-files/bs/BsClock'

// Import Libraries
import is from 'is_js'
import * as Yup from 'yup'
import { Formik, Form, useField } from 'formik'

// Import Modifiers
import classy from 'modifiers/classy'
import getValue from 'modifiers/getValue'

const fieldWrapperClasses = ( className ) => classy([
	'field', //bulma 'field' class
	className
])

const labelClasses = ( className ) => classy([
	'label', //bulma 'label' class
	className
])

// Parent of input
const controlClasses = ( className ) => classy([
	'control', //bulma 'field' class
	className
])


const errorClasses = classy([
	'help', // bulma 'help' class
	'is-danger', // bulma 'is-danger' class
	'input-error',
	'has-text-weight-semibold'
])

const MyTextInput = ({ label = false , className, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)

	const textInputClasses = classy([
		'input', //bulma 'input' class
		'input-generic',
		meta.touched && meta.error && 'is-danger',
		meta.touched && !meta.error && 'is-success',
		className
	])

  return (
    <div { ...fieldWrapperClasses() }>
      { label &&
				<label { ...labelClasses() } htmlFor={props.id || props.name}>{label}</label>
			}
      <div { ...controlClasses() }>
				<input { ...textInputClasses } {...field} {...props}/>
				{meta.touched && meta.error ? (
					<div { ...errorClasses } >{meta.error}</div>
				) : null}
			</div>
    </div>
  )
}

const MyPhoneInput = ({ label, className, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)

	const textInputClasses = classy([
		'input', //bulma 'input' class
		'input-generic',
		meta.touched && meta.error && 'is-danger',
		meta.touched && !meta.error && 'is-success',
		className
	])

  return (
    <div { ...fieldWrapperClasses('input-phone columns is-mobile is-vcentered') }>
			<div className="field-label column is-narrow">
				<label { ...labelClasses( 'has-text-left' ) } htmlFor={props.id || props.name}>{label}</label>
			</div>
			<div className="field-body column">
				<div className="field">
					<div { ...controlClasses() }>
						<input { ...textInputClasses } {...field} {...props}/>
						{meta.touched && meta.error ? (
							<div { ...errorClasses } >{meta.error}</div>
						) : null}
					</div>
				</div>
			</div>
    </div>
  )
}

const MyTextareaInput = ({ label, className, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)

	const textAreaClasses = classy([
		'textarea', //bulma 'textarea' class
		'input-generic',
		'input-textarea',
		meta.touched && meta.error && 'is-danger',
		meta.touched && !meta.error && 'is-success',
	])

  return (
    <div { ...fieldWrapperClasses( className ) }>
      <label { ...labelClasses() } htmlFor={props.id || props.name}>{label}</label>
			<div { ...controlClasses() }>
				<textarea { ...textAreaClasses } {...field} {...props} />
				{meta.touched && meta.error ? (
					<div { ...errorClasses } >{meta.error}</div>
				) : null}
			</div>
    </div>
  )
}

const MyDateInput = ({ label, className, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)

	const dateInputClasses = classy([
		'input', //bulma 'input' class
		'input-generic',
		meta.touched && meta.error && 'is-danger',
		meta.touched && !meta.error && 'is-success',
	])

  return (
    <div { ...fieldWrapperClasses( className ) }>
      <label { ...labelClasses() } htmlFor={props.id || props.name}>{label}</label>
      <div { ...controlClasses('has-icons-right') }>
				<input { ...dateInputClasses } {...field} {...props} type="date" />
				<Icon className='is-right icon-calendar'>
					<BsCalendar/>
				</Icon>
			</div>
      {meta.touched && meta.error ? (
        <div { ...errorClasses } >{meta.error}</div>
      ) : null}
    </div>
  )
}

const MyTimeInput = ({ label, className, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)

	const timeInputClasses = classy([
		'input', //bulma 'input' class
		'input-generic',
		meta.touched && meta.error && 'is-danger',
		meta.touched && !meta.error && 'is-success',
	])

  return (
    <div { ...fieldWrapperClasses( className ) }>
      <label { ...labelClasses() } htmlFor={props.id || props.name}>{label}</label>
      <div { ...controlClasses('has-icons-right') }>
				<input { ...timeInputClasses } {...field} {...props} type="time" />
				<Icon className='is-right icon-clock'>
					<BsClock/>
				</Icon>
			</div>
      {meta.touched && meta.error ? (
        <div { ...errorClasses } >{meta.error}</div>
      ) : null}
    </div>
  )
}

// const MyCheckbox = ({ children, ...props }) => {
//   const [field, meta] = useField({ ...props, type: "checkbox" })
//   return (
//     <div { ...fieldWrapperClasses }>
//       <label { ...labelClasses() } className="checkbox">
//         <input {...field} {...props} type="checkbox" />
//         {children}
//       </label>
//       {meta.touched && meta.error ? (
//         <div { ...errorClasses } >{meta.error}</div>
//       ) : null}
//     </div>
//   )
// }

const MySelectInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)

	const selectClasses = classy([
		'select', //bulma 'select' class
		'is-fullwidth',
		meta.touched && meta.error && 'is-danger',
		meta.touched && !meta.error && 'is-success'
	])

  return (
    <div { ...fieldWrapperClasses('columns is-mobile is-vcentered input-select') }>
			<div className="field-label column is-narrow">
				<label { ...labelClasses('has-text-left') } htmlFor={props.id || props.name}>{label}</label>
			</div>
			<div className="field-body column">
				<div className="field">
					<div { ...controlClasses() }>
						<div { ...selectClasses } >
							<select className='input-generic select-generic'  {...field} {...props} />
							{ meta.touched && meta.error ? (
								<div { ...errorClasses } >{meta.error}</div>
							) : null}
						</div>
					</div>
				</div>
			</div>
    </div>
  )
}

// And now we can use these
const ContactForm = props => {

	const {
		className = '',
	} = props

	const formHeaderClasses = classy([
		'form-header',
		'title',
		'is-2',
		className
	])

	const formClasses = classy([
		'contact-form',
		className
	])

	const timeDateClasses = classy([
		'time-picker-area',
		'columns',
		'is-mobile'
	])

  return ( <>
			<h2 { ...formHeaderClasses }>
				Get in contact!
			</h2>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
					phoneNumber : "",
          // acceptedTerms: false, // added for our checkbox
          serviceType: "", // added for our select
          dateOfEvent: "", // added for our select
          timeOfEvent: "" // added for our select
        }}
        validationSchema={ Yup.object({
          fullName: Yup.string()
            .min(3, "Must be 3 characters or more")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email addresss")
            .required("Required"),
					phoneNumber: Yup.string()
						.matches(
							/^[0-9]{6,}$/,
							"Phone number is not valid"
						)
            .required("Required"),
          // acceptedTerms: Yup.boolean()
          //   .required("Required")
          //   .oneOf([true], "You must accept the terms and conditions."),
					serviceType: Yup.string()
            // specify the set of valid values for job type
            // @see http://bit.ly/yup-mixed-oneOf
            .oneOf(
              ["Wedding", "Quinceañera", "Sweet 16", "Corporate Event", "Other"],
              "Invalid Job Type"
            )
            .required("Required"),
					dateOfEvent : Yup.string()
						.required("Required"),
					timeOfEvent : Yup.string()
						.required("Required"),
					message: Yup.string()
            .min(3, "Must be 3 characters or more")
            .required("Required"),
        })}
        onSubmit={ ( values, { setSubmitting }) => {
          setSubmitting(true)
          setTimeout(() => {
						setSubmitting(false)
					} , 1000 )
        }}
      >
				{( props ) => {

					const { errors, touched, isSubmitting }  = props

					const touchedAndErrored = []

					Object.keys( touched ).forEach( key => {
						
						if ( getValue( errors, key, false ) ){
							
							touchedAndErrored.push( errors[key] )

						}

					})

					const buttonClasses = classy([
						'button',
						'is-primary',
						'is-outlined',
						'is-rounded',
						'is-fullwidth',
						!is.empty( touchedAndErrored ) && 'is-danger',
						is.empty( errors ) && 'is-success',
						isSubmitting && 'is-loading'
						// 'is-loading'
					])

					return (
					<Form { ...formClasses } name="Temporal Contact Form"  method="POST" data-netlify="true" >
						<input type="hidden" name="subject" value="Contact form DJEddieG.com" />
						<MyTextInput
							name='fullName'
							type='text'
							placeholder='Name'
						/>
						<MyTextInput
							name='email'
							type='email'
							placeholder='Email'
						/>
						<MyPhoneInput
							label='Phone Number'
							name='phoneNumber'
							type='tel'
							// placeholder='000-000-0000'
						/>
						<MySelectInput label='Service Type' name='serviceType'>
							<option value=''>Select a service type</option>
							<option value='Wedding'>Wedding</option>
							<option value='Quinceañera'>Quinceañera</option>
							<option value='Sweet 16'>Sweet 16</option>
							<option value='Corporate Event'>Corporate Event</option>
							<option value='Other'>Other</option>
						</MySelectInput>
						<div { ...timeDateClasses } >
							<MyDateInput
								label='Date'
								name='dateOfEvent'
								className='field-date column is-6'
							/>
							<MyTimeInput
								label='Time'
								name='timeOfEvent'
								className='field-time column is-6'
							/>
						</div>
						<MyTextareaInput
							label='Message'
							name='message'
							type='textarea'
							placeholder= 'Brief summary of the event'
							className='input-message'
						/>
						<div className='control'>
							<button 
								type='submit'
								{ ...buttonClasses }
								disabled={ !( is.empty( touchedAndErrored ) && ( Object.keys( touched ).length > 6 ) ) }
							>
								Reach out now!
							</button>
						</div>
					</Form>
				)}}
      </Formik>
	</>)
}

export default ContactForm
