import React, {
  DetailedHTMLProps,
  FC,
  forwardRef,
  InputHTMLAttributes,
  memo,
  RefAttributes,
} from 'react'

import { Label, Input, Checkmark } from 'styles/StyledCheckBox'

// type DefaultInputPropsType = DetailedHTMLProps<
//   InputHTMLAttributes<HTMLInputElement>,
//   HTMLInputElement
// >

// type CheckBoxPropsType = DefaultInputPropsType &
//   RefAttributes<HTMLInputElement> & {
//     labelTitle?: string
//   }

export const CheckBox: FC<any> = memo(
  forwardRef(({ labelTitle, ...res }, ref) => (
    <Label justifyContent="flex-start">
      {labelTitle}
      <Input hidden={false} ref={ref} {...res} type="checkbox" />
      <Checkmark />
    </Label>
  )),
)
