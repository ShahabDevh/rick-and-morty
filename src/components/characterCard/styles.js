import styled, { css } from 'styled-components';

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	box-shadow: 0 5px 15px rgb(0 0 0 / 8%);
	width: 312px;
	height: 578px;
	border-radius: 4px;
	overflow: hidden;
	height: ${({ hasButton }) => (hasButton ? '578px' : '532px')};

	h3 {
		font-size: 24px;
		font-weight: 500;
		margin: 12px 0 10px;
	}

	.content-wrapper {
		position: relative;
		padding: 16px;
		height: 100%;
	}

	.image-wrapper {
		position: relative;
		width: 312px;
		height: 312px;

		img {
			width: 100%;
			height: 312px;
			object-fit: cover;
		}

		span {
			display: inline-block;
			position: absolute;
			top: 10px;
			right: 10px;
			font-size: 10px;
			color: #fff;
			background: #000;
			padding: 0px 10px;
			border-radius: 2px;
			text-transform: uppercase;
		}
	}

	.chips-wrapper {
		display: flex;
		align-items: center;
		padding-bottom: 16px;
		border-bottom: 1px solid #e5e5e5;

		${({ hasButton }) => {
			if (!hasButton) {
				return css`
					&:last-child {
						border: none;
					}
				`;
			}
		}}

		span {
			display: inline-block;
			padding: 0 10px;
			background: #1e87f0;
			color: #fff;
			border-radius: 2px;
			margin-right: 8px;
			text-transform: uppercase;
			font-size: 12px;
		}

		&--col {
			flex-direction: column;
			align-items: flex-start;
			padding-top: 12px;

			p {
				margin: 0 0 10px;
			}

			span {
				font-size: 12px;
				background: #faa05a;
				color: #fff;
				border-radius: 2px;

				display: inline-block;
				padding: 0 10px;
			}
		}
	}

	.button {
		position: absolute;
		left: 16px;
		bottom: 16px;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: calc(100% - 32px);
		height: 46px;
		text-decoration: none;
		background-color: #000;
		color: #fff;
		transition: 0.25s ease-in-out all;

		&:hover {
			background-color: #2f2f2f;
		}
	}
`;
