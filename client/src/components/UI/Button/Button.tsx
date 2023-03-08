import React from 'react';
import { ButtonItem } from '@components/UI/Button/style';
import { Loader } from '@components/Loader/Loader';
import { IButton } from '@components/UI/Button/types';

export const Button: React.FC<IButton> = ({
	value,
	title,
	fz,
	height,
	margin,
	padding,
	name,
	id,
	isDisabled,
	type,
	width,
	isLoading,
	onClick,
}) => {
	return (
		<ButtonItem
			value={value}
			padding={padding}
			onClick={onClick}
			margin={margin}
			height={height}
			fz={fz}
			name={name}
			id={id}
			type={type}
			disabled={isDisabled || isLoading}
			width={width}
		>
			{isLoading ? <Loader size={25} color='#ececec'/> : title}
		</ButtonItem>
	);
};
