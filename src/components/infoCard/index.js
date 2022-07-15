import { InfoCardContainer } from './styles.js';

function InfoCard({ data }) {
	return (
		<InfoCardContainer>
			<h3>Location: {data ? data.name : 'unknown'}</h3>
			<p>Dimenstion: {data ? data.dimension : 'unknown'}</p>
			<div>TYPE: {data ? data.type : 'unknown'}</div>
			<span>Number of residents: {data ? data.residents.length : 'unknown'}</span>
		</InfoCardContainer>
	);
}

export default InfoCard;
