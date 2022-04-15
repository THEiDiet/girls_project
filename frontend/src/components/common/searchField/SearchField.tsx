import React, {
  FC,
  memo,
  MemoExoticComponent,
  useCallback,
  useRef,
  useState,
} from 'react'

import { InputSearchField } from './InputSearchField'

type SearchFieldPropsType = {
  onChangeWithDebounce: (title: string) => void
  value: string
  // eslint-disable-next-line react/require-default-props
  placeholder?: string
}
type SearchFieldT = MemoExoticComponent<FC<SearchFieldPropsType>>

export const SearchField: SearchFieldT = memo(
  ({ onChangeWithDebounce, value, placeholder }: SearchFieldPropsType) => {
    const [title, setTitle] = useState<string>(value)
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const timerRef = useRef<number>(0)

    const onChangeText = useCallback(
      (text: string): void => {
        setTitle(text)
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        if (timerRef.current && timerRef.current !== 0) {
          clearTimeout(timerRef.current)
        }

        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        timerRef.current = +setTimeout(onChangeWithDebounce, 2000, text)
      },
      [onChangeWithDebounce, timerRef],
    )

    return (
      <div>
        <InputSearchField
          value={title}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
      </div>
    )
  },
)
