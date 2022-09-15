import { ReactComponent as LinkInIcon } from '../../images/team/linkedin.svg';
import { ReactComponent as GitHubIcon } from '../../images/team/github.svg';
import { ReactComponent as CloseIcon } from '../../images/team/close.svg';
import ReactDOM from 'react-dom';
import oleg from '../../images/team/oleg.jpg';
import kateryna from '../../images/team/kateryna.jpg';
import volodymyr from '../../images/team/volodymyr.jpg';
import olegyoung from '../../images/team/olegyoung.jpg';
import oleksandr from '../../images/team/oleksandr.jpg';
import andriy from '../../images/team/andriy.jpg';
import viacheslav from '../../images/team/viacheslav.jpg';

import s from './ModalTeam.module.css';

export const ModalTeam = ({ open, handler }) => {
    return ReactDOM.createPortal(
        <>
            {open && (
                <div className={s.backdrop}>
                    <div className={s.team__container}>
                        <CloseIcon className={s.close__icon} onClick={handler} />
                        <div className={s.card__wrapper}>
                            <div className={s.card}>
                                <img
                                    src={oleg}
                                    alt="1"
                                    className={s.img}
                                    width="260"
                                    height="260"
                                />
                            </div>
                            <div className={s.title__container}>
                                <h3 className={s.member__title}>Oleg Chuchin</h3>
                                <p className={s.role__text}>Team Lead</p>
                            </div>
                            <ul className={s.social__list}>
                                <li className={s.list__item}>
                                    <a
                                        className={s.social__link}
                                        href="https://github.com/xWinst"
                                        target="blank"
                                    >
                                        <GitHubIcon className={s.github} />
                                    </a>
                                </li>
                                <li className={s.list__item}>
                                    <a
                                        className={s.social__link}
                                        href="https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%B3-%D1%87%D1%83%D1%87%D0%B8%D0%BD/"
                                        target="blank"
                                    >
                                        <LinkInIcon className={s.linkin} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={s.card__wrapper}>
                            <div className={s.card}>
                                <img
                                    src={kateryna}
                                    alt="1"
                                    className={s.img}
                                    width="260"
                                    height="260"
                                />
                            </div>
                            <div className={s.title__container}>
                                <h3 className={s.member__title}>Kateryna Zahorui</h3>
                                <p className={s.role__text}>Scrum Master</p>
                            </div>
                            <ul className={s.social__list}>
                                <li className={s.list__item}>
                                    <a
                                        className={s.social__link}
                                        href="https://github.com/kate-zahorui"
                                        target="blank"
                                    >
                                        <GitHubIcon className={s.github} />
                                    </a>
                                </li>
                                <li className={s.list__item}>
                                    <a
                                        className={s.social__link}
                                        href="https://www.linkedin.com/in/kate-zahorui-b4980b155"
                                        target="blank"
                                    >
                                        <LinkInIcon className={s.linkin} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={s.card__wrapper}>
                            <div className={s.card}>
                                <img
                                    src={olegyoung}
                                    alt="1"
                                    className={s.img}
                                    width="260"
                                    height="260"
                                />
                            </div>
                            <div className={s.title__container}>
                                <h3 className={s.member__title}>Oleg Gnatyk</h3>
                                <p className={s.role__text}>Developer</p>
                            </div>
                            <ul className={s.social__list}>
                                <li className={s.list__item}>
                                    <a
                                        className={s.social__link}
                                        href="https://github.com/GnatykOleg"
                                        target="blank"
                                    >
                                        <GitHubIcon className={s.github} />
                                    </a>
                                </li>
                                <li className={s.list__item}>
                                    <a
                                        className={s.social__link}
                                        href="https://www.linkedin.com/in/oleg-gnatyk"
                                        target="blank"
                                    >
                                        <LinkInIcon className={s.linkin} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={s.card__wrapper}>
                            <div className={s.card}>
                                <img
                                    src={oleksandr}
                                    alt="1"
                                    className={s.img}
                                    width="260"
                                    height="260"
                                />
                            </div>
                            <div className={s.title__container}>
                                <h3 className={s.member__title}>Oleksandr Zhovtyi</h3>
                                <p className={s.role__text}>Developer</p>
                            </div>
                            <ul className={s.social__list}>
                                <li className={s.list__item}>
                                    <a
                                        className={s.social__link}
                                        href="https://github.com/AleksZhov"
                                        target="blank"
                                    >
                                        <GitHubIcon className={s.github} />
                                    </a>
                                </li>
                                <li className={s.list__item}>
                                    <a
                                        className={s.social__link}
                                        href="https://www.linkedin.com/in/александр-жовтый-131556247/"
                                        target="blank"
                                    >
                                        <LinkInIcon className={s.linkin} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={s.card__wrapper}>
                            <div className={s.card}>
                                <img
                                    src={andriy}
                                    alt="1"
                                    className={s.img}
                                    width="260"
                                    height="260"
                                />
                            </div>
                            <div className={s.title__container}>
                                <h3 className={s.member__title}>Andrii Makarov</h3>
                                <p className={s.role__text}>Developer</p>
                            </div>
                            <ul className={s.social__list}>
                                <li className={s.list__item}>
                                    <a
                                        className={s.social__link}
                                        href="https://github.com/AngelTekkk"
                                        target="blank"
                                    >
                                        <GitHubIcon className={s.github} />
                                    </a>
                                </li>
                                <li className={s.list__item}>
                                    <a
                                        className={s.social__link}
                                        href="https://www.linkedin.com/"
                                        target="blank"
                                    >
                                        <LinkInIcon className={s.linkin} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={s.card__wrapper}>
                            <div className={s.card}>
                                <img
                                    src={viacheslav}
                                    alt="1"
                                    className={s.img}
                                    width="260"
                                    height="260"
                                />
                            </div>
                            <div className={s.title__container}>
                                <h3 className={s.member__title}>Viacheslav Ushakov</h3>
                                <p className={s.role__text}>Developer</p>
                            </div>
                            <ul className={s.social__list}>
                                <li className={s.list__item}>
                                    <a
                                        className={s.social__link}
                                        href="https://github.com/zerkel1991"
                                        target="blank"
                                    >
                                        <GitHubIcon className={s.github} />
                                    </a>
                                </li>
                                <li className={s.list__item}>
                                    <a
                                        className={s.social__link}
                                        href="https://www.linkedin.com/in/slavainfront"
                                        target="blank"
                                    >
                                        <LinkInIcon className={s.linkin} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={s.card__wrapper}>
                            <div className={s.card}>
                                <img
                                    src={volodymyr}
                                    alt="1"
                                    className={s.img}
                                    width="260"
                                    height="260"
                                />
                            </div>
                            <div className={s.title__container}>
                                <h3 className={s.member__title}>Volodymyr Bondarenko</h3>
                                <p className={s.role__text}>Developer</p>
                            </div>
                            <ul className={s.social__list}>
                                <li className={s.list__item}>
                                    <a
                                        className={s.social__link}
                                        href="https://github.com/Qweeqer"
                                        target="blank"
                                    >
                                        <GitHubIcon className={s.github} />
                                    </a>
                                </li>
                                <li className={s.list__item}>
                                    <a
                                        className={s.social__link}
                                        href="https://www.linkedin.com/in/volodymyr-bondarenko"
                                        target="blank"
                                    >
                                        <LinkInIcon className={s.linkin} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>,
        document.body
    );
};
