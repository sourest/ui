/* eslint-disable @typescript-eslint/naming-convention */
import styled from '@emotion/styled'
import { PropsWithChildren } from 'react'

const Wrap = styled.div<{ size?: number; align?: string }>(
  {
    display: 'inline-flex',
    gap: 8,
    flexWrap: 'wrap',
    '& > *': {
      //
    },
  },
  ({ size }) => ({
    gap: size,
  }),
)

export interface GapProps extends PropsWithChildren {
  size?: number
  align?: 'start' | 'center' | 'end'
  direction?: 'horizontal' | 'vertical'
}

const Gap = (props: GapProps) => {
  return <Wrap {...props} />
}

export default Gap
