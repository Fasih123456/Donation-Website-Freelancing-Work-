import '../css/button.css';

const Button = () => {
    return(
        <div class="wrapper">
        <a id='button-link' href="/DonateToday">
          <div class="wave-1"></div>
          <div class="wave-2"></div>
          <span style={{fontSize: "15px", fontFamily: "font-family: 'futura', 'Century Gothic', sans-serif" }}>Donate Today </span>
        </a>
      </div>
    )
}

export default Button;