const p = scarlet({elem: 'p', str: 'My name is {name}.', props: {name: 'Victor'}});
const app = document.getElementById('app');
app.innerHTML = p;
