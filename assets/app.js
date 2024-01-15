document.addEventListener('DOMContentLoaded', function(){
    const dividingLine = document.getElementById('dividing-line');
    dividingLine.classList.add('addDividingAnimation');
    const headerH1 = document.querySelector('#header-content h1');
    headerH1.classList.add('addH1Animation')
    const headerP = document.querySelector('#header-content p');
    const textInP = 'Specjalizuje się w tworzeniu stron, aplikacji oraz sklepów internetowych. W mojej pracy kieruję się rzetelnością i skoncentrowaniem na efektywnych rozwiązaniach. Interesuje się podróżowaniem, jestem zawsze gotowy na odkrywanie nowych miejsc i kultur.'
    let actualText = '';
    let i = 0;
    const numbers = [];
    for (let x = 1; x <= 100; x++) {
    numbers.push(x.toString());
    }
    const numbers2 = [];
    for (let u = 1; u <= 50; u++) {
    numbers2.push(u.toString());
    numbers2.push(u.toString());
    }
    const result1 = document.getElementById('result1');
    const result2 = document.getElementById('result2');
    const result3 = document.getElementById('result3');
    const intervalFor = setInterval(function(){
        if(i<textInP.length){
        actualText += textInP[i]
        headerP.textContent = actualText;
        i++
        }else{
            clearInterval(intervalFor);
        }
    },30);
    let isAlpha = false;
    const nav = document.querySelector('nav');
    const progressBar = document.getElementById('progress-bar');
    const scrollHeight = this.documentElement.scrollHeight;
    document.addEventListener('scroll', function(){
        const scrollTop = this.documentElement.scrollTop;
        const scrollProcent = 100 * scrollTop / (scrollHeight - window.innerHeight) + '%';
        progressBar.style.width = scrollProcent;
        if(!isAlpha && scrollTop != 0){
            isAlpha = true;
            nav.animate(
                [
                    {backgroundColor: '#ffffffff'},
                    {backgroundColor: '#ffffffd9'}
                ],
                {
                    duration: 220,
                    fill: 'forwards'
                }
            );
        }
        if(isAlpha && scrollTop == 0){
            isAlpha = false;
            nav.animate(
                [
                    {backgroundColor: '#ffffffd9'},
                    {backgroundColor: '#ffffffff'}
                ],
                {
                    duration: 220,
                    fill: 'forwards'
                }
            );
            setTimeout(function(){
                nav.removeAttribute('style');
            }, 220)
        }
    })

    function animationGo(activator)
    {   
    let k = 0;
    const observer1 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            const interval2 = setInterval(function(){
                if(k<100){
                result3.textContent = numbers[k] + '%';
                result1.textContent = numbers2[k];
                result2.textContent = numbers2[k];
                k++
                }else{
                    clearInterval(interval2);
                    result3.textContent = '100%';
                    result1.textContent = '50';
                    result2.textContent = '50';
                }
            },15);
            return;
        }
        });
    });
    observer1.observe(document.querySelector(activator));
    }
    animationGo('#meters');
    function animationGo3(activator)
    {   
    const observer1 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        document.querySelector(activator).animate(
            [
                {opacity: '0', marginTop: '50px'},
                {opacity: '1', marginTop: '0px'}
            ],
            {
                duration: 220,
                fill: 'forwards'
            }
        )
        });
    });
    observer1.observe(document.querySelector(activator));
    }
    for(d = 1; d < 7; d++){
        animationGo3('.d'+d);
    }

})
