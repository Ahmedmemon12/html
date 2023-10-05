const firstTheme = document.getElementById('First');
const secondTheme = document.getElementById('Second');
const thirdTheme = document.getElementById('Third');
const fourthTheme = document.getElementById('Fourth');
const fifthTheme = document.getElementById('Fifth');
const sixthTheme = document.getElementById('Sixth');

const firstContainer = document.getElementById('Container');
const secondContainer = document.getElementById('Container2');
const thirdContainer = document.getElementById('Container3');

const Footer = document.getElementsByTagName('footer');
const Header = document.getElementById('header');
const mainContainer = document.getElementById('main')

const Editor = document.getElementById('Editor')

const button = document.getElementById('changeTheme');

button.addEventListener('click', function(){
    Editor.style.display = 'flex'
    mainContainer.style.display = 'none'
})

firstTheme.addEventListener('click', function(){
    Header.className = 'BHeader'
    firstContainer.className = 'Bcontainer'
    secondContainer.className = 'Bcontainer2'
    thirdContainer.className = 'Bcontainer3'
    Editor.style.display = 'none'
    mainContainer.style.display = 'block'
})
secondTheme.addEventListener('click', function(){
    Header.className = 'PHeader'
    firstContainer.className = 'Pcontainer'
    secondContainer.className = 'Pcontainer2'
    thirdContainer.className = 'Pcontainer3'
    Editor.style.display = 'none'
    mainContainer.style.display = 'block'

})
thirdTheme.addEventListener('click', function(){
    Header.className = 'GHeader'
    firstContainer.className = 'Gcontainer'
    secondContainer.className = 'Gcontainer2'
    thirdContainer.className = 'Gcontainer3'
    Editor.style.display = 'none'
    mainContainer.style.display = 'block'
})
fourthTheme.addEventListener('click', function(){
    Header.className = 'YHeader'
    firstContainer.className = 'Ycontainer'
    secondContainer.className = 'Ycontainer2'
    thirdContainer.className = 'Ycontainer3'
    Editor.style.display = 'none'
    mainContainer.style.display = 'block'
})
fifthTheme.addEventListener('click', function(){
    Header.className = 'BlHeader'
    firstContainer.className = 'Blcontainer'
    secondContainer.className = 'Blcontainer2'
    thirdContainer.className = 'Blcontainer3'
    Editor.style.display = 'none'
    mainContainer.style.display = 'block'
})
sixthTheme.addEventListener('click', function(){
    Header.className = 'DHeader'
    firstContainer.className = 'Dcontainer'
    secondContainer.className = 'Dcontainer2'
    thirdContainer.className = 'Dcontainer3'
    Footer.className = 'Dfooter'
    Editor.style.display = 'none'
    mainContainer.style.display = 'block'
})