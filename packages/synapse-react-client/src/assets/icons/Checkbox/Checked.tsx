import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import React from 'react'

const Checked = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
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
      <path
        d="M4.54235 7.73378L2.64582 5.86801L2 6.49888L4.54235 9L10 3.63087L9.35873 3L4.54235 7.73378Z"
        fill="white"
      />
    </SvgIcon>
  )
}

export default Checked
