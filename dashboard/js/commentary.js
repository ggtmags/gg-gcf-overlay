//declare
const c1_name_rep = nodecg.Replicant('c1_name');
const c1_social_rep = nodecg.Replicant('c1_social');
const c1_pronouns_rep = nodecg.Replicant('c1_pronouns');
const c2_name_rep = nodecg.Replicant('c2_name');
const c2_social_rep = nodecg.Replicant('c2_social');
const c2_pronouns_rep = nodecg.Replicant('c2_pronouns');
const c3_name_rep = nodecg.Replicant('c3_name');
const c3_social_rep = nodecg.Replicant('c3_social');
const c3_pronouns_rep = nodecg.Replicant('c3_pronouns');
const c4_name_rep = nodecg.Replicant('c4_name');
const c4_social_rep = nodecg.Replicant('c4_social');
const c4_pronouns_rep = nodecg.Replicant('c4_pronouns');
const c5_name_rep = nodecg.Replicant('c5_name');
const c5_social_rep = nodecg.Replicant('c5_social');
const c5_pronouns_rep = nodecg.Replicant('c5_pronouns');
const c6_name_rep = nodecg.Replicant('c6_name');
const c6_social_rep = nodecg.Replicant('c6_social');
const c6_pronouns_rep = nodecg.Replicant('c6_pronouns');
const c7_name_rep = nodecg.Replicant('c7_name');
const c7_social_rep = nodecg.Replicant('c7_social');
const c7_pronouns_rep = nodecg.Replicant('c7_pronouns');
const c8_name_rep = nodecg.Replicant('c8_name');
const c8_social_rep = nodecg.Replicant('c8_social');
const c8_pronouns_rep = nodecg.Replicant('c8_pronouns');

//assign
const c1_name = document.querySelector('#c1_name');
const c1_social = document.querySelector('#c1_social');
const c1_pronouns = document.querySelector('#c1_pronouns');
const c2_name = document.querySelector('#c2_name');
const c2_social = document.querySelector('#c2_social');
const c2_pronouns = document.querySelector('#c2_pronouns');
const c3_name = document.querySelector('#c3_name');
const c3_social = document.querySelector('#c3_social');
const c3_pronouns = document.querySelector('#c3_pronouns');
const c4_name = document.querySelector('#c4_name');
const c4_social = document.querySelector('#c4_social');
const c4_pronouns = document.querySelector('#c4_pronouns');
const c5_name = document.querySelector('#c5_name');
const c5_social = document.querySelector('#c5_social');
const c5_pronouns = document.querySelector('#c5_pronouns');
const c6_name = document.querySelector('#c6_name');
const c6_social = document.querySelector('#c6_social');
const c6_pronouns = document.querySelector('#c6_pronouns');
const c7_name = document.querySelector('#c7_name');
const c7_social = document.querySelector('#c7_social');
const c7_pronouns = document.querySelector('#c7_pronouns');
const c8_name = document.querySelector('#c8_name');
const c8_social = document.querySelector('#c8_social');
const c8_pronouns = document.querySelector('#c8_pronouns');


