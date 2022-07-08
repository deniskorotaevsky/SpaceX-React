import '../App.css';

const SectionText = () => {
    return (
        <div className='appContainer'>
            <div className='appBoxTextLeft'>
                <h1 ><span className='appH1TextBolt'>Путешествие</span> на красную планету</h1>
                <p className='appOpen'>Начать путешествие</p>
                <div class="line">
                    <div class="line-2"></div>
                    <div class="dot"></div>
                </div>
            </div>
            <div className='item'>
                <p className='itemOne'>Мы <span className='itemTextBolt'>1</span> на рынке</p>
                <p className='itemTwo'>гарантируем <span className='itemTextBolt'>50% </span> безопасность </p>
                <p className='itemThree'>календарик за <span className='itemTextBolt'>2001<span className='itemTextLittlBig'>г.</span></span>  в подарок</p>
                <p className='itemFour'>путешествие <span className='itemTextBolt'>597</span> дней</p>
            </div>
        </div>
    )
}

export default SectionText;