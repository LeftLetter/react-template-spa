import { OptionProp } from '@/types/common'
import { Button, Center, NumberInput, Select, SimpleGrid } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'

export type SimulationFormValues = {
  generation: number
  populationSize: number
  problem: string
}

export type SimulationFormProps = {
  initialValues: SimulationFormValues
  problems: OptionProp[]
  handleSubmit: (value: SimulationFormValues) => void
  handleError?: (value: SimulationFormValues) => void
}

export const SimulationForm: FC<SimulationFormProps> = ({
  initialValues,
  problems,
  handleSubmit,
  handleError,
}) => {
  const { t } = useTranslation()

  const schema = z.object({
    generation: z
      .number()
      .min(2, { message: t('simulation.form.validation.generation') })
      .max(500, { message: t('simulation.form.validation.generation') }),
    populationSize: z
      .number()
      .min(2, { message: t('simulation.form.validation.populationSize') })
      .max(500, { message: t('simulation.form.validation.populationSize') }),
    problem: z
      .string()
      .refine((value) => problems.map((p) => p.value).includes(value), {
        message: t('simulation.form.validation.problem'),
      }),
  })

  const form = useForm<SimulationFormValues>({
    initialValues: initialValues,
    validate: zodResolver(schema),
  })

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <div style={{ height: '300px' }}>
        <SimpleGrid cols={2} verticalSpacing={0}>
          <NumberInput
            placeholder="100"
            label={t('simulation.form.generation')}
            withAsterisk
            {...form.getInputProps('generation')}
            styles={(theme) => ({
              root: {
                height: '85px',
              },
            })}
          />

          <NumberInput
            placeholder="100"
            label={t('simulation.form.populationSize')}
            withAsterisk
            {...form.getInputProps('populationSize')}
            styles={(theme) => ({
              root: {
                height: '85px',
              },
            })}
          />

          <Select
            label={t('simulation.form.problem')}
            placeholder="Pick one"
            withAsterisk
            data={problems}
            {...form.getInputProps('problem')}
            styles={(theme) => ({
              root: {
                height: '85px',
              },
            })}
          />
        </SimpleGrid>
        <Center mt="lg">
          <Button type="submit">{t('simulation.form.submit')}</Button>
        </Center>
      </div>
    </form>
  )
}
