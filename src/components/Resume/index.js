function Resume() {

    return(
        <section>
            <img 
            className='shadow space-under space-over'
            src={require(`../../assets/images/resume/1.png`).default} 
            width="45%"
            />
            <div></div>
            <img 
            className='shadow space-under space-over'
            src={require(`../../assets/images/resume/2.png`).default} 
            width="45%"
            />
            <div></div>
            <img 
            className='shadow space-under space-over'
            src={require(`../../assets/images/resume/3.png`).default} 
            width="45%"
            />
        </section>
    )
}

export default Resume;