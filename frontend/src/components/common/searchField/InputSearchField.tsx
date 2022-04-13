import React, {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  KeyboardEvent,
  memo,
} from 'react'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type InputSearchFieldPropsType = Omit<DefaultInputPropsType, 'type'> & {
  // и + ещё пропсы которых нет в стандартном инпуте
  eye?: boolean // указывает, должен ли быть глаз возле инпута, переключающий типы text/password
  onChangeText?: (value: string) => void
  onEnter?: () => void
  error?: string
  spanClassName?: string
}

export const InputSearchField: FC<InputSearchFieldPropsType> = memo(
  ({
    // type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
    onChange,
    onChangeText,
    onKeyPress,
    onEnter,
    error,

    ...restProps // все остальные пропсы попадут в объект restProps
  }) => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
      // eslint-disable-next-line no-unused-expressions
      onChange && // если есть пропс onChange
        onChange(e) // то передать ему е (поскольку onChange не обязателен)

      // eslint-disable-next-line no-unused-expressions
      onChangeText && onChangeText(e.currentTarget.value)
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
      // eslint-disable-next-line no-unused-expressions
      onKeyPress && onKeyPress(e)

      // eslint-disable-next-line no-unused-expressions
      onEnter && // если есть пропс onEnter
        e.key === 'Enter' && // и если нажата кнопка Enter
        onEnter() // то вызвать его
    }

    return (
      <div>
        <div>
          <input
            onChange={onChangeCallback}
            onKeyPress={onKeyPressCallback}
            {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
          />
        </div>
        <div>{error && <span>{error}</span>}</div>
      </div>
    )
  },
)
