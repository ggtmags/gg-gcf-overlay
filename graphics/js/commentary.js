const c1_name_rep = nodecg.Replicant('c1_name', 'gg-gcf-overlay');
const c1_social_rep = nodecg.Replicant('c1_social', 'gg-gcf-overlay');
const c2_name_rep = nodecg.Replicant('c2_name', 'gg-gcf-overlay');
const c2_social_rep = nodecg.Replicant('c2_social', 'gg-gcf-overlay');
const c3_name_rep = nodecg.Replicant('c3_name', 'gg-gcf-overlay');
const c3_social_rep = nodecg.Replicant('c3_social', 'gg-gcf-overlay');
const c4_name_rep = nodecg.Replicant('c4_name', 'gg-gcf-overlay');
const c4_social_rep = nodecg.Replicant('c4_social', 'gg-gcf-overlay');


c1_name_rep.on('change', (newValue, oldValue) => {	
	c1_name.innerText = `${newValue}` ;
});	
c2_name_rep.on('change', (newValue, oldValue) => {	
	c2_name.innerText = `${newValue}` ;
});

c1_social_rep.on('change', (newValue, oldValue) => {	
	c1_social.innerText = `${newValue}` ;
});	
c2_social_rep.on('change', (newValue, oldValue) => {	
	c2_social.innerText = `${newValue}` ;
});