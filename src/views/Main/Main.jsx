import React, { useState } from "react";
import BackgroundSlider from 'react-background-slider';
import { Toast } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section';

import logo from '../../assets/logo/logo512.png';

import bg1 from '../../assets/bg/1.jpg';
import bg2 from '../../assets/bg/2.jpg';
import bg3 from '../../assets/bg/3.jpg';

import "./Main.scss";

const backgrounds = [bg1, bg2, bg3];

export default function Main() {
  const [showToast, setShowToast] = useState(true);

  return (<>
    <Toast show={showToast} onClose={() => setShowToast(false)}>
      <Toast.Header>
        <img
          width={20}
          height={20}
          src={logo}
          className="rounded mr-2"
          alt=""
        />
        <strong className="mr-auto">Nature's flower</strong>
      </Toast.Header>
      <Toast.Body>Извините, уже поздно, и мы не принимаем звонки! Но будем рады, если Вы напишите нам в соцсетях!</Toast.Body>
    </Toast>
    <BackgroundSlider
      images={backgrounds}
      duration={3} transition={2} />
    <Header />
    <Section title="«Nature’s Flowers» или Букет NF" text="— это флористическая VIP-мастерская в Минске.
      В нашей мастерской мы создаем эксклюзивные, оригинальные и стильные VIP-букеты,
      цветочные композиции из живых цветов, которыми вы сможете порадовать, удивить и
      приукрасить жизнь своих любимых и дорогих вам людей!" label="О нас..."
    />
    <Section title="Контакты" text="Наша цель — объединять людей, позволяя им легко превращать эмоции в действия,
    а получателям — наслаждаться качественными, свежими, креативными цветами от бутона до цветения в эксклюзивных каркасах.
    Заказать цветы вы можете в считанные секунды, где бы вы ни находились,
    через <a href='https://www.instagram.com/naturesflowers_by/'>инстаграмм</a>,
    <a href='mailto:naturesflowersby@gmail.com'>e-mail</a>, или <a href='tel:+375291276171'>Viber +375291276171</a>." right={true} label="Способ связи…"
    />
    <Section id="shipping" text="Когда дело доходит до доставки цветов вашим близким, мы хотим сделать это как можно проще.
    Потому что, когда доставка цветов проста, это делает всех счастливыми.
    Вот почему мы предлагаем прекрасный ассортимент букетов из свежих цветов с <b>бесплатной доставкой прямо к двери</b>.
    Все, что вам нужно сделать, это заказать идеальный букет (по предварительной записи за 15 дней до предполагаемой даты дарения),
     выбрать день доставки и расслабиться, а мы позаботимся об остальном!" label="Доставка…"
    />
    <Section id="payment" title="Оплата" text={`Расчёт происходит любым удобным для вас способом после получения клиентом букета.

    Мы верим в продуманное ведение бизнеса, потому что относимся к клиентам с той же заботой, что и к своим друзьям и семье!

    Добро пожаловать в нашу семью!`.replace(/\n/g,'<br/>')} label="Оплата…" right={true}
    />
    <Footer />
  </>)
}
