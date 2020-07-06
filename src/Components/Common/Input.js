import React from 'react'
import { Field } from 'formik'
import Select, { createFilter } from 'react-select'
import { FixedSizeList as List } from 'react-window'
import cx from 'classnames'

const Input = props => {
  switch (props.type) {
    case 'dropdown':
      return <DropDown {...props} />
    case 'searchable-dropdown':
      return <SearchableDropDown {...props} />
    case 'file':
      return <FileInputWrapper {...props} />
    case 'display':
      return <DisplayInput {...props} />
    default:
      return <TextInput {...props} />
  }
}

const TextInput = ({
  name,
  value,
  label,
  placeholder,
  className,
  type,
  id,
  validate,
  disabled = false
}) => {
  const TextInputClasses = cx('TextInput', {
    [className]: className
  })
  return (
    <div className={TextInputClasses}>
      {label && <label htmlFor={name}>{label}</label>}
      <Field
        autoComplete="on"
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        {...(validate ? { validate } : {})}
        disabled={disabled}
      />
    </div>
  )
}

const DisplayInput = ({ name, value, label, className }) => {
  const TextInputClasses = cx('TextInput', {
    [className]: className
  })
  return (
    <div className={TextInputClasses}>
      {label && <label htmlFor={name}>{label}</label>}
      <input value={value} disabled={true} />
    </div>
  )
}

const DropDown = ({ name, label, placeholder, className, id, validate, choices }) => {
  const TextInputClasses = cx('TextInput', {
    [className]: className
  })
  return (
    <div className={TextInputClasses}>
      {label && <label htmlFor={name}>{label}</label>}
      <Field as="select" name={name} id={id} {...(validate ? { validate } : {})}>
        <option value="" disabled selected>
          {placeholder}
        </option>
        {choices.map(choice => (
          <option value={choice.value}>{choice.label}</option>
        ))}
      </Field>
    </div>
  )
}

export default Input

const height = 35

class MenuList extends React.Component {
  render() {
    const { options, children, maxHeight, getValue } = this.props
    const [value] = getValue()
    const initialOffset = options.indexOf(value) * height

    return (
      <List
        height={maxHeight}
        itemCount={children.length}
        itemSize={height}
        initialScrollOffset={initialOffset}
      >
        {({ index, style }) => <div style={style}>{children[index]}</div>}
      </List>
    )
  }
}

const SelectField = ({ choices, field, form, ...rest }) => {
  return (
    <Select
      {...rest}
      filterOption={createFilter({ ignoreAccents: false })}
      components={{ MenuList }}
      options={choices}
      value={choices ? choices.find(choice => choice.value === field.value) : ''}
      onChange={option => {
        form.setFieldValue(field.name, option.value)
      }}
      onBlur={field.onBlur}
    />
  )
}

const SearchableDropDown = props => (
  <>
    {props.label && <label htmlFor={props.name}>{props.label}</label>}
    <Field component={SelectField} {...props} />
  </>
)

const FileInput = ({ field, form, ...props }) => {
  const TextInputClasses = cx('FileInput', {
    [props.className]: props.className
  })
  return (
    <div className={TextInputClasses}>
      {props.label && <label htmlFor={field.name}>{props.label}</label>}
      <input
        type="file"
        name={field.name}
        id={field.id}
        onChange={async event => {
          const file = await event.currentTarget.files[0]
          form.setFieldValue(field.name, file)
          form.validateField(field.name)
        }}
      />
    </div>
  )
}

const FileInputWrapper = props => {
  return <Field component={FileInput} {...props} />
}
