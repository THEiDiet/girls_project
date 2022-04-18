import React, {
  FC,
  memo,
  MemoExoticComponent,
  useCallback,
  useRef,
  useState,
} from 'react'

import { InputSearchField } from './InputSearchField'

import { EHelpers } from 'enums'
import { SearchFieldPropsType } from 'types/SearchFieldT'

type SearchFieldT = MemoExoticComponent<FC<SearchFieldPropsType>>

export const SearchField: SearchFieldT = memo(
  ({ onChangeWithDebounce, value, placeholder }: SearchFieldPropsType) => {
    const [title, setTitle] = useState<string>(value)
    const timerRef = useRef<number>(EHelpers.Zero)

    const onChangeText = useCallback(
      (text: string): void => {
        setTitle(text)
        if (timerRef.current && timerRef.current !== EHelpers.Zero) {
          clearTimeout(timerRef.current)
        }

        timerRef.current = +setTimeout(onChangeWithDebounce, EHelpers.Debounce, text)
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
