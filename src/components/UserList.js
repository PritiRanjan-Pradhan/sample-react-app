import react, { useState } from "react";
import { useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

function UserList() {
  const [userList, setUserList] = useState();

  useEffect(() => {
    const GetUserList = async () => {
      await fetch("https://reqres.in/api/users?page=2").then(
        async (response) => {
          //console.log(await response.json());
          response = await response.json();

          var data = response.data;
          setUserList(data);
          console.log("user list inside", userList);
        }
      );
    };
    GetUserList();
  }, []);
  return (
    <>
      <Row>
        {userList &&
          userList.map((user) => {
            return (
              <Col lg={4} style={{ marginTop: 5 }}>
                <Card style={{ width: "20rem" }}>
                  <Card.Img variant="top" src={user.avatar} />
                  <Card.Body>
                    <Card.Title>
                      {user.first_name} {user.last_name}
                    </Card.Title>
                    <Card.Text>{user.email}</Card.Text>
                    <Button variant="primary">View</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </>
  );
}

export default UserList;
