import React from 'react'
import { object, reach, string } from 'yup'
import { validPhoneNumber, validDate, validPDF, validURL, boxIsChecked } from '../Util/validation'
import SectionForm from '../Common/SectionForm'
import schools from '../../config/schools.json'
import majors from '../../config/majors.json'
import './styles.sass'

const SignUpForm = props => {
  const sections = [
    {
      title: 'Personal Information',
      inputs: [
        {
          name: 'dob',
          label: 'Date of Birth *',
          placeholder: '09/20/1999',
          type: 'text',
          id: 'dob',
          className: 'input'
        },
        {
          name: 'shirt',
          label: 'T-Shirt Size * (Unisex sizes)',
          placeholder: 'Select one',
          type: 'dropdown',
          id: 'shirt',
          className: 'dropdown',
          choices: [
            { value: 'Small', label: 'Small' },
            { value: 'Medium', label: 'Medium' },
            { value: 'Large', label: 'Large' },
            { value: 'XLarge', label: 'X-Large' }
          ]
        },
        {
          name: 'address',
          label: 'Address (optional - Your address will only be used to potentially ship any swag/prizes)',
          placeholder: 'Street ',
          type: 'text',
          id: 'street',
          className: 'input'
        },
        {
          name: 'address2',
          label: 'Address 2 (optional)',
          placeholder: 'Apt ',
          type: 'text',
          id: 'apt',
          className: 'input'
        },
        {
          name: 'city',
          label: 'City (optional)',
          placeholder: 'Miami',
          type: 'text',
          id: 'city',
          className: 'input'
        },
        {
          name: 'state',
          label: 'State (optional)',
          placeholder: 'Select one',
          type: 'dropdown',
          id: 'text',
          className: 'dropdown',
          choices: [
            { value: 'Alabama', label: 'Alabama' },
            { value: 'Alaska', label: 'Alaska' },
            { value: 'Arizona', label: 'Arizona' },
            { value: 'Arkansas', label: 'Arkansas' },
            { value: 'California', label: 'California' },
            { value: 'Colorado', label: 'Colorado' },
            { value: 'Connecticut', label: 'Connecticut' },
            { value: 'Delaware', label: 'Delaware' },
            { value: 'Florida', label: 'Florida' },
            { value: 'Georgia', label: 'Georgia' },
            { value: 'Hawaii', label: 'Hawaii' },
            { value: 'Idaho', label: 'Idaho' },
            { value: 'Illinois', label: 'Illinois' },
            { value: 'Indiana', label: 'Indiana' },
            { value: 'Iowa', label: 'Iowa' },
            { value: 'Kansas', label: 'Kansas' },
            { value: 'Kentucky', label: 'Kentucky' },
            { value: 'Louisiana', label: 'Louisiana' },
            { value: 'Maine', label: 'Maine' },
            { value: 'Maryland', label: 'Maryland' },
            { value: 'Massachusetts', label: 'Massachusetts' },
            { value: 'Michigan', label: 'Michigan' },
            { value: 'Minnesota', label: 'Minnesota' },
            { value: 'Mississippi', label: 'Mississippi' },
            { value: 'Missouri', label: 'Missouri' },
            { value: 'Montana', label: 'Montana' },
            { value: 'Nebraska', label: 'Nebraska' },
            { value: 'Nevada', label: 'Nevada' },
            { value: 'New Hampshire', label: 'New Hampshire' },
            { value: 'New Jersey', label: 'New Jersey' },
            { value: 'New Mexico', label: 'New Mexico' },
            { value: 'New York', label: 'New York' },
            { value: 'North Carolina', label: 'North Carolina' },
            { value: 'North Dakota', label: 'North Dakota' },
            { value: 'Ohio', label: 'Ohio' },
            { value: 'Oklahoma', label: 'Oklahoma' },
            { value: 'Oregon', label: 'Oregon' },
            { value: 'Pennsylvania', label: 'Pennsylvania' },
            { value: 'Rhode Island', label: 'Rhode Island' },
            { value: 'South Carolina', label: 'South Carolina' },
            { value: 'South Dakota', label: 'South Dakota' },
            { value: 'Tennessee', label: 'Tennessee' },
            { value: 'Texas', label: 'Texas' },
            { value: 'Utah', label: 'Utah' },
            { value: 'Vermont', label: 'Vermont' },
            { value: 'Virginia', label: 'Virginia' },
            { value: 'Washington', label: 'Washington' },
            { value: 'West Virginia', label: 'West Virginia' },
            { value: 'Wisconsin', label: 'Wisconsin' },
            { value: 'Wyoming', label: 'Wyoming' }
          ]
        },
        {
          name: 'zip',
          label: 'Zip (optional)',
          placeholder: '33189 ',
          type: 'number',
          id: 'zip',
          className: 'input'
        },
        {
          name: 'gender',
          label: 'Gender *',
          placeholder: 'Select one',
          type: 'dropdown',
          id: 'gender',
          className: 'dropdown',
          choices: [
            { value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' },
            { value: 'Prefer not to answer', label: 'Prefer not to answer' }
          ]
        },
        {
          name: 'ethnicity',
          label: 'Ethnicity *',
          placeholder: 'Select one',
          type: 'dropdown',
          id: 'ethnicity',
          className: 'dropdown',
          choices: [
            { value: 'Hispanic or Latinx', label: 'Hispanic or Latinx' },
            { value: 'Not Hispanic or Latinx', label: 'Not Hispanic or Latinx' }
          ]
        },
        {
          name: 'race',
          label: 'Race *',
          placeholder: 'Select one',
          type: 'dropdown',
          id: 'race',
          className: 'dropdown',
          choices: [
            {
              value: 'American Indian or Alaska Native',
              label: 'American Indian or Alaska Native'
            },
            { value: 'Asian / Pacific Islander', label: 'Asian / Pacific Islander' },
            { value: 'Black or African American', label: 'Black or African American' },
            {
              value: 'Native Hawaiian / Other Pacific Islander',
              label: 'Native Hawaiian or Other Pacific Islander'
            },
            { value: 'White', label: 'White' },
            { value: 'Multi Racial', label: 'Multi Racial' },
            { value: 'Other', label: 'Other' },
            { value: 'Prefer not to answer', label: 'Prefer not to answer' }
          ]
        },
        {
          name: 'phoneNumber',
          label: 'Phone Number *',
          placeholder: '000-000-0000',
          type: 'phone',
          id: 'phoneNumber',
          className: 'input'
        }
      ]
    },
    {
      title: 'School Information',
      inputs: [
        {
          name: 'schoolName',
          label: 'School Name * (Please select "other" if your school is not listed)',
          placeholder: 'Select one',
          type: 'searchable-dropdown',
          id: 'schoolName',
          className: 'searchable-dropdown',
          choices: schools
        },
        {
          name: 'major',
          label: 'Major *',
          placeholder: 'Select One',
          type: 'dropdown',
          id: 'major',
          className: 'dropdown',
          choices: majors
        },
        {
          name: 'levelOfStudy',
          label: 'Class Standing *',
          placeholder: 'Select one',
          type: 'dropdown',
          id: 'levelOfStudy',
          className: 'dropdown',
          choices: [
            { value: 'Freshman', label: 'Freshman' },
            { value: 'Sophomore', label: 'Sophomore' },
            { value: 'Junior', label: 'Junior' },
            { value: 'Senior', label: 'Senior' },
            { value: 'Masters', label: 'Masters' },
            { value: 'Ph.D', label: 'Ph.D' },
            { value: 'Bootcamp Student', label: 'Bootcamp Student' },
            { value: 'Recent Graduate', label: 'Recent Graduate' }
          ]
        },
        {
          name: 'graduationYear',
          label: 'Graduation Year *',
          placeholder: 'Select one',
          type: 'dropdown',
          id: 'graduationYear',
          className: 'dropdown',
          choices: [
            { value: '2019', label: '2019' },
            { value: '2020', label: '2020' },
            { value: '2021', label: '2021' },
            { value: '2022', label: '2022' },
            { value: '2023', label: '2023' },
            { value: '2024', label: '2024' },
            { value: '2025', label: '2025' },
            { value: '2026', label: '2026' }
          ]
        }
      ]
    },
    {
      title: 'Professional Information',
      inputs: [
        {
          name: 'role',
          label: 'Which role best describes you? *',
          placeholder: 'Select one',
          type: 'dropdown',
          id: 'role',
          className: 'dropdown',
          choices: [
            { value: 'Artist', label: 'Artist' },
            { value: 'Back-End Developer', label: 'Back-end Developer' },
            { value: 'Data Scientist', label: 'Data Scientist' },
            { value: 'Entrepreneur', label: 'Entrepreneur' },
            { value: 'Front-End Developer', label: 'Front-end Developer' },
            { value: 'Full-Stack Developer', label: 'Full-stack Developer' },
            { value: 'Game Developer', label: 'Game Developer' },
            { value: 'Software Engineer', label: 'Software Engineer' },
            { value: 'Computer Engineer', label: 'Computer Engineer' },
            { value: 'IT Specialist', label: 'IT Specialist' },
            { value: 'Musician', label: 'Musician' },
            { value: 'Mobile Developer', label: 'Mobile Developer' },
            { value: 'UI/UX Designer', label: 'UI/UX Designer' },
            { value: 'Web Developer', label: 'Web Developer' },
            { value: 'Other', label: 'Other' }
          ]
        },
        {
          name: 'linkedIn',
          label: 'LinkedIn',
          placeholder: 'https://www.linkedin.com/roary',
          type: 'text',
          id: 'linkedIn',
          className: 'input'
        },
        {
          name: 'github',
          label: 'GitHub',
          placeholder: 'https://www.github.com/roary',
          type: 'text',
          id: 'github',
          className: 'input'
        },
        {
          name: 'website',
          label: 'Website',
          placeholder: 'https://www.shellhacks.net',
          type: 'text',
          id: 'website',
          className: 'input'
        }
      ]
    },
    {
      title: 'Additional Information',
      inputs: [
        {
          name: 'attendedShellHacks',
          label: 'Have you attended ShellHacks before? *',
          placeholder: 'Select one',
          type: 'dropdown',
          id: 'attendedShellHacks',
          className: 'dropdown',
          choices: [
            { label: 'ShellHacks 2017', value: 'ShellHacks 2017' },
            { label: 'ShellHacks 2018', value: 'ShellHacks 2018' },
            { label: 'ShellHacks 2019', value: 'ShellHacks 2019' },
            { label: 'I attended two of them!', value: 'Attended two' },
            { label: 'I attended all of them!', value: 'Attended all' },
            { label: 'This is my first time!', value: 'First Time' }
          ]
        },
        {
          name: 'howDidYouHear',
          label: 'How did you hear about us? *',
          placeholder: 'Select one',
          type: 'dropdown',
          id: 'howDidYouHear',
          className: 'dropdown',
          choices: [
            {
              value: 'Email',
              label: 'Email'
            },
            {
              value: 'Website',
              label: 'Website'
            },
            {
              value: 'Friends',
              label: 'Friends'
            },
            {
              value: 'Professor',
              label: 'Professor'
            },
            {
              value: 'Instagram',
              label: 'Instagram'
            },
            {
              value: 'Facebook',
              label: 'Facebook'
            },
            {
              value: 'LinkedIn',
              label: 'LinkedIn'
            },
            {
              value: 'Twitter',
              label: 'Twitter'
            },
            {
              value: 'Other',
              label: 'Other'
            }
          ]
        },
        // {
        //   name: 'checkbox',
        //   label: 'You give us permission to share your email with sponsors',
        //   placeholder: '',
        //   type: 'boolean'
        // },
        {
          name: 'resume',
          label: 'Resume * (PDF only)',
          placeholder: '',
          type: 'file',
          id: 'resume',
          className: 'file'
        }
      ]
    },
    {
      title: 'MLH Agreement',
      inputs: [
        {
          name: 'codeOfConduct',
          label: 'I have read and agree to the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank">MLH Code of Conduct</a>. *',
          type: 'checkbox',
          id: 'codeOfConduct',
          className: 'checkbox',
        },
        {
          name: 'mlhTermsAndConditions',
          label: 'I authorize you to share my application/registration information for event administration, ranking, MLH administration, pre- and post-event informational e-mails, and occasional messages about hackathons in-line with the <a href="https://mlh.io/privacy" target="_blank">MLH Privacy Policy</a>. I further agree to the terms of both the <a href="https://github.com/MLH/mlh-policies/blob/master/prize-terms-and-conditions/contest-terms.md" target="_blank">MLH Contest Terms and Conditions</a> and the <a href="https://mlh.io/privacy" target="_blank">MLH Privacy Policy</a>. *',
          type: 'checkbox',
          id: 'mlhTermsAndConditions',
          className: 'checkbox',
        }
      ]
    }
  ]

  const schema = object().shape({
    dob: validDate().required(),
    address: string(),
    address2: string(),
    city: string(),
    state: string(),
    zip: string(),
    shirt: string().required(),
    gender: string().required(),
    ethnicity: string().required(),
    race: string().required(),
    phoneNumber: validPhoneNumber(),
    schoolName: string().required(),
    major: string().required(),
    levelOfStudy: string().required(),
    graduationYear: string().required(),
    role: string().required(),
    linkedIn: validURL(),
    github: validURL(),
    website: validURL(),
    attendedShellHacks: string().required(),
    howDidYouHear: string().required(),
    resume: validPDF().required(),
    codeOfConduct: boxIsChecked(),
    mlhTermsAndConditions: boxIsChecked(),
  })

  const validateHelper = async (value, path) =>
    reach(schema, path)
      .validate(value)
      .then(() => null)
      .catch(err => {
        return err.errors ? err.errors[0] : err[0]
      })

  const fieldValidation = {
    dob: async d => await validateHelper(d, 'dob'),
    shirt: async s => await validateHelper(s, 'shirt'),
    address: async s => await validateHelper(s, 'address'),
    address2: async s => await validateHelper(s, 'address2'),
    city: async s => await validateHelper(s, 'city'),
    state: async s => await validateHelper(s, 'state'),
    zip: async s => await validateHelper(s, 'zip'),
    gender: async s => await validateHelper(s, 'gender'),
    ethnicity: async s => await validateHelper(s, 'ethnicity'),
    race: async s => await validateHelper(s, 'race'),
    phoneNumber: async s => await validateHelper(s, 'phoneNumber'),
    schoolName: async s => await validateHelper(s, 'schoolName'),
    major: async s => await validateHelper(s, 'major'),
    levelOfStudy: async s => await validateHelper(s, 'levelOfStudy'),
    graduationYear: async s => await validateHelper(s, 'graduationYear'),
    role: async s => await validateHelper(s, 'role'),
    linkedIn: async s => await validateHelper(s, 'linkedIn'),
    github: async s => await validateHelper(s, 'github'),
    website: async s => await validateHelper(s, 'website'),
    attendedShellHacks: async s => await validateHelper(s, 'attendedShellHacks'),
    howDidYouHear: async s => await validateHelper(s, 'howDidYouHear'),
    resume: async s => await validateHelper(s, 'resume'),
    codeOfConduct: async s => await validateHelper(s, 'codeOfConduct'),
    mlhTermsAndConditions: async s => await validateHelper(s, 'mlhTermsAndConditions'),
  }

  const validation = () => ({})

  const initialValues = {
    dob: '',
    shirt: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    gender: '',
    ethnicity: '',
    race: '',
    phoneNumber: '',
    schoolName: '',
    major: '',
    levelOfStudy: '',
    graduationYear: '',
    role: '',
    linkedIn: '',
    github: '',
    website: '',
    attendedShellHacks: '',
    howDidYouHear: '',
    resume: null,
    codeOfConduct: false,
    mlhTermsAndConditions: false,
  }

  const onSubmit = values => {
    console.log(values)
    props.handleSubmit(values)
  }

  return (
    <SectionForm
      validation={validation}
      initialValues={initialValues}
      onSubmit={onSubmit}
      sections={sections}
      buttonText={'Submit'}
      className="ApplicationForm"
      fieldValidation={fieldValidation}
      store={props}
    />
  )
}

export default SignUpForm
