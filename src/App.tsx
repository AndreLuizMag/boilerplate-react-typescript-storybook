import { useState } from 'react'
import './styles/app.scss'

import viteLogo from './assets/brand/vite.svg'
import reactLogo from './assets/brand/react.svg'
import typescriptLogo from './assets/brand/typescript.svg'
import storybookLogo from './assets/brand/storybook.svg'
import sassLogo from './assets/brand/sass.svg'
import vitestLogo from './assets/brand/vitest.svg'

export const App = () => {
	const [count, setCount] = useState(0)

	return (
		<>
			<section className='content'>
				<div className='grid-logo'>
					<a
						href='https://vitejs.dev'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							src={viteLogo}
							className='logo vite'
							alt='Vite logo'
						/>
					</a>
					<a
						href='https://react.dev'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							src={reactLogo}
							className='logo react'
							alt='React logo'
						/>
					</a>
					<a
						href='https://typescriptlang.org'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							src={typescriptLogo}
							className='logo typescript'
							alt='Typescript logo'
						/>
					</a>
					<a
						href='https://sass-lang.com'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							src={sassLogo}
							className='logo sass'
							alt='Sass logo'
						/>
					</a>
					<a
						href='https://storybook.js.org'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							src={storybookLogo}
							className='logo storybook'
							alt='Storybook logo'
						/>
					</a>
					<a
						href='https://vitest.dev'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							src={vitestLogo}
							className='logo vitest'
							alt='Vitest logo'
						/>
					</a>
				</div>
				<h1>
					Vite + React + Typescript
					<br />
					Sass + Storybook + Vitest
				</h1>
				<div className='card'>
					<button onClick={() => setCount(count + 1)}>
						count is {count}
					</button>
					<p>
						Edit <code>src/App.tsx</code> and save to test
						HMR
					</p>
				</div>
				<p className='read-the-docs'>
					Click on the logos to learn more
				</p>
			</section>
		</>
	)
}
