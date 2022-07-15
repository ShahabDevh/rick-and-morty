import styled from 'styled-components';

export const Box = styled.div`
	padding: 24px;

	.title-wrapper {
		h1 {
			margin: 0 0 12px;
		}

		h2 {
			margin: 12px 0;
		}
	}

	.flex-box {
		display: flex;
		justify-content: space-between;
	}

	.card {
		box-shadow: 0 5px 15px rgb(0 0 0 / 8%);
		padding: 16px;
	}

	.col {
		&--small {
			flex: 1 1 312px;
			margin-right: 16px;
			/* margin-right: 5%; */

			& > div {
				margin-bottom: 16px;
			}
		}

		&--large {
			flex: 1 1 calc(100% - 312px);

			h3 {
				text-align: center;
				margin: 0 0 12px;
			}
		}
	}
`;

export const LoaderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
`;
