import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Page } from '.'

const pageTestID = 'page'

describe('Header', () => {
	it('Should be able to render the page', () => {
		const { getByTestId } = render(<Page />)
		expect(getByTestId(pageTestID)).toBeInTheDocument()
	})
})
