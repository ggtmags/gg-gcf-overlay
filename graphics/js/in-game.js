const p1_name_rep = nodecg.Replicant('p1_name', 'ggob-tcg-base');
const p1_record_rep = nodecg.Replicant('p1_record', 'ggob-tcg-base');
const p1_wins_rep = nodecg.Replicant('p1_wins', 'ggob-tcg-base');
const round_rep = nodecg.Replicant('round', 'ggob-tcg-base');
const p2_name_rep = nodecg.Replicant('p2_name', 'ggob-tcg-base');
const p2_record_rep = nodecg.Replicant('p2_record', 'ggob-tcg-base');
const p2_wins_rep = nodecg.Replicant('p2_wins', 'ggob-tcg-base');

p1_name_rep.on('change', (newValue, oldValue) => {	
	p1_name.innerText = `${newValue}` ;
});	
p1_wins_rep.on('change', (newValue, oldValue) => {	
	p1_wins.innerText = `${newValue}` ;
});	
p1_record_rep.on('change', (newValue, oldValue) => {	
	p1_record.innerText = `${newValue}` ;
});	
p2_name_rep.on('change', (newValue, oldValue) => {	
	p2_name.innerText = `${newValue}` ;
});	
p2_wins_rep.on('change', (newValue, oldValue) => {	
	p2_wins.innerText = `${newValue}` ;
});	
p2_record_rep.on('change', (newValue, oldValue) => {	
	p2_record.innerText = `${newValue}` ;
});
round_rep.on('change', (newValue, oldValue) => {	
	round.innerText = `${newValue}` ;
});	