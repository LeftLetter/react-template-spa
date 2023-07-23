import { SimulationFormContainer } from '@/features/simulation/components/organisms/SimulationFormContainer'
import { SimulationResult } from '@/features/simulation/components/organisms/SimulationResult'
import { showResultAtom } from '@/features/simulation/stores/showResult'
import { Container, Skeleton, Stack, Title } from '@mantine/core'
import { useAtom } from 'jotai'
import { FC, Suspense } from 'react'
import { useTranslation } from 'react-i18next'

/**
 * Page component of optimization simulation
 * @returns
 */
export const SimulationPage: FC = () => {
  const { t } = useTranslation()
  const [showResult] = useAtom(showResultAtom)

  return (
    <div>
      <Stack h={300}>
        {/* Title */}
        <Container>
          <Title order={1}>{t('simulation.title')}</Title>
        </Container>

        {/* Form */}
        <Container>
          <Suspense
            fallback={<Skeleton height={300} width={424} radius="xl" />}
          >
            <SimulationFormContainer />
          </Suspense>
        </Container>

        {/* Result */}
        <Container>
          <Suspense
            fallback={<Skeleton height={400} width={300} radius="xl" />}
          >
            {showResult ? <SimulationResult /> : <div>before</div>}
          </Suspense>
        </Container>
      </Stack>
    </div>
  )
}
