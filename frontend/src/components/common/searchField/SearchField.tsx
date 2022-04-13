import React, { memo, useCallback, useState } from 'react'

import { InputSearchField } from './InputSearchField'

type SearchFieldPropsType = {
  onChangeWithDebounce: (title: string) => void
  value: string
}

export const SearchField = memo(
  ({ onChangeWithDebounce, value }: SearchFieldPropsType) => {
    const [title, setTitle] = useState<string>(value)
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const [timerId, setTimerId] = useState<number>(0)

    const onChangeText = useCallback(
      // eslint-disable-next-line @typescript-eslint/no-shadow
      (title: string) => {
        setTitle(title)
        clearTimeout(timerId)
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        const id: number = +setTimeout(onChangeWithDebounce, 500, title)
        setTimerId(id)
      },
      [onChangeWithDebounce, timerId],
    )

    return (
      <div>
        <InputSearchField value={title} onChangeText={onChangeText} />
      </div>
    )
  },
)
