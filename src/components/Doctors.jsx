import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { doctorData } from "../helpers/data";
import AddModal from "./AddModal";
import { useState } from "react";

const Doctors = ({apps, setApps }) => {
  //console.log(doctorData)
  const [showModal, setShow] = useState(false);
  const [drName, setDrName] = useState("");
  // const handleClose = () => setShow(false);

  const addAppointment = (newAppo) => {
    setApps([...apps, newAppo])

  }
  return (
    <Container>
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row>
        {/* {
          doctorData.map(doctor =>  {
          const {id,img,name,dep} = doctor;
        return(
          <Col key={id}>
          <Image src={img} alt={name}/>
           </Col>
        )})
        } */}

        {doctorData.map(({ id, img, name, dep }) => (
          <Col xs={6} sm={4} lg={3} xl={2} key={id}>
            <Image
              className="img-thumbnail doctor-img"
              src={img}
              alt={name}
              onClick={() => {
                setShow(true);
                setDrName(name);
              }}
            />
            <h5>{name}</h5>
            <p>{dep}</p>
          </Col>
        ))}
      </Row>
      <AddModal
        showModal={showModal}
        handleClose={() => setShow(false)}
        drName={drName}
        addAppointment= {addAppointment}
      />
    </Container>
  );
};

export default Doctors;
