import {useClient, useFormValue} from 'sanity'
import {useEffect, useState, forwardRef} from 'react'

interface FilterSelectProps {
  value?: string
  onChange: (value: string) => void
  fieldName: 'sizes' | 'colors' | 'fabrics'
}

const FilterSelectComponent = forwardRef<HTMLSelectElement, FilterSelectProps>((props, ref) => {
  const {value, onChange, fieldName} = props
  const client = useClient({apiVersion: '2023-01-01'})
  const category = useFormValue(['category']) as string
  const [options, setOptions] = useState<string[]>([])

  useEffect(() => {
    if (!category) return

    client.fetch(`*[_type == "filterConfig" && category == $category][0]{${fieldName}}`, {category}).then((config) => {
      if (config && config[fieldName]) {
        setOptions(config[fieldName])
      }
    })
  }, [client, category, fieldName])

  return (
    <select
      ref={ref}
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      style={{width: '100%', padding: '8px'}}
    >
      <option value="">Select {fieldName.slice(0, -1)}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  )
})

FilterSelectComponent.displayName = 'FilterSelect'

export default FilterSelectComponent