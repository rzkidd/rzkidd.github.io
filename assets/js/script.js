const profile_button = document.getElementById('profile_button');
const profile = document.getElementById('profile');
const blurred = document.getElementById('blur');

profile_button.addEventListener('click', function(e){
    profile.style.setProperty('display', 'flex');
    blurred.removeAttribute('hidden');

    const close = document.getElementById('close_popup');
    close.addEventListener('click', function(e){
        profile.style.setProperty('display', 'none', 'important');
        blurred.setAttribute('hidden', 'true');
    })

    blurred.addEventListener('click', function(e){
        profile.style.setProperty('display', 'none', 'important');
        blurred.setAttribute('hidden', 'true');
    })
})

if(window.innerWidth <= 768){
    const sidebar_button = document.getElementById('sidebar_button');
    const list_icon = document.getElementById('list_icon');
    const x_icon = document.getElementById('x_icon');
    const nav = document.getElementById('nav');
    const nav_link = document.getElementsByClassName('nav-link');

    list_icon.addEventListener('click', function(e){
        nav.classList.remove('big-nav');
        nav.classList.add('sidebar_items');
        list_icon.setAttribute('hidden', 'true');
        x_icon.removeAttribute('hidden');
    })
    
    x_icon.addEventListener('click', function(e){
        nav.classList.add('big-nav');
        nav.classList.remove('sidebar_items');
        x_icon.setAttribute('hidden', 'true');
        list_icon.removeAttribute('hidden');
    })

    for(item of nav_link){
        item.addEventListener('click', function(e){
            nav.classList.add('big-nav');
            nav.classList.remove('sidebar_items');
            x_icon.setAttribute('hidden', 'true');
            list_icon.removeAttribute('hidden');
        })
    }
}