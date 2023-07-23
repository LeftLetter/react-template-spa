import {
  SimulationForm,
  SimulationFormValues,
} from '@/features/simulation/components/organisms/SimulationForm'
import { showResultAtom } from '@/features/simulation/stores/showResult'
import { useGetProblem } from '@/models/api'
import { useAtom } from 'jotai'
import { FC } from 'react'

/**
 * Container component of simulation form
 * @returns
 */
export const SimulationFormContainer: FC = () => {
  const { data } = useGetProblem()
  const [, setShowResult] = useAtom(showResultAtom)

  if (!data) return null

  const problems = data.data.map((problem) => ({
    label: problem.id,
    value: problem.name,
  }))

  const initialValues: SimulationFormValues = {
    generation: 100,
    populationSize: 200,
    problem: problems?.[0]?.value || '',
  }

  const handleSubmit = () => {
    setShowResult(true)
  }

  return (
    <SimulationForm
      initialValues={initialValues}
      problems={problems}
      handleSubmit={handleSubmit}
    />
  )
}
