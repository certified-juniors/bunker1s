import React from 'react';
import '../App.css';

interface FlagsProps {
    setFlag: (flag: boolean) => void;
}

const Rules = (props: FlagsProps) => {
    return (
        <div className='RulesOutterContainer'>
            <div className='RulesInnerContainer'>
                <div className='RulesHeadding'>
                    <button className='closeRulesButton' onClick={() => props.setFlag(false)}>Назад</button>
                    <span className='RulesSpan'>
                        <h3 className='RulesH1'>Правила.</h3>
                    </span>
                </div>
                <div className='RulesContent'>
                    {/* <div className='RulesScroll'> */}
                        <div className='StoryText'>
                            <h2 className='history'>История:</h2>
                            <span className='storyScroll'>
                                <p>На земле произошла катастрофа. Часть людей находится возле спасительного бункера, и каждый мечтает попасть в него и выжить. Но количество спасательных мест ограничено: в бункер попадёт только половина, остальные останутся на произвол судьбы.</p>
                                <p>Каждый круг, кроме первого, проходит голосование, по которому участники решают кто из людей попадает в бункер. Финалисты буду возрождать быт и население Земли.</p>
                                <p>Игроки должны выбрать самых полезных людей для восстановления жизни на постапокалиптической планете. Именно они попадут в бункер.</p>
                                <p>У каждого персонажа есть набор характеристик: профессия, здоровье, биологические характеристики, хобии, фобии, дополнительные навыки, человеческие качества. По ним участники оценивают персонажа, насколько он будет полезен после выхода из бункера. Оружия и насилия нет, только дискуссия и обоснование своей важности и необходимости.</p>
                            </span>
                            <h2 className='gameRules'>Правила игры:</h2>
                            <span className='rulesScroll'>
                                <h3>Игровые карты разбиты на категории:</h3>
                                <h4>Карты катастроф - 7 карт</h4>
                                <p>Выбор катастрофы для игры. Каждая катастрофа носит определенные характеристики климата и оставшегося населения.</p>
                                <p>Описание бункера - 30 карт</p>
                                <h3>Карты персонажа:</h3>
                                <h4>Карты профессии - 50 карт.</h4>
                                <h4>Здоровье - 30 карт.</h4>
                                <h4>Биологические характеристики - 30 карт.</h4>
                                <h4>Дополнительные навыки - 30 карт</h4>
                                <h4>Человеческие качества - 30 карт</h4>
                                <h4>Хобби - 30 карт</h4>
                                <h4>Фобии - 30 карт</h4>
                                <h4>Карты специальных условий - 30 карт</h4>
                                <p>вводят новую информацию для игроков во время игры</p>
                                <h4>Багаж - 30 карт</h4>
                            </span>
                            <h2 className='fourteenRules'>Правила игры на 14 человек:</h2>
                            <p>7 из 14 попадут в бункер, другие 7 человек остаются в лесу.</p>
                            <span>
                                <h3 className='step1'>ШАГ 1 выбор катастрофы и описание бункера.</h3>
                                <p>Карта "катастрофа" - одна из 7 карт, определит, характеристики мира после катастрофы и количество выживших на Земле. Выбор этой карты происходит в случайном порядке. Карта "Описание бункера" - одна из 10 карт, определит, что есть в вашем бункере (медицинский кабинет, оружие и так далее). Выбор карты происходит в случайном порядке.</p>
                                <p>На старте игрок обезличен и вживается в своего персонажа постепенно, с каждым кругом. У него нет пола, возраста и других категорий, пока он не окткроет перед всеми игроками соответствующую карту.</p>
                                <p>Игра начинается. Игроки высказываются по кругу по первой открытой карте (первый круг по часовой стрелке, следующий круг против часововй и так последательно меняются).</p>
                                <h3 className='step2'>ШАГ 2.</h3>
                                <p>Каждому игроку раздается по одной карте (рубашкой вверх) с характеристиками: профессия, здоровье, биологические характеристики, хобби, фобии, дополнительная информация, человеческие качества, багаж (8 карт) и 2 карты "Специальные условия", которые можно использовать во время игры. Они не являются характеристикой персонажа, а дополняют игру (иммунитет игрока, окружение бункера). Всего 10 карт на игрока, они тоже выдаются в случайном порядке.</p>
                                <p>На старте игрок обезличен и вживается в своего персонажа постепенно, с каждым кругом. У него нет пола, возраста и других категорий, пока он не откроет перед всеми игроками соответствующую карту.</p>
                                <p>Игра начинается. Игроки высказываются по кругу по первой открытой карте (первый круг по часовой стрелке, следующей круг против часовой и так последовательно меняются).</p>
                                <h3 className='step3'>ШАГ 3.</h3>
                                <p>1 круг: каждый игрок по очереди всрывает карты Профессия и обосновывает свою необходимость попасть в бункер. Например, карточка с профессией Врач у игрока 1.</p>
                                <p>Игрок 1: Я должен попасть в бункер, так как моя профессия просто необходима: когда мы выйдем из бункера, мы не перестанем болеть, получать травмы. Человек без специального образования не сможет помочь вам. В 16 веке люди умирали от простой раны, необходимо избежать этого и взять меня в бункер.</p>
                                <p>Игроки высказываются по очереди, каждому дается 1 минута.</p>
                                <p>Важно в первом круго оперировать только профессиональными характеристиками, так как мы еще не знаем ничего о персонаже.</p>
                                <h3 className='step4'>ШАГ 4.</h3>
                                <p>Теперь каждый участник сам определяет. какую из своих 7 карт он хочет открыть остальным. Игрок может не показывать одну из карт другим игрокам до окончания игры.</p>
                                <p>Игрок 1: Выкладывает карточку Состояние здоровья. Я должен остаться в бункере, я врач и я абсолютно здоров, что говорит о моей трудоспособности и возможности продолжения рода. На этот круг каждому игроку дается 30 секунд.</p>
                                <h3 className='step5'>ШАГ 5.</h3>
                                <p>После того как все озвучили свои вторые карты, участники голосованием выдвигают одного кандидата на выбывание. Игроки, набравшие максимальное количество голосов, имеют право защищаться: каждому из номинантов дается по 20 секунд, чтобы оправадть себя. После чего проходит финальное голосование на выбывание. Выбывший игрок продолжает сидеть за столом, не открывая свои карты и не участвуя в дискуссии и голосовании.</p>
                                <h4>На этот крут 20 секунд на каждого игрока.</h4>
                                <h3 className='step6'>ШАГ 6.</h3>
                                <p>Игроки по очереди озвучивают следующую карту, которую хотят показать.</p>
                                <p>Игрок 1: Я должен попасть в бункер.</p>
                                <p>Я врач, идеально здоров, общительный. Это говорит о моей адекватности и пригодности после выхода из бункера. Также я открываю карты специальное условие. На карте написано Данная карта дает тебе возможность самому выбрать, кто покинет игровой круг без голосования. так что игровой круг покидает игрок номер 3.</p>
                                <h4>На этот круг 30 секунд.</h4>
                                <h3 className='step7'>ШАГ 7.</h3>
                                <p>Игроки по очереди озвучивают четвёртую карту, которую они выбрали.</p>
                                <p>Игрок 1: Я должен попасть в бункер, так как я врач, идеально здоров, общительный, и мое хобби рыбалка. Это также является важным навыком: я умею добывать пищу и смогу прокормить нас.</p>
                                <h3 className='step8'>ШАГ 8.</h3>
                                <p>После того как все игроки озвучили свои карты, время выдвинуть кандидатов на выбывание. Те, в свою очередь, защищаются.</p>
                                <p>Голосование и еще один персонаж остается в лесу.</p>
                                <h4>На этот круг 20 секунд на каждого игрока.</h4>
                                <h3 className='step9'>ШАГ 9.</h3>
                                <p>Игроки по очереди озвучивают пятую карту, которую они выбрали.</p>
                                <p>Игроки 1: Я должен попасть в бункер.</p>
                                <p>Так как я врач, идеально здоров, мое хобби рыбалка, это также является важным навыком, я умею добывать пищу, мой дополнительный навык это знание 5 языков, так как  мы пока не знаем все ли выжившие говорят на нашем языке. Нам важно иметь в бункере человека говорящего на других языках.</p>
                                <h3 className='step10'>ШАГ 10.</h3>
                                <p>После того как все игроки озвучили свои карты, время выдвинуть кандидатов на выбывание, те в свою очередь защищаются.</p>
                                <p>Голосование и еще один персонаж остается в лесу.</p>
                                <h3 className='step11'>ШАГ 11.</h3>
                                <p>Игроки по очереди озвучивают шестую карту.</p>
                                <p>Игрок 1: Я должен попасть в бункер, так как я врач, идеально здоров, общительный, и мое хобби рыбалка. Это также является важным навыком, я умею добывать пищу, мой дополнительный навык это знание 5 языков, так как мы пока не знаем, все ли выжившие говорят на нашем языке. Нам важно иметь в бункере человека, говорящего на других языках. Также я мужчина 25 лет, гетеросексуальный, готовый к заселению планеты.</p>
                                <h3 className='step12'>ШАГ 12.</h3>
                                <p>После того как все игроки озвучили свои карты, время выдвинуть кандидатов на выбывание, они начинаю защищаться</p>
                                <p>Голосование и еще один персонаж остается в лесу.</p>
                                <h3 className='step13'>ШАГ 13.</h3>
                                <p>Игроки по очереди озвучивают седьмую карту.</p>
                                <p>Игрок 1: Я должен попасть в бункер, так как я врач, идеально здоров, общительный, и мое хобби - рыбалка. Это также является важным навыком, я умею добывать пищу, мой дополнительный навык - это знание 5 языков, так как мы пока не знаем, все ли выжившие говорят на нашем языке. Нам важно иметь в бункере человека, говорящего н других языках. Также я мужчина 25 лет, гетеросексуальный, готовый к заселению планеты. У меня так же с собой в багаже пистолет ТТ с патронами, он нам пригодится для защиты.</p>
                                <h3 className='step14'>ШАГ 14.</h3>
                                <p>После того как все игроки озвучили свои карты, время выдвинуть кандидатов на выбывание, теперь их сразу 2. Они начинаю защищаться.</p>
                                <p>Голосование и еще один персонаж остается в лесу.</p>
                            </span>
                            <span>
                                <h2 className='resultRule'>Вы сделали свой выбор и знаете, кто попадает в бункер. У каждого игрока осталось по одной карте, которую он открывает.</h2>
                                <p>Игроки по очережи озвучивают седьмую карты.</p>
                                <p>Игрок 1: Я должен попасть в бункер, так как я врач, идеально здоров, мое хобби рыбалка. Это также является важным навыком: я умею добывать пищу, мой дополнительный навык это знание 5 языков, так как мы пока не знаем, все ли выжиывшие говорят на нашем языке, нам важно иметь в бункере человека, говорящего на других языках. Также я мужчина 25 лет, гетеросексуальный, готовый к заселению планеты, но у меня есть фобия клаустрофобия. Это боязнь замнкутого пространства, так что в бункере я сойду с ума.</p>
                                <p>Игроки сделали неправильный выбор и остались без врача. Выбывшие игроки открывают свои карты и оценивают правильность сделанных за всю игру решений.</p>
                            </span>
                            <span>
                                <h2 className='ruletable'>Таблица голосований.</h2>
                                <span className='TableListWrapper'>
                                    <img className='TableList' src='../TableList.png'></img>
                                </span>
                            </span>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}

export default Rules;