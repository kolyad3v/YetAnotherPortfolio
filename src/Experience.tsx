import {
	PresentationControls,
	Float,
	Environment,
	ContactShadows,
	Text,
	Sky,
	Cloud,
} from '@react-three/drei'
import { Cup } from './Cup'
import { Perf } from 'r3f-perf'
import { Model } from './Model'
import { Suspense } from 'react'
import Placeholder from './Placeholder'
import { Laptop } from './Laptop'
import { GitHubIcon } from './GitHubIcon'

export default function Experience() {
	const eventHandler = (e?: Event) => {
		console.log(e)
		e?.stopPropagation()
		window.open('https://github.com/kolyad3v', '_blank')
	}

	return (
		<>
			<Sky
				distance={450000}
				sunPosition={[0, 1, 0]}
				inclination={0}
				azimuth={0.25}
			/>
			<Environment preset='city' />

			<Text
				font='./majorMono.woff'
				fontSize={0.2}
				position={[2.5, 1, -0.5]}
				rotation-y={-1}
				color={'black'}
				// // maxWidth={2}
			>
				{'nick gillham\nvue-react-3js-c#'}
			</Text>

			<Suspense fallback={<Placeholder position={[0, -1, 0]} />}>
				<PresentationControls
					global
					rotation={[0.13, 0.1, 0]}
					polar={[-0.4, 0.2]}
					azimuth={[-1, 1]}
					config={{ mass: 2, tension: 400 }}
					snap={{ mass: 4, tension: 400 }}
				>
					<Float rotationIntensity={0.4}>
						<rectAreaLight
							width={2.5}
							height={1.65}
							intensity={20}
							color={'#0000ff'}
							rotation={[0.1, Math.PI, 0]}
							position={[0, 0.55, -1.15]}
						/>
						<Laptop />
						{/* <LaptopDeep /> */}
						<Cup />
					</Float>
				</PresentationControls>
			</Suspense>
			<GitHubIcon eventHandler={eventHandler} />

			<Model />
			<ContactShadows
				position-y={-1.4}
				opacity={1}
				scale={11}
				blur={2.4}
			/>
		</>
	)
}
