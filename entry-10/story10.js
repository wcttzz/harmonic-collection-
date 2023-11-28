var words=[
    'once',
    'upon',
    'a',
    'time...',
    'Hansel',
    'Gretel',
    'poor', 
    'wood',
    'cutter',
    'wife',
    '2 kids',
    'anxiety',
    'about',
    'life',
    'abandonment', 
    'light',
    'fire',
    'each',
    'piece',
    'of',
    'bread',
    'leave',
    'them',
    'dark',
    'thick',
    'forest',
    'no',
    'peace',
    'until',
    'consent',
    'children',
    'overheard',
    'moon',
    'shone',
    'brightly',
    'collect',
    'white',
    'pebbles',
    'glittered',
    'left',
    'home', 
    'leaving',
    'pebble',
    'trail',
    'sat',
    'by',
    'fire', 
    'fell',
    'asleep', 
    'follow',
    'the',
    'trail',
    'back',
    'home',
    'leave',
    'them',
    'again',
    'bread',
    'crumbs',
    'trail',
    'disappeared',
    'oh',
    'look', 
    'cake',
    'and',
    'bread',
    'house', 
    'Hansel',
    'eat',
    'roof',
    'Gretel',
    'eat',
    'window',
    'old',
    'wwoman',
    'do',
    'come',
    'in', 
    'pretended',
    'to',
    'be',
    'kind', 
    'wicked',
    'witch',
    'eats',
    'children',
    'locked',
    'fatten',
    'him',
    'up', 
    'check',
    'your',
    'finger',
    'are',
    'you',
    'fat',
    'boy?',
    'held',
    'little',
    'bone', 
    'still',
    'stick',
    'skinny',
    'no',
    'patience', 
    'cook',
    'him',
    'up',
    'filled',
    'up',
    'the',
    'cauldron',
    'light',
    'up',
    'the',
    'fire',
    'creep',
    'in', 
    'do',
    'not',
    'know',
    'how',
    'will',
    'show',
    'you',
    'Gretel',
    'pushed',
    'witch',
    'fell',
    'inside',
    'shut',
    'and',
    'ocked', 
    'free',
    'run',
    'run',
    'crossed',
    'the',
    'river',
    'back',
    'home',
    'happily',
    'ever',
    'after',
    'the',
    'end'];

    function randomNum(min,max){
        var num=(Math.random() * (max - min + 1) + min).toFixed(2);
        return num;
        }

        function init(){
            var container=document.querySelector('.container');
            var f=document.createDocumentFragment();

            words.forEach(w => {
                var word_box=document.createElement('div');
                var word=document.createElement('div');

                word.innerText=w;
                word.classList.add('word');


                var hue=randomNum(0,240);
                word.style.color='hsl('+hue+',100%,65%)';

                word_box.classList.add('word-box');

                word_box.style.setProperty('--margin-top',randomNum(-40,20)
                +'vh');
                word_box.style.setProperty('--margin-left',randomNum(6,35)
                +'vw');
                word_box.style.setProperty('--animation-duration',randomNum(8,20)
                +'s');
                word_box.style.setProperty('--animation-delay',randomNum(-20,0)
                +'s');

                word_box.appendChild(word);
                f.appendChild(word_box);


            })
            container.appendChild(f);
        }

        window.addEventListener('load', init);
