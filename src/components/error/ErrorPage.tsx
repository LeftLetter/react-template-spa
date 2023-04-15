import { FC } from 'react'

export const ErrorPage: FC = () => {
  // const error = useRouteError()
  return (
    <div>
      Not Found
      <p>{/* <i>{error.statusText || error.message}</i> */}</p>
    </div>
  )
}
