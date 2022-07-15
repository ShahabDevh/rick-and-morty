import { EpisodeContainer } from './styles.js';

function Episode({ data }) {
	return (
		<EpisodeContainer>
			<h4>
				{data.episode} - {data.name}
			</h4>
			<div>
				<span className="blue-chips">AIR DATE: {data.air_date}</span>
			</div>
			<span>Characters played in this episode: {data.characters.length}</span>
		</EpisodeContainer>
	);
}

export default Episode;
