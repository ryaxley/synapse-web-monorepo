import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import React from 'react'

const Indeterminate = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} inheritViewBox>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="11"
          height="11"
          fill="currentColor"
          stroke="currentColor"
        />
        <path d="M 9.5 6.5 H 2.5 V 5.5 H 9.5 V 6.5 Z" fill="white" />
      </svg>
    </SvgIcon>
  )
}

export default Indeterminate
