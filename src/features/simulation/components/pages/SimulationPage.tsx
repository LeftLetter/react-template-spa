import { Center, Container, NumberInput, Select, Title } from '@mantine/core'
import { FC } from 'react'

export const SimulationPage: FC = () => {
  return (
    <div>
      <Title order={1}>Optimization simulation</Title>

      <Center maw={400} h={100} mx="auto">
        <Container>
          <NumberInput
            defaultValue={100}
            placeholder="Your age"
            label="Genaration"
          />
          <NumberInput
            defaultValue={50}
            placeholder="Your age"
            label="Population size"
          />
          <Select
            label="Evaluation function"
            placeholder="Pick one"
            data={[
              { value: 'react', label: 'React' },
              { value: 'ng', label: 'Angular' },
              { value: 'svelte', label: 'Svelte' },
              { value: 'vue', label: 'Vue' },
            ]}
          />
        </Container>
      </Center>

      <Container>Default container</Container>
    </div>
  )
}
