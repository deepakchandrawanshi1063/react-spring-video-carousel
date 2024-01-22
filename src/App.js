import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";

function App() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://www.youtube.com/embed/k8thEpyl7lc?si=Sy430KuTn2e5LXoU" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://www.youtube.com/embed/dilIYJkvd4Q?si=j3YfvEBaCfyjpHb1" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://www.youtube.com/embed/xgk0gKxNKmo?si=OojtNOrj1EH4nBWz" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://www.youtube.com/embed/8ny_ktspePw?si=kgQcDsu_VWUS7nRa" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://www.youtube.com/embed/17VvP36ijXw?si=_KcWR9XlQ8_pwK51" />
      ),
    },
  ];
  return (
    <div className="">
      <Carousel
        cards={cards}
        height="500px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default App;
