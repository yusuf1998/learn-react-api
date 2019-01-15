import React, { Fragment } from "react";
import ReactTable from "react-table";
import {
  Card,
  CardBody,
  Container,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import Axios from "axios";
const columns = [
  {
    Header: "Name",
    accessor: "name"
  },
  {
    Header: "Height",
    accessor: "height"
  },
  {
    Header: "Mass",
    accessor: "mass"
  },
  {
    Header: "Hair Color",
    accessor: "hair_color"
  },
  {
    Header: "Skin Color",
    accessor: "skin_color"
  },
  {
    Header: "Eye Color",
    accessor: "eye_color"
  },
  {
    Header: "Birth Year",
    accessor: "birth_year"
  },
  {
    Header: "Gender",
    accessor: "gender"
  }
];

class Signup extends React.Component {
  inputElement = React.createRef();
  constructor() {
    super();
    this.state = {
      tableData: [
        {
          name: "",
          height: "",
          mass: "",
          hair_color: "",
          skin_color: "",
          eye_color: "",
          birth_year: "",
          gender: ""
        }
      ]
    };
  }

  componentDidMount() {
    Axios.get("https://swapi.co/api/people?page=1", {
      responseType: "json"
    })
      .then(response => {
        const itemData = response.data;
        console.log(itemData);
        this.setState({ tableData: itemData.results });
      })
      .catch(err => console.log(err));
  }
  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  addData = e => {
    e.preventDefault();
    const newData = this.state;
    console.log(newData);
  };

  render() {
    const { tableData } = this.state;
    return (
      <Fragment>
        <Container className="App my-5 py-5">
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h1>Star Wars Talents</h1>

            <Card>
              <CardBody>
                <Form className="form" onSubmit={this.addData}>
                  <Col>
                    <FormGroup>
                      <Label for="fullname">Fullname</Label>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Input Your Fullname"
                        onChange={this.handleInput}
                        value={this.state.name}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="age">Age</Label>
                      <Input
                        type="number"
                        name="height"
                        id="height"
                        placeholder="Height"
                        onChange={this.handleInput}
                        value={this.state.height}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="mass">Age</Label>
                      <Input
                        type="number"
                        name="mass"
                        id="mass"
                        placeholder="Mass"
                        onChange={this.handleInput}
                        value={this.state.mass}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="hair_color">Age</Label>
                      <Input
                        type="text"
                        name="hair_color"
                        id="hair_color"
                        placeholder="Hair Color"
                        onChange={this.handleInput}
                        value={this.state.hair_color}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="skin_color">Age</Label>
                      <Input
                        type="text"
                        name="skin_color"
                        id="skin_color"
                        placeholder="Skin Color"
                        onChange={this.handleInput}
                        value={this.state.skin_color}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="eye_color">Age</Label>
                      <Input
                        type="text"
                        name="eye_color"
                        id="eye_color"
                        placeholder="Eye Color"
                        onChange={this.handleInput}
                        value={this.state.eye_color}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="birth_year">Age</Label>
                      <Input
                        type="date"
                        name="birth_year"
                        id="birth_year"
                        placeholder="Birth Year"
                        onChange={this.handleInput}
                        value={this.state.birth_year}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="gender">Age</Label>
                      <Input
                        type="text"
                        name="gender"
                        id="gender"
                        placeholder="Gender"
                        onChange={this.handleInput}
                        value={this.state.gender}
                      />
                    </FormGroup>
                  </Col>
                  <Button>Register</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Container>
        <Container>
          <Col>
            <ReactTable
              data={tableData}
              columns={columns}
              defaultPageSize={5}
            />
          </Col>
        </Container>
      </Fragment>
    );
  }
}
export default Signup;
