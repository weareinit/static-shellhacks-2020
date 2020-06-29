import React from 'react'
import cx from 'classnames'
import { Formik, Form as FormikForm } from 'formik'
import Input from './Input'
import Loading from './Loading'

const Form = ({
  initialValues,
  validate,
  onSubmit,
  sections,
  buttonText,
  className = '',
  fieldValidation = {},
  Component,
  store
}) => {
  const defaultValidation = () => {
    return {}
  }
  const classes = c => {
    return cx('', {
      [className + '__' + c]: className,
      [c]: !className
    })
  }
  return (
    <div className={className}>
      <Formik
        initialValues={initialValues}
        validate={validate ? validate : defaultValidation}
        onSubmit={onSubmit}
      >
        {formik => (
          <>
            {/* Uncomment for debbuging */}
            {/* {JSON.stringify(formik.values)} */}
            {/* {JSON.stringify(formik.errors)} */}
            <FormikForm>
              {sections.map(section => (
                <div className={classes(section.className)} key={section.title}>
                  <p className={classes('section-title')}>{section.title}</p>
                  {section.inputs.map(input => (
                    <>
                      <Input
                        {...input}
                        key={input.name}
                        className={classes(input.className)}
                        handleChange={formik.handleChange}
                        value={formik.values[input.name]}
                        {...(fieldValidation[input.name]
                          ? { validate: fieldValidation[input.name] }
                          : {})}
                      />
                      {formik.errors[input.name] && formik.touched[input.name] && (
                        <div className={classes('error')}>{formik.errors[input.name]}</div>
                      )}
                    </>
                  ))}
                </div>
              ))}
              <div className={classes('btn-container')}>
                <button
                  type="submit"
                  onClick={formik.handleSubmit}
                  className={classes('submit-btn')}
                >
                  {buttonText}
                </button>
                {Component && <Component />}
              </div>
            </FormikForm>
            {Object.keys(formik.errors).length > 0 && (
              <div className={classes('status')}>
                <div>There are one or more errors, please verify all fields are correct</div>
              </div>
            )}
          </>
        )}
      </Formik>
      <div className={classes('status')}>
        {store.loading && <Loading />}
        {store.error && <div>{store.error}</div>}
      </div>
    </div>
  )
}

export default Form
