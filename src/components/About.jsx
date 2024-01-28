import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import aksh from "./images/aksh.jpg";

const AboutPage = () => {
  return (
    <>
      <Card style={{ width: "50rem" }} className="shadow-lg mx-auto mt-3">
        <div className="d-flex align-items-center">
          <Image
            src={aksh}
            alt="about"
            className="p-3 rounded border"
            style={{ width: "20rem" }}
          />
          <div className="flex-grow-1">
            <Card.Title className="shadow-lg mx-auto mt-3">About Us</Card.Title>
            <Card.Body>
              Welcome to my React project <strong>Random Stuff!</strong>. This
              project is a fun exploration of various topics that pique my
              curiosity. From fascinating trivia to intriguing facts, I've
              gathered a collection of random information that will keep you
              entertained and enlightened. Whether you're looking to discover
              something new or simply embrace the joy of serendipity, this
              project has got you covered. Join me on this whimsical journey as
              we delve into the depths of randomness and uncover hidden gems
              along the way. Get ready to be surprised, inspired, and maybe even
              a little bit bewildered! So, sit back, relax, and let's embark on
              this exciting adventure together!
              <br />
              <br />
              With each visit to this virtual space, you'll encounter a
              delightful medley of fascinating facts, captivating stories, and
              thought-provoking tidbits. From the quirky and obscure to the
              awe-inspiring and mind-boggling, I've scoured the corners of the
              universe to assemble a collection that will leave you amazed,
              enlightened, and perhaps even questioning the fabric of reality
              itself.
              <br />
              <br />
              Through meticulously curated content, engaging visuals, and an
              interactive user experience, I've endeavored to create an
              immersive environment that beckons you to embrace the spontaneous,
              the unexpected, and the delightfully weird. With every click,
              you'll unlock a new door, leading you down a rabbit hole of
              knowledge, trivia, and perhaps even a touch of whimsy.
            </Card.Body>
          </div>
        </div>
      </Card>
    </>
  );
};

export default AboutPage;
