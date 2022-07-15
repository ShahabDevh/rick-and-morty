import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from './styles';

function CharacterCard({ data, hasButton = false }) {
	return (
		<Card hasButton={hasButton}>
			<div className="image-wrapper">
				<img src={data.image} alt={data.name} loading="lazy" />

				<span>{data.status}</span>
			</div>

			<div className="content-wrapper">
				<h3>{data.name}</h3>

				<div className="chips-wrapper">
					<span>{data.gender}</span>
					<span>{data.species}</span>
				</div>

				<div className="chips-wrapper chips-wrapper--col">
					<p>Episodes ({data.episode.length})</p>
					<span>{data.origin.name}</span>
				</div>

				{hasButton && (
					<Link to={`/character/${data.id}`} className="button">
						More Info
					</Link>
				)}
			</div>
		</Card>
	);
}

export default CharacterCard;
