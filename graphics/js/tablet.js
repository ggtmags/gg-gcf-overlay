const p1_name_rep = nodecg.Replicant('p1_name', 'ggob-tcg-base');
const p1_record_rep = nodecg.Replicant('p1_record', 'ggob-tcg-base');
const p1_deck_rep = nodecg.Replicant('p1_deck', 'ggob-tcg-base');
const p1_life_rep = nodecg.Replicant('p1_life', 'ggob-tcg-base');
const p1_wins_rep = nodecg.Replicant('p1_wins', 'ggob-tcg-base');
const p1_infect_rep = nodecg.Replicant('p1_infect', 'ggob-tcg-base');
const round_rep = nodecg.Replicant('round', 'ggob-tcg-base');
const p2_name_rep = nodecg.Replicant('p2_name', 'ggob-tcg-base');
const p2_record_rep = nodecg.Replicant('p2_record', 'ggob-tcg-base');
const p2_deck_rep = nodecg.Replicant('p2_deck', 'ggob-tcg-base');
const p2_life_rep = nodecg.Replicant('p2_life', 'ggob-tcg-base');
const p2_wins_rep = nodecg.Replicant('p2_wins', 'ggob-tcg-base');
const p2_infect_rep = nodecg.Replicant('p2_infect', 'ggob-tcg-base');

const com_timer_min_rep = nodecg.Replicant('com_timer_min', 'ggob-tcg-base');
const com_timer_sec_rep = nodecg.Replicant('com_timer_sec', 'ggob-tcg-base');
const com_timer_status_rep = nodecg.Replicant('com_timer_status', 'ggob-tcg-base');


p1_name_rep.on('change', (newValue, oldValue) => {	
	p1_name.innerText = `${newValue}` ;
});	
p1_life_rep.on('change', (newValue, oldValue) => {	
	p1_life.innerText = `${newValue}` ;
});	
p1_wins_rep.on('change', (newValue, oldValue) => {	
	p1_wins.innerText = `${newValue}` ;
});	
p1_infect_rep.on('change', (newValue, oldValue) => {	
	p1_infect.innerText = `${newValue}` ;
});	
p2_name_rep.on('change', (newValue, oldValue) => {	
	p2_name.innerText = `${newValue}` ;
});	
p2_life_rep.on('change', (newValue, oldValue) => {	
	p2_life.innerText = `${newValue}` ;
});	
p2_wins_rep.on('change', (newValue, oldValue) => {	
	p2_wins.innerText = `${newValue}` ;
});	
p2_infect_rep.on('change', (newValue, oldValue) => {	
	p2_infect.innerText = `${newValue}` ;
});	
round_rep.on('change', (newValue, oldValue) => {	
	round.innerText = `${newValue}` ;
});	

com_timer_min_rep.on('change', (newValue, oldValue) => {	
	timermin.innerText = `${newValue}` ;
});	
com_timer_sec_rep.on('change', (newValue, oldValue) => {	
    if(com_timer_sec_rep.value < 10){
        timersec.innerText = `0${newValue}` ;
    }else{
        timersec.innerText = `${newValue}` ;
    }
});	

p1minus1.onclick = () => {
    p1_life_rep.value = parseInt(p1_life_rep.value) - 1;
}
p1minus2.onclick = () => {
    p1_life_rep.value = parseInt(p1_life_rep.value) - 5;
}
p1minus3.onclick = () => {
    p1_life_rep.value = parseInt(p1_life_rep.value) - 10;
}
p2minus1.onclick = () => {
    p2_life_rep.value = parseInt(p2_life_rep.value) - 1;
}
p2minus2.onclick = () => {
    p2_life_rep.value = parseInt(p2_life_rep.value) - 5;
}
p2minus3.onclick = () => {
    p2_life_rep.value = parseInt(p2_life_rep.value) - 10;
}

p1plus1.onclick = () => {
    p1_life_rep.value = parseInt(p1_life_rep.value) + 1;
}
p1plus2.onclick = () => {
    p1_life_rep.value = parseInt(p1_life_rep.value) + 5;
}
p1plus3.onclick = () => {
    p1_life_rep.value = parseInt(p1_life_rep.value) + 10;
}
p2plus1.onclick = () => {
    p2_life_rep.value = parseInt(p2_life_rep.value) + 1;
}
p2plus2.onclick = () => {
    p2_life_rep.value = parseInt(p2_life_rep.value) + 5;
}
p2plus3.onclick = () => {
    p2_life_rep.value = parseInt(p2_life_rep.value) + 10;
}

p1infectminus.onclick = () => {
    p1_infect_rep.value = parseInt(p1_infect_rep.value) - 1;
}
p2infectminus.onclick = () => {
    p2_infect_rep.value = parseInt(p2_infect_rep.value) - 1;
}
p1infectplus.onclick = () => {
    p1_infect_rep.value = parseInt(p1_infect_rep.value) + 1;
}
p2infectplus.onclick = () => {
    p2_infect_rep.value = parseInt(p2_infect_rep.value) + 1;
}

p1pluswin.onclick = () => {
    p1_wins_rep.value = parseInt(p1_wins_rep.value) + 1;
}
p1minuswin.onclick = () => {
    p1_wins_rep.value = parseInt(p1_wins_rep.value) - 1;
}
p2pluswin.onclick = () => {
    p2_wins_rep.value = parseInt(p2_wins_rep.value) + 1;
}
p2minuswin.onclick = () => {
    p2_wins_rep.value = parseInt(p2_wins_rep.value) - 1;
}




swapgame.onclick = () => {
    p1_name_rep.value = p2_name_rep.value;
    p1_record_rep.value = p2_record_rep.value;
    p1_deck_rep.value = p2_deck_rep.value;
    p1_life_rep.value = p2_life_rep.value;
    p1_wins_rep.value = p2_wins_rep.value;
    p1_infect_rep.value = p2_infect_rep.value;
    p2_name_rep.value = p1_name_rep.value;
    p2_record_rep.value = p1_record_rep.value;
    p2_deck_rep.value = p1_deck_rep.value;
    p2_life_rep.value = p1_life_rep.value;
    p2_wins_rep.value = p1_wins_rep.value;
    p2_infect_rep.value = p1_infect_rep.value;
}

resetgame.onclick = () => {
    p1_life_rep.value = 20;
    p2_life_rep.value = 20;
    p1_infect_rep.value = 0;
    p2_infect_rep.value = 0;
}


var elem = document.documentElement;

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
