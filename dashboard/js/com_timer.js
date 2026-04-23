const com_timer_min_rep = nodecg.Replicant('com_timer_min');
const com_timer_sec_rep = nodecg.Replicant('com_timer_sec');
const com_timer_status_rep = nodecg.Replicant('com_timer_status');

const com_timer_min = document.querySelector('#com_timer_min');
const com_timer_sec = document.querySelector('#com_timer_sec');

com_timer_min_rep.on('change', (newValue, oldValue) => {	
	com_timer_min.value = newValue;
});	
com_timer_sec_rep.on('change', (newValue, oldValue) => {	
	com_timer_sec.value = newValue;
});	
com_timer_status_rep.on('change', (newValue, oldValue) => {	
	console.log(newValue);
    if (com_timer_status_rep.value == "run"){
        document.getElementById("combutton_start").classList.remove("uk-button-secondary");
        document.getElementById("combutton_start").classList.add("uk-button-primary");
        document.getElementById("combutton_stop").classList.add("uk-button-secondary");
        document.getElementById("combutton_stop").classList.remove("uk-button-primary");
    }else if (com_timer_status_rep.value == "stop"){
        document.getElementById("combutton_start").classList.add("uk-button-secondary");
        document.getElementById("combutton_start").classList.remove("uk-button-primary");
        document.getElementById("combutton_stop").classList.remove("uk-button-secondary");
        document.getElementById("combutton_stop").classList.add("uk-button-primary");
    }else{
        document.getElementById("combutton_start").classList.add("uk-button-secondary");
        document.getElementById("combutton_start").classList.remove("uk-button-primary");
        document.getElementById("combutton_stop").classList.add("uk-button-secondary");
        document.getElementById("combutton_stop").classList.remove("uk-button-primary");
    }
});

//buttons
combutton_set.onclick = () => {
    com_timer_min_rep.value = com_timer_min.value;
    com_timer_sec_rep.value = com_timer_sec.value;
}
combutton_start.onclick = () => {
    com_timer_status_rep.value = "run";
}
combutton_stop.onclick = () => {
    com_timer_status_rep.value = "stop";
}