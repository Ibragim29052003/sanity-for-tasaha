import {useClient, useFormValue, PatchEvent, set} from 'sanity'
import {useEffect, useState, forwardRef} from 'react'
import {Select, Stack, Card, Text} from '@sanity/ui'

interface FilterSelectProps {
  value?: string
  onChange: (event: PatchEvent) => void
  fieldName: 'sizes' | 'colors' | 'fabrics'
}

const FilterSelectComponent = forwardRef<HTMLSelectElement, FilterSelectProps>((props, ref) => {
  const {value, onChange, fieldName} = props
  const client = useClient({apiVersion: '2024-01-01'})
  const category = useFormValue(['category']) as string
  const [options, setOptions] = useState<string[]>([])

  useEffect(() => {
    if (!category) return

    client
      .fetch(
        `*[_type == "filterConfig" && category == $category][0]{${fieldName}}`,
        {category}
      )
      .then((config) => {
        setOptions(config?.[fieldName] ?? [])
      })
  }, [client, category, fieldName])

  return (
    <Stack space={2}>
      {!category && (
        <Card padding={2} tone="caution">
          <Text size={1}>Сначала выбери Category</Text>
        </Card>
      )}

      <Select
        ref={ref}
        value={value || ''}
        onChange={(e) => onChange(PatchEvent.from(set(e.currentTarget.value)))}
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </Select>
    </Stack>
  )
})

export default FilterSelectComponent
