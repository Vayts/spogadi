import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  0% {
    opacity: 0;
  }
	
	50% {
		opacity: 0;
	}

  100% {
    opacity: 1;
  }
`;

const mapAppear = keyframes`
  0% {
    transform: scale(0.5);
  }

  100% {
    transform: scale(1);
  }
`;

export const MapPageWrapper = styled.div`
  height: 100vh;
  display: flex;
	flex-direction: column;
  animation: ${appear} 0.4s linear;
`;

export const MapControls = styled.div`
  display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30px 20px;
`;

export const MapMoreButton = styled.div`
	width: 40px;
	height: 40px;
	color: #fff;
	border: 2px solid #fff;
	border-radius: 15px;
	font-size: 30px;
  display: flex;
	justify-content: center;
	align-items: center;
`;

export const MapWrapper = styled.div`
	align-self: center;
	justify-self: center;
  animation: ${mapAppear} 0.4s ease-out;
	flex-grow: 1;
	display: flex;
	align-items: center;
	width: 55%;
  position: relative;
`;

export const MapSvg = styled.svg`
	width: 100%;
  position: relative;
`;

interface IMapPath {
	isActive?: boolean,
	isSet?: boolean,
}

export const MapPath = styled.path<IMapPath>`
	position: absolute;
	transition: all 0.2s;

  &:hover {
    fill: #ffffff;
    fill-opacity: 0.4;
    transition: all 0.2s;
    cursor: pointer;
  }
`;
