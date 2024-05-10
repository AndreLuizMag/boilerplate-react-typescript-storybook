import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Header from '.'

export const headerTestID = 'header'

describe('Header', () => {
	it('Should be able to render the header', () => {
		const { getByTestId } = render(<Header />)
		expect(getByTestId(headerTestID)).toBeInTheDocument()
	})
})
