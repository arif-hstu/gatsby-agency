import styled from 'styled-components';
const Banner = styled.div`
&:after {
	content: '';
	display: block;
	height: 100vh;
	width: 100%;
	background-image: url('banner.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	filter: grayscale(100%) blur(2px);
}`

const TextWrapper = styled.div`
	position: absolute;
	z-index: 1;
	left: 50%,
	top: 50%,
	transform: translate(-50%, -50%);
	color: white;
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
`;