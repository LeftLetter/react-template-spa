import { getSimulationAPIMSW } from '@/models/api.msw'
import { setupWorker } from 'msw'

export const worker = setupWorker(...getSimulationAPIMSW())
