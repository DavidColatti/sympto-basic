import { useCallback, useState } from 'react'
import { isEmpty, isFunction } from 'lodash'

/**
 * A custom hook to write/read from Local Storage similar to React.useState.
 * @param {string} key
 * @param {any} initialValue
 * @returns {Object[]}
 */
function useLocalStorage(key, initialValue) {
    if (isEmpty(key)) {
        throw Error('Key must be defined')
    }

    const write = useCallback((value) => {
        try {
            const formatted = JSON.stringify(value)
            window.localStorage.setItem(key, formatted)
        } catch (e) {
            console.warn('For persistent values, please enable the use of local storage.')
        }
    }, [key])

    const resolveValue = useCallback((value, previousValue) => {
        // doing this to mimic the useState() ability to pass a mutator as a value
        return isFunction(value) ? value(previousValue) : value
    }, [])

    const [storedValue, setStoredValue] = useState(() => {
        let valueToBeStored

        // Read value from local storage
        try {
            const valFromLS = window.localStorage.getItem(key)
            const hasValue = !isEmpty(valFromLS)
            valueToBeStored = hasValue ? JSON.parse(valFromLS) : resolveValue(initialValue)
        } catch (e) {
            valueToBeStored = resolveValue(initialValue)
        }

        write(valueToBeStored)
        return valueToBeStored
    })

    const handleSetValue = useCallback((newValue) => {
        const valueToBeStored = resolveValue(newValue, storedValue)
        write(valueToBeStored)
        setStoredValue(valueToBeStored)
    }, [storedValue, resolveValue, write])

    return [storedValue, handleSetValue]
}

export default useLocalStorage
