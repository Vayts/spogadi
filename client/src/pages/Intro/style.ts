import styled, { css, keyframes } from 'styled-components';

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

const disappear = keyframes`
	
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

interface IIntro {
	isDone: boolean,
	isNavigating?: boolean,
}

export const IntroWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IntroTextWrapper = styled.div<IIntro>`
	${({ isNavigating }) => {
		if (isNavigating) {
			return css`
        animation: ${disappear} 0.4s linear;
				`;
		}
	}}
`;

export const LogoImgWrapper = styled.div`
	height: 120px;
`;

export const LogoIntoWrapper = styled.div<IIntro>`
  position: absolute;
  top: ${({ isDone }) => (isDone ? 'calc(50% - 150px)' : '50%')};
  left: 50%;
	transform: translate(-50%, -50%);
  transition: all 0.6s ease;
  transition-delay: 0.2s;
  display: flex;
	flex-direction: column;
	align-items: center;
  justify-content: center;
	
	img {
		width: 120px;
    animation: ${appear} 1s linear;
	}
	
  h1 {
    transition: all 0.6s ease;
    transition-delay: 0.2s;
    font-size: ${({ isDone }) => (isDone ? '60px' : '50px')};
    color: #fff;
    font-weight: 300;
    letter-spacing: 2px;
    user-select: none;
    cursor: default;
  }
	
	p {
		margin-left: 12px;
	}
`;

export const IntroSubTextWrapper = styled.div`
	margin-top: 30px;
  animation: ${appear} 1s linear;
	letter-spacing: 2px;
	color: #A9A9A9;
	font-size: 18px;
  display: flex;
	flex-direction: column;
	align-items: center;
	
	p {
		margin: 0 0 5px 0;
		
		&:last-child {
			margin-left: 5px;
		}
	}
`;
