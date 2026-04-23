const p1_name_rep = nodecg.Replicant('p1_name');
const p1_record_rep = nodecg.Replicant('p1_record');
const p1_wins_rep = nodecg.Replicant('p1_wins');
const round_rep = nodecg.Replicant('round');
const p2_name_rep = nodecg.Replicant('p2_name');
const p2_record_rep = nodecg.Replicant('p2_record');
const p2_wins_rep = nodecg.Replicant('p2_wins');



const p1_name = document.querySelector('#p1_name');
const p1_record = document.querySelector('#p1_record');
const p1_wins = document.querySelector('#p1_wins');
const round = document.querySelector('#round');
const p2_name = document.querySelector('#p2_name');
const p2_record = document.querySelector('#p2_record');
const p2_wins = document.querySelector('#p2_wins');

p1_name_rep.on('change', (newValue, oldValue) => {	
	p1_name.value = newValue;
});	
p1_record_rep.on('change', (newValue, oldValue) => {	
	p1_record.value = newValue;
});	
p1_wins_rep.on('change', (newValue, oldValue) => {	
	p1_wins.value = newValue;
});	
round_rep.on('change', (newValue, oldValue) => {	
	round.value = newValue;
});	
p2_name_rep.on('change', (newValue, oldValue) => {	
	p2_name.value = newValue;
});	
p2_name_rep.on('change', (newValue, oldValue) => {	
	p2_name.value = newValue;
});	
p2_record_rep.on('change', (newValue, oldValue) => {	
	p2_record.value = newValue;
});	
p2_wins_rep.on('change', (newValue, oldValue) => {	
	p2_wins.value = newValue;
});	

updategame.onclick = () => {
    p1_name_rep.value = p1_name.value;
    p1_record_rep.value = p1_record.value;
    p1_wins_rep.value = p1_wins.value;
    round_rep.value = round.value;
    p2_name_rep.value = p2_name.value;
    p2_record_rep.value = p2_record.value;
    p2_wins_rep.value = p2_wins.value;
}

swapgame.onclick = () => {
    p1_name_rep.value = p2_name_rep.value;
    p1_record_rep.value = p2_record_rep.value;
    p1_wins_rep.value = p2_wins_rep.value;
    p2_name_rep.value = p1_name_rep.value;
    p2_record_rep.value = p1_record_rep.value;
    p2_wins_rep.value = p1_wins_rep.value;
}

resetgame.onclick = () => {
    p1_wins_rep.value = 0;
    p2_wins_rep.value = 0;
}


p1winminus.onclick = () => {
    p1_wins_rep.value = parseInt(p1_wins_rep.value) - 1;
}
p1winplus.onclick = () => {
    p1_wins_rep.value = parseInt(p1_wins_rep.value) + 1;
}

p2winminus.onclick = () => {
    p2_wins_rep.value = parseInt(p2_wins_rep.value) - 1;
}
p2winplus.onclick = () => {
    p2_wins_rep.value = parseInt(p2_wins_rep.value) + 1;
}