import Svg, { SvgProps, G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Logo = (props: SvgProps) => (
	<Svg width={82} height={82} {...props}>
		<G fill="none" fillRule="evenodd">
			<Path
				d="M82 41c0 22.644-18.356 41-41 41S0 63.644 0 41 18.356 0 41 0s41 18.356 41 41"
				fill="#E60000"
			/>
			<Path
				d="M41.325 63.862C30.06 63.9 18.34 54.285 18.29 38.847c-.034-10.21 5.474-20.037 12.515-25.867C37.67 7.293 47.08 3.644 55.612 3.615c1.099-.003 2.247.088 2.95.326-7.46 1.548-13.398 8.49-13.372 16.368.001.26.025.538.05.668 12.485 3.04 18.152 10.573 18.187 20.997.034 10.422-8.195 21.842-22.102 21.888"
				fill="#FFF"
			/>
		</G>
	</Svg>
);

export default Logo;
