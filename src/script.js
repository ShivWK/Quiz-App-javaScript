const modeIcon = document.querySelector('#modeToggle');
const icons = document.getElementsByClassName('fa-solid');
const body = document.querySelector('body');
const welcome_note = document.getElementById('welcome_note');
let mode = 'light';
modeIcon.addEventListener('click', ()=>{

    if(mode == 'light'){
        for(btns of icons){
            btns.classList.remove('text-gray-900');
            btns.classList.add('text-gray-300');
        }
        modeIcon.classList.remove('fa-toggle-off');
        modeIcon.classList.add('fa-toggle-on');

        body.classList.remove('bg-gray-200');
        body.classList.add('bg-gray-700');

        welcome_note.classList.remove('text-gray-800');
        welcome_note.classList.add('text-gray-200');

        mode = 'dark';
    }else{
        for(btns of icons){
            btns.classList.remove('text-gray-300');
            btns.classList.add('text-gray-900');
        }
        modeIcon.classList.remove('fa-toggle-on');
        modeIcon.classList.add('fa-toggle-off');

        body.classList.remove('bg-gray-700');
        body.classList.add('bg-gray-200');

        welcome_note.classList.remove('text-gray-200');
        welcome_note.classList.add('text-gray-800');

        mode = 'light';
    }
    
})