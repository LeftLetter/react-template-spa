/**
 * Generated by orval v6.14.3 🍺
 * Do not edit manually.
 * Simulation API
 * OpenAPI spec version: 1.0.0
 */
import { rest } from 'msw'
import { faker } from '@faker-js/faker'

export const getGetProblemMock = () =>
  Array.from(
    { length: faker.datatype.number({ min: 1, max: 10 }) },
    (_, i) => i + 1
  ).map(() => ({ id: faker.random.word(), name: faker.random.word() }))

export const getGetSimulationMock = () => ({
  result: faker.datatype.number({ min: undefined, max: undefined }),
  individuals: Array.from(
    { length: faker.datatype.number({ min: 1, max: 10 }) },
    (_, i) => i + 1
  ).map(() => ({
    x: faker.datatype.number({ min: undefined, max: undefined }),
    y: faker.datatype.number({ min: undefined, max: undefined }),
  })),
})

export const getSimulationAPIMSW = () => [
  rest.get('*/problem', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getGetProblemMock())
    )
  }),
  rest.get('*/simulation', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getGetSimulationMock())
    )
  }),
]
