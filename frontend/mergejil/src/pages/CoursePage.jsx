import "../styles/coursePage.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";

function App() {
  const data = [
    {
      name: "TONY GARRET",
      job: "Software",
      image: "https://themewagon.github.io/studylab/images/work-1.jpg",
      des: "Design for the web with adobe photoshop",
      price: "100$",
    },
    {
      name: "TONY GARRET",
      job: "Software",
      image: "https://themewagon.github.io/studylab/images/work-1.jpg",
      des: "Design for the web with adobe photoshop",
      price: "100$",
    },
    {
      name: "TONY GARRET",
      job: "Software",
      image: "https://themewagon.github.io/studylab/images/work-1.jpg",
      des: "Design for the web with adobe photoshop",
      price: "100$",
    },
    {
      name: "TONY GARRET",
      job: "Software",
      image: "https://themewagon.github.io/studylab/images/work-1.jpg",
      des: "Design for the web with adobe photoshop",
      price: "100$",
    },
    {
      name: "TONY GARRET",
      job: "Software",
      image: "https://themewagon.github.io/studylab/images/work-1.jpg",
      des: "Design for the web with adobe photoshop",
      price: "100$",
    },
    {
      name: "TONY GARRET",
      job: "Software",
      image: "https://themewagon.github.io/studylab/images/work-1.jpg",
      des: "Design for the web with adobe photoshop",
      price: "100$",
    },
    {
      name: "TONY GARRET",
      job: "Software",
      image: "https://themewagon.github.io/studylab/images/work-1.jpg",
      des: "Design for the web with adobe photoshop",
      price: "100$",
    },
    {
      name: "TONY GARRET",
      job: "Software",
      image: "https://themewagon.github.io/studylab/images/work-1.jpg",
      des: "Design for the web with adobe photoshop",
      price: "100$",
    },
  ];

  return (
    <div className="big">
      <div className="bigBox">
        <div className="bigBoxTwo">
          {data.map((el) => {
            return (
              <Card sx={{ width: 380 }}>
                <CardMedia
                  sx={{ height: 250, position: "relative" }}
                  image={el.image}
                >
                  <div className="price"> {el.job}</div>
                </CardMedia>
                <CardContent>
                  <Typography variant="h5">{el.des}</Typography>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      marginTop: "12px",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{ display: "flex", color: "gray" }}
                    >
                      ADVISOR:
                      <Typography variant="body2" color="primary">
                        {el.name}
                      </Typography>
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{ display: "flex", color: "gray" }}
                    >
                      Price:
                      <Typography variant="body1" color="primary">
                        {el.price}
                      </Typography>
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="pagination">
          <Pagination count={5} variant="outlined" color="primary" />
        </div>
      </div>
    </div>
  );
}

export default App;
