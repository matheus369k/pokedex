import React from 'react';
import './index.css';
import './responsive.css';

export function Evolutions(getData) {
	return (
		<div className="evolutions_container">
			<h1>Evoluções:</h1>
			<ul className={`evolutin-line-${getData.evolutinLine}`}>
				{getData.dataEvolution.map((element, index) => (
					<li className={`evolutin number-evo-${index + 1}`} key={`evolutin-${index}`}>
						<img src={element.img} alt={`evolutin-${element.name}`} />
						{element.Lv !== '+' && (
							<p>
								{typeof element.Lv === 'number' && <span>level </span>}
								{element.Lv}
							</p>
						)}
						<p>{element.name}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