//update
c1_name_rep.on('change', (newValue, oldValue) => {
    c1_name.value = newValue;
});
c1_social_rep.on('change', (newValue, oldValue) => {
    c1_social.value = newValue;
});
c1_pronouns_rep.on('change', (newValue, oldValue) => {
    c1_pronouns.value = newValue;
});
c2_name_rep.on('change', (newValue, oldValue) => {
    c2_name.value = newValue;
});
c2_social_rep.on('change', (newValue, oldValue) => {
    c2_social.value = newValue;
});
c2_pronouns_rep.on('change', (newValue, oldValue) => {
    c2_pronouns.value = newValue;
});
c3_name_rep.on('change', (newValue, oldValue) => {
    c3_name.value = newValue;
});
c3_social_rep.on('change', (newValue, oldValue) => {
    c3_social.value = newValue;
});
c3_social_rep.on('change', (newValue, oldValue) => {
    c3_social.value = newValue;
});
c3_pronouns_rep.on('change', (newValue, oldValue) => {
    c3_pronouns.value = newValue;
});
c4_name_rep.on('change', (newValue, oldValue) => {
    c4_name.value = newValue;
});
c4_social_rep.on('change', (newValue, oldValue) => {
    c4_social.value = newValue;
});
c4_pronouns_rep.on('change', (newValue, oldValue) => {
    c4_pronouns.value = newValue;
});
c5_name_rep.on('change', (newValue, oldValue) => {
    c5_name.value = newValue;
});
c5_social_rep.on('change', (newValue, oldValue) => {
    c5_social.value = newValue;
});
c5_pronouns_rep.on('change', (newValue, oldValue) => {
    c5_pronouns.value = newValue;
});
c6_name_rep.on('change', (newValue, oldValue) => {
    c6_name.value = newValue;
});
c6_social_rep.on('change', (newValue, oldValue) => {
    c6_social.value = newValue;
});
c6_pronouns_rep.on('change', (newValue, oldValue) => {
    c6_pronouns.value = newValue;
});
c7_name_rep.on('change', (newValue, oldValue) => {
    c7_name.value = newValue;
});
c7_social_rep.on('change', (newValue, oldValue) => {
    c7_social.value = newValue;
});
c7_pronouns_rep.on('change', (newValue, oldValue) => {
    c7_pronouns.value = newValue;
});
c8_name_rep.on('change', (newValue, oldValue) => {
    c8_name.value = newValue;
});
c8_social_rep.on('change', (newValue, oldValue) => {
    c8_social.value = newValue;
});
c8_pronouns_rep.on('change', (newValue, oldValue) => {
    c8_pronouns.value = newValue;
});
//buttons
updatebutton.onclick = () => {
    c1_name_rep.value = c1_name.value;
    c1_social_rep.value = c1_social.value;
    c1_pronouns_rep.value = c1_pronouns.value;
    c2_name_rep.value = c2_name.value;
    c2_social_rep.value = c2_social.value;
    c2_pronouns_rep.value = c2_pronouns.value;
    c3_name_rep.value = c3_name.value;
    c3_social_rep.value = c3_social.value;
    c3_pronouns_rep.value = c3_pronouns.value;
    c4_name_rep.value = c4_name.value;
    c4_social_rep.value = c4_social.value;
    c4_pronouns_rep.value = c4_pronouns.value;
    c5_name_rep.value = c5_name.value;
    c5_social_rep.value = c5_social.value;
    c5_pronouns_rep.value = c5_pronouns.value;
    c6_name_rep.value = c6_name.value;
    c6_social_rep.value = c6_social.value;
    c6_pronouns_rep.value = c6_pronouns.value;
    c7_name_rep.value = c7_name.value;
    c7_social_rep.value = c7_social.value;
    c7_pronouns_rep.value = c7_pronouns.value;
    c8_name_rep.value = c8_name.value;
    c8_social_rep.value = c8_social.value;
    c8_pronouns_rep.value = c8_pronouns.value;
}
swapcoms.onclick = () => {
    c1_name_rep.value = c5_name.value;
    c1_social_rep.value = c5_social.value;
    c1_pronouns_rep.value = c5_pronouns.value;
    c2_name_rep.value = c6_name.value;
    c2_social_rep.value = c6_social.value;
    c2_pronouns_rep.value = c6_pronouns.value;
    c3_name_rep.value = c7_name.value;
    c3_social_rep.value = c7_social.value;
    c3_pronouns_rep.value = c7_pronouns.value;
    c4_name_rep.value = c8_name.value;
    c4_social_rep.value = c8_social.value;
    c4_pronouns_rep.value = c8_pronouns.value;
    c5_name_rep.value = c1_name.value;
    c5_social_rep.value = c1_social.value;
    c5_pronouns_rep.value = c1_pronouns.value;
    c6_name_rep.value = c2_name.value;
    c6_social_rep.value = c2_social.value;
    c6_pronouns_rep.value = c2_pronouns.value;
    c7_name_rep.value = c3_name.value;
    c7_social_rep.value = c3_social.value;
    c7_pronouns_rep.value = c3_pronouns.value;
    c8_name_rep.value = c4_name.value;
    c8_social_rep.value = c4_social.value;
    c8_pronouns_rep.value = c4_pronouns.value;
}
