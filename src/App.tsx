import { useState } from 'react'
import viteLogo from './assets/brand/vite.svg'
import reactLogo from './assets/brand/react.svg'
import typescriptLogo from './assets/brand/typescript.svg'
import storybookLogo from './assets/brand/storybook.svg'
import sassLogo from './assets/brand/sass.svg'
import vitestLogo from './assets/brand/vitest.svg'
import styles from './App.module.scss'

const App: React.FC = () => {
	const [count, setCount] = useState<number>(0)

	return (
		<>
			<section className={styles.Content}>
				<div className={styles.GridLogo}>
					<a
						href='https://vitejs.dev'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							src={viteLogo}
							className={`${styles.Logo} ${styles.Vite}`}
							alt='Vite logo'
						/>
					</a>
					<a
						href='https://react.dev'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							src={reactLogo}
							className={`${styles.Logo} ${styles.React}`}
							alt='React logo'
						/>
					</a>
					<a
						href='https://typescriptlang.org'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							src={typescriptLogo}
							className={`${styles.Logo} ${styles.Typescript}`}
							alt='Typescript logo'
						/>
					</a>
					<a
						href='https://sass-lang.com'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							src={sassLogo}
							className={`${styles.Logo} ${styles.Sass}`}
							alt='Sass logo'
						/>
					</a>
					<a
						href='https://storybook.js.org'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							src={storybookLogo}
							className={`${styles.Logo} ${styles.Storybook}`}
							alt='Storybook logo'
						/>
					</a>
					<a
						href='https://vitest.dev'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							src={vitestLogo}
							className={`${styles.Logo} ${styles.Vitest}`}
							alt='Vitest logo'
						/>
					</a>
				</div>
				<h1>
					Vite + React + Typescript
					<br />
					Sass + Storybook + Vitest
				</h1>
				<div className={styles.Card}>
					<button
						onClick={() => setCount((count) => count + 1)}>
						count is {count}
					</button>
					<p>
						Edit <code>src/App.tsx</code> and save to test
						HMR
					</p>
				</div>
				<p className={styles.ReadTheDocs}>
					Click on the logos to learn more
				</p>
			</section>
		</>
	)
}

export default App
