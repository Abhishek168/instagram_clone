import React from "react";
import Navbar from "./Navbar";
import { Card } from "react-bootstrap";
function Dashboard({ allPost }) {
  return (
    <>
      <Navbar />
      <i class="fa-light fa-heart"></i>
      <Card
        className="d-flex justify-content-center"
        border="Secondary"
        className="primary mr-1 border-0"
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          justifyContent: "center",
          paddingRight: "0px",
        }}
      >
        {allPost.map((post) => {
          return (
            <div key={post.id}>
              <Card
                className="d-flex justify-content-center"
                border="Secondary"
                style={{
                  width: "759px",
                  backgroundColor: "white",
                  alignItems: "center",
                }}
              >
                <Card.Title style={{ margin: "10px 613px 10px 30px" }}>
                  {post.userName}
                </Card.Title>
                <Card.Img variant="top" src={post.userPost} />
                <Card.Body>

                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Card>
    </>
  );
}

export default Dashboard;
