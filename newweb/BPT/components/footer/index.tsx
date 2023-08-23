import Link from "next/link"
import css from "./src/footer.module.scss"
import Container from "../container"

interface Link {
    name: string
    href: string
}

const smoothScrollTo = (target:string) => {
    const element = document.querySelector(target);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

export default function Footer() {
    const links: Link[] = [
        {
            name: "Home",
            href: "#",
        },
        {
            name: "About",
            href: "#",
        },

        {
            name: "Join",
            href: "#",
        },

        {
            name: "Contact",
            href: "#",
        },
    ]

    return (
        <div className={css.root}>
            <div className={css.wrapper}>
                <center>
                    <h4 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
                        Contact Us
                    </h4>
                </center>
                <Container>
                    <div id="contact" className={css.form}>
                        <div className={css.bg}>
                            <img src="/world.svg" alt="world image" />
                            <div className={css.rectangle} />
                        </div>

                        <form className={css.box}>
                            <input type="text" name="name" placeholder="Name" />
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                            />
                            <input
                                type="number"
                                name="mobile"
                                placeholder="Mobile No."
                            />

                            
                            <textarea
                                name="mobile"
                                placeholder="Write your message."
                            />

                            <button type="submit">Lets Talk!</button>
                        </form>
                    </div>

                    <div className={css.menu}>
                        <div className={css.col}>
                            <div className={css.about}>
                                <p>
                                
                                </p>
                            </div>
                        </div>

                        <div className={css.col}>
                            <div className={css.nav}>
                                <b className={css.heading}>About</b>
                                <Link href="#home"
                                onClick={(e) => {
                                    e.preventDefault();
                                    smoothScrollTo('#home');
                                  }}
                                >Home</Link>

                                <Link href="#services"
                                onClick={(e) => {
                                    e.preventDefault();
                                    smoothScrollTo('#services');
                                  }}
                                >Services</Link>

                                <Link href="#team"
                                onClick={(e) => {
                                    e.preventDefault();
                                    smoothScrollTo('#team');
                                  }}
                                >Team</Link>

                               

                                <Link href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    smoothScrollTo('#contact');
                                  }}
                                >Contact</Link>

                            </div>
                        </div>

                        

                        <div className={css.col}>
                            <div className={css.nav}>
                                <b className={css.heading}>Connect</b>

                                <Link href="https://instagram.com/bytepowertechnologies?igshid=MzRlODBiNWFlZA==">Instagram</Link>
                                <Link href="https://www.linkedin.com/in/byte-power-350020264">Linkedin</Link>
                            </div>
                        </div>
                    </div>

                    
                </Container>
            </div>
        </div>
    )
}
