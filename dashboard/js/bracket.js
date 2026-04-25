


//declare
const player_1_1_rep = nodecg.Replicant('player_1_1');
const player_1_2_rep = nodecg.Replicant('player_1_2');
const player_2_1_rep = nodecg.Replicant('player_2_1');
const player_2_2_rep = nodecg.Replicant('player_2_2');
const player_3_1_rep = nodecg.Replicant('player_3_1');
const player_3_2_rep = nodecg.Replicant('player_3_2');
const player_4_1_rep = nodecg.Replicant('player_4_1');
const player_4_2_rep = nodecg.Replicant('player_4_2');
const player_5_1_rep = nodecg.Replicant('player_5_1');
const player_5_2_rep = nodecg.Replicant('player_5_2');
const player_6_1_rep = nodecg.Replicant('player_6_1');
const player_6_2_rep = nodecg.Replicant('player_6_2');
const player_7_1_rep = nodecg.Replicant('player_7_1');
const player_7_2_rep = nodecg.Replicant('player_7_2');
const player_8_1_rep = nodecg.Replicant('player_8_1');

//assign
const player_1_1 = document.querySelector('#player_1_1');
const player_1_2 = document.querySelector('#player_1_2');
const player_2_1 = document.querySelector('#player_2_1');
const player_2_2 = document.querySelector('#player_2_2');
const player_3_1 = document.querySelector('#player_3_1');
const player_3_2 = document.querySelector('#player_3_2');
const player_4_1 = document.querySelector('#player_4_1');
const player_4_2 = document.querySelector('#player_4_2');
const player_5_1 = document.querySelector('#player_5_1');
const player_5_2 = document.querySelector('#player_5_2');
const player_6_1 = document.querySelector('#player_6_1');
const player_6_2 = document.querySelector('#player_6_2');
const player_7_1 = document.querySelector('#player_7_1');
const player_7_2 = document.querySelector('#player_7_2');
const player_8_1 = document.querySelector('#player_8_1');


//update

player_1_1_rep.on('change', (newValue, oldValue) => {	
	player_1_1.innerValue = `${newValue}` ;
});	
player_1_2_rep.on('change', (newValue, oldValue) => {	
	player_1_2.innerValue = `${newValue}` ;
});	
player_2_1_rep.on('change', (newValue, oldValue) => {	
	player_2_1.innerValue = `${newValue}` ;
});	
player_2_2_rep.on('change', (newValue, oldValue) => {	
	player_2_2.innerValue = `${newValue}` ;
});	
player_3_1_rep.on('change', (newValue, oldValue) => {	
	player_3_1.innerValue = `${newValue}` ;
});	
player_3_2_rep.on('change', (newValue, oldValue) => {	
	player_3_2.innerValue = `${newValue}` ;
});	
player_4_1_rep.on('change', (newValue, oldValue) => {	
	player_4_1.innerValue = `${newValue}` ;
});	
player_4_2_rep.on('change', (newValue, oldValue) => {	
	player_4_2.innerValue = `${newValue}` ;
});	
player_5_1_rep.on('change', (newValue, oldValue) => {	
	player_5_1.innerValue = `${newValue}` ;
});	
player_5_2_rep.on('change', (newValue, oldValue) => {	
	player_5_2.innerValue = `${newValue}` ;
});	
player_6_1_rep.on('change', (newValue, oldValue) => {	
	player_6_1.innerValue = `${newValue}` ;
});	
player_6_2_rep.on('change', (newValue, oldValue) => {	
	player_6_2.innerValue = `${newValue}` ;
});	
player_7_1_rep.on('change', (newValue, oldValue) => {	
	player_7_1.innerValue = `${newValue}` ;
});	
player_7_2_rep.on('change', (newValue, oldValue) => {	
	player_7_2.innerValue = `${newValue}` ;
});	
player_8_1_rep.on('change', (newValue, oldValue) => {	
	player_8_1.innerValue = `${newValue}` ;
});	

//buttons
updatebutton.onclick = () => {
    player_1_1_rep.value = player_1_1.value;
    player_1_2_rep.value = player_1_2.value;
    player_2_1_rep.value = player_2_1.value;
    player_2_2_rep.value = player_2_2.value;
    player_3_1_rep.value = player_3_1.value;
    player_3_2_rep.value = player_3_2.value;
    player_4_1_rep.value = player_4_1.value;
    player_4_2_rep.value = player_4_2.value;
    player_5_1_rep.value = player_5_1.value;
    player_5_2_rep.value = player_5_2.value;
    player_6_1_rep.value = player_6_1.value;
    player_6_2_rep.value = player_6_2.value;
    player_7_1_rep.value = player_7_1.value;
    player_7_2_rep.value = player_7_2.value;
    player_8_1_rep.value = player_8_1.value;
}
