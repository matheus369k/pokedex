import styles from './index.module.css';

export function Status({baseStatus}) {
	return (
		<div className={styles.status_basic}>
			<h1>Status:</h1>
			<ul>
				<li>
					<span>HP: </span> <span>{baseStatus.HP}</span>
				</li>
				<li>
					<span>Attack: </span> <span>{baseStatus.Attack}</span>
				</li>
				<li>
					<span>Defense: </span> <span>{baseStatus.Defense}</span>
				</li>
				<li>
					<span>Sp.attack: </span> <span>{baseStatus['Sp.attack']}</span>
				</li>
				<li>
					<span>Sp.Def: </span> <span>{baseStatus['Sp.Def']}</span>
				</li>
				<li>
					<span>Speed: </span> <span>{baseStatus.Speed}</span>
				</li>
			</ul>
		</div>
	);
}
